var express      = require('express')
  , app          = express()
  , http         = require('http')
  , server       = http.createServer(app)
  , sys          = require('sys')
  , fs           = require('fs')
  , ejs          = require('ejs')
  , http         = require('http')
  , path         = require('path')
  , cookieParser = require('cookie-parser')
  , session      = require('express-session')
  , bodyParser   = require('body-parser')
  , glob         = require('glob')
  , multer       = require('multer')
  , mongoose     = require('mongoose')
  , bcrypt       = require('bcrypt-nodejs')
  , exec         = require('child_process').exec
  , io           = require('socket.io').listen(server)
  , done         = false
  , destination  = null;

var projectName = null;
var rooms = {};
var rooms_router = {};
var guestCount = 0;
var users = {};
var lastSelect   = null

// db Schema setting
var memberSchema  = mongoose.Schema({
    name:String,
    gender:String,
    id:String,
    admin:String,
    superAdmin:String
});
var plistSchema   = mongoose.Schema({
    name:String,
    router:String,
    column:[],
    range:[],
    time:{ type: Date, default: Date.now },
    privateYN:String
});
var mlistSchema   = mongoose.Schema({
    name:String,
    status:Number,
    username:String,
    pubdate:String
});
var cdmlistSchema = mongoose.Schema({
    row:Number,
    col:String,
    order:Number
});
var noticeSchema  = mongoose.Schema({
    content:String,
    pubDate:{ type: Date, default: Date.now }
});
var Memberlist    = mongoose.model('member_model',memberSchema);
var Plist         = mongoose.model('plist_model',plistSchema);
var Notice        = mongoose.model('notice_model',noticeSchema);
var Mlist         = {};
var Cdmlist       = {};
var currentUpload = {};
var modFileRouter
// db connect
mongoose.connect('mongodb://127.0.0.1/cdmDB',function(err){
    if(err){
        console.log('mongoose connection error :'+err);
        throw err;
    }
    // server connect
    server.listen(8080, function(req, res) {
        console.log('Socket IO server has been started. PORT 8080');
    });    
});


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

app.set('view options', { pretty: true });

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({
	parameterLimit: 10000,
    limit: '100mb'
}));

app.use(bodyParser.urlencoded({
	parameterLimit: 10000,
    limit: '100mb',
    extended: true
}));
app.use(cookieParser());

app.use(session({secret:'secret key',resave:false,saveUninitialized:true,cookie:{maxAge:86400000}}));

function isLogin(req){
	if(req.session.userid == undefined){
		return false;
	}
	else{
		return true;
	}
}

Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); 
    var dd  = this.getDate().toString();
    return yyyy + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + (dd[1]?dd:"0"+dd[0]);
};

//multer
app.use(multer({
    dest: 'public/data/',
    changeDest: function(dest, req, res) {
		var refererUrl = req.headers.referer.split("/");
		modFileRouter = refererUrl[refererUrl.length -1];
        return dest + modFileRouter + '/uploads';
    },
    rename: function(fieldname, filename) {
        //return filename+Date.now();
        //console.log('multer rename projectName : ' + projectName)
        return filename;
    },
    onFileUploadStart: function(file) {
        //console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function(file,req,res) {
        //console.log(file.fieldname + ' uploaded to  ' + file.path);        
		if(file.path.indexOf('public/data') > -1){
			var mlist = new Mlist[modFileRouter]({name:file.path.split('/')[4],status:0,username:req.session.username,pubdate:new Date().yyyymmdd()});
		}
		else{
			var mlist = new Mlist[modFileRouter]({name:file.path.split('\\')[4],status:0,username:req.session.username,pubdate:new Date().yyyymmdd()});
		}
		mlist.save(function(err,tasks){});
        currentUpload = mlist;
        done = true;
        
		
    }
}));

Plist.find(function(err,tasks){
	if(tasks != ""){
		for(var i=0;i<tasks.length;i++){
			rooms[tasks[i].name] = {};
			//#111 rooms_router[tasks[i].router] = tasks[i].name;
            rooms_router[tasks[i].router] = {name:tasks[i].name,private:tasks[i].privateYN};
			var mlistModel = "mlist_" + tasks[i].router + "_model";
			var cdmlistModel = "cdmlist_" + tasks[i].router + "_model";
			Mlist[tasks[i].router] = mongoose.model(mlistModel,mlistSchema);
			Cdmlist[tasks[i].router] = mongoose.model(cdmlistModel,cdmlistSchema);
		}
	}
    //console.log(rooms_router)
});

// routing
app.get('/',function(req,res){
	if(isLogin(req)){
		res.redirect('/codingmap/list');
	}
	else{
		res.redirect('/login');
	}
});

app.get('/login',function(req,res){
	res.sendFile(__dirname + '/views/login.html');
});

app.get('/join',function(req,res){
	res.sendFile(__dirname + '/views/join.html');
});

app.get('/getAdmin',function(req,res,err){
	var account = {admin:req.session.useradmin,superAdmin:req.session.userSuperAdmin};     
	res.send(account);
});

app.get('/codingmap',function(req,res){
    if(isLogin(req)){
		res.redirect('/codingmap/list');
	}
	else{
		res.redirect('/login');
	}
});

app.get('/logoutRequest', function (req, res) {
  delete req.session.userid;
  delete req.session.useradmin;
  res.redirect('/login');
});

io.sockets.on('connection', function (socket) { 
	
	if(users.name == undefined){return false;}
	var user = {};
	user.name = users.name;
	user.gender = users.gender;
    if(projectName == null){
        for(var key in rooms_router){
            projectName = key;
            break;
        }
    }
	socket.room = rooms_router[projectName].name;
    socket.username = user.name;
    rooms[rooms_router[projectName].name][user.name] = {name:user.name,gender:user.gender};
    socket.join(rooms_router[projectName].name);
    io.sockets.in(rooms_router[projectName].name).emit('updateMember',rooms[rooms_router[projectName].name]);
    socket.emit('updaterooms', rooms_router, rooms_router[projectName].name, projectName);
	socket.on('disconnect', function(){	
		if(rooms[socket.room]){
			delete rooms[socket.room][socket.username];
			socket.broadcast.to(socket.room).emit('updateMember',rooms[socket.room] );
			socket.broadcast.to(socket.room).emit('deleteCell',socket.username);
			socket.leave(socket.room);
		}
	}); 
    //처음 접속 시점이 어디지?
    socket.on('fromclient', function(data) {
        data.ip = user.name;
		if(data.loca){
			//마지막 선택 셀
			lastSelect = data.loca
		}
		
        socket.broadcast.to(socket.room).emit('toclient', data);
    });
    
    socket.on('fromNewDoc', function(doc) {
        socket.broadcast.to(socket.room).emit('toNewDoc', doc.data);
    });
    socket.on('fromNotiNewDoc', function(data) {
        socket.broadcast.emit('toNotiNewDoc', data);
    });
    
    socket.on('fromUpdateStatus', function(data) {
        //console.log('fromUpdateStatus : '+ socket.room)
        socket.broadcast.to(socket.room).emit('toUpdateStatus', data);
    });
    socket.on('fromOtherDeselect',function(){
        //console.log('received fromOtherDeselect!!')
        socket.broadcast.to(socket.room).emit('toOtherDeselect');
    });
    socket.on('fromDepthChange',function(data){
        socket.broadcast.to(socket.room).emit('toDepthChange',data);
    });
    socket.on('fromRemoveRow', function(data) {
        socket.broadcast.to(socket.room).emit('tocRemoveRow', data);
    });
	socket.on('fromCreateRow', function(data) {
        socket.broadcast.to(socket.room).emit('toCreateRow', data);
    });
});

//notice create
app.post('/createNotice',function(req,res){
    var notice = new Notice({content:req.body.content});
    notice.save(function(err,tasks){});
    res.send('OK');
});

app.post('/getNotice',function(req,res){
    Notice.find().sort('-pubDate').exec(function(err,tasks){
        //console.log(tasks[0]);
        res.send(tasks[0]);
    });
});

//project create
app.post('/projectCreate',function(req,res){
	Plist.find({name:req.body.name}).exec(function(err,tasks){
		if(tasks != ''){
			res.send({status:'N',message:'이미 등록되어 있는 프로젝트명 입니다. 다시 등록해주세요.'});
		}
		else{
			Plist.find({router:req.body.router}).exec(function(err,tasks){
				if(tasks != ''){
					res.send({status:'N',message:'이미 등록되어 있는 프로젝트ID 입니다. 다시 등록해주세요.'});
				}
				else{
					var column = [req.body.column1,req.body.column2,req.body.column3,req.body.column4,req.body.column5,req.body.column6,req.body.column7,"화면ID","상태","Description"];
					var dbCollection = req.body.router;
					var mlistModel = "mlist_" + dbCollection + "_model";
					var cdmlistModel = "cdmlist_" + dbCollection + "_model";
					var columnHidden = [req.body.columnHidden1,req.body.columnHidden2,req.body.columnHidden3,req.body.columnHidden4,req.body.columnHidden5,req.body.columnHidden6,req.body.columnHidden7,req.body.columnHidden8,req.body.columnHidden9,req.body.columnHidden10];
					var rangeDefault = [];
					for(var i=0;i<columnHidden.length;i++){
						if(columnHidden[i] == "on"){
							rangeDefault[i] = 'true';
						}
						else{
							rangeDefault[i] = 'false';
						}
					}
					
					var plist = new Plist({name:req.body.name,router:dbCollection,column:column,range:rangeDefault,privateYN:req.body.privateYN});
					var dirPath1 = "public/data/"+dbCollection;
					var dirPath2 = dirPath1+"/uploads";

					plist.save(function(err,tasks){});
					Mlist[dbCollection] = mongoose.model(mlistModel,mlistSchema);
					Cdmlist[dbCollection] = mongoose.model(cdmlistModel,cdmlistSchema);
					fs.mkdir(dirPath1, function(err) { 
						fs.mkdir(dirPath2, function(err) { 
						});
					});
					rooms[req.body.name] = {};
					rooms_router[dbCollection] = {name:req.body.name,private:req.body.privateYN};
					res.send({status:'Y',message:'프로젝트가 정상적으로 생성되었습니다.'});
				}
			})
		}
	});
})

//project remove
app.post('/projectRemove', function(req,res,err){	
	Plist.remove({router:req.body.router},function(err,tasks){});
	var dirPath1 = "public/data/"+req.body.router;
	var dirPath2 = dirPath1+"/uploads";
	var files = fs.readdirSync(dirPath2);
	if (files.length > 0){
		for (var i = 0; i < files.length; i++) {
			var filePath = dirPath2 + "/" + files[i];
			fs.unlink(filePath,function(err){
				fs.rmdir(dirPath2, function(err) { 
					fs.rmdir(dirPath1, function(err) {});	
				});	
			});
		}
    }
	else{
		fs.rmdir(dirPath2, function(err) { 
			fs.rmdir(dirPath1, function(err) {});	
		});	
	}

	var dropMlist = new Mlist[req.body.router]();
	var dropCdmlist = new Cdmlist[req.body.router]();
	if(dropMlist)dropMlist.collection.drop();
	if(dropCdmlist)dropCdmlist.collection.drop();
	delete(rooms[req.body.router]);
	delete(rooms_router[req.body.router]);
	Plist.find(function(err,tasks){
		res.send(tasks);
	})
});

//get column
app.post('/getColumn',function(req,res,ree){
	Plist.find({router:req.body.router},function(err,tasks){
		res.send({
			data_column : tasks[0].column,
			data_range : tasks[0].range,
			data_private : tasks[0].privateYN
		});
	})
});

app.post('/columnModify',function(req,res,ree){
	var columnMod = [req.body.column1,req.body.column2,req.body.column3,req.body.column4,req.body.column5,req.body.column6,req.body.column7,req.body.column8,req.body.column9,req.body.column10];
	var rangeMod = [];
	var columnHidden = [req.body.columnHidden1,req.body.columnHidden2,req.body.columnHidden3,req.body.columnHidden4,req.body.columnHidden5,req.body.columnHidden6,req.body.columnHidden7,req.body.columnHidden8,req.body.columnHidden9,req.body.columnHidden10];
	for(var i=0;i<columnHidden.length;i++){
		if(columnHidden[i] == "on"){
			rangeMod[i] = 'true';
		}
		else{
			rangeMod[i] = 'false';
		}
	}
	var privateMod = req.body.privateYN;
	Plist.update({router:req.body.modRouter},{column:columnMod,range:rangeMod,privateYN:privateMod},function(err,tasks){
		res.send('');
	});
});

app.get('/codingmap/list', function (req, res){
	if(isLogin(req)){
        if(destination != null){
            res.render('list.html',{dest:destination,loginUserName:req.session.username,isAdmin:req.session.useradmin});
            destination = null;
        } else {
            //res.sendFile(__dirname + '/views/list.html');
            res.render('list.html',{dest:destination,loginUserName:req.session.username,isAdmin:req.session.useradmin});
        }
	}
	else{
		res.redirect('/login');
	}
});

app.get('/codingmap/getList',function (req, res){
	Plist.find().sort('-time').exec(function(err,tasks){
		/* 소켓멤버관련 수정
		if(tasks.length != 0){
			for(var i=0;i<tasks.length;i++){
				rooms[tasks[i].name] = {};
				rooms_router[tasks[i].router] = tasks[i].name;
			}
		}
		*/
		res.send(tasks);
	});
});

//Mlist
app.post('/:projectName/updateMList',function(req,res){
	projectName = req.params.projectName
	if(req.body.status == 2){
		Mlist[projectName].remove({name:req.body.name},function(err,tasks){
		});
	}
	else{
		Mlist[projectName].update({name:req.body.name},{status:req.body.status},function(err,tasks){});
	}
	res.send('');
});

app.get('/:projectName/modifyList',function(req,res,err){  
	projectName = req.params.projectName
	Mlist[projectName].find().exec(function(err,tasks){
		res.send(tasks.reverse());
	});
});   
	
app.post('/:projectName/upload', function(req, res) {
	projectName = req.params.projectName;
    if (done == true) {
        //var sendName = req.files.mdoc.originalname;
		res.send(JSON.stringify(currentUpload));
    }
});

app.get('/getServerList', function(req, res) {
	fs.readFile('./views/config.html', 'utf8', function(err, data) {
		res.send({
			src: data,
			allowed: true
		});
	});
});

app.get('/codingmap/:projectName',function(req,res){
	if(isLogin(req)){
        currentUser = req.session.username;
		var refererUrl = req.headers.referer;
		if(refererUrl == undefined || refererUrl.indexOf('/codingmap/list') <= -1){
			res.redirect('/codingmap/list');
		}
		else{
			projectName = req.params.projectName;
			users.name = req.session.username;
			users.gender = req.session.usergender;
			var isProject = false;
			for(var prop in rooms_router){
				if(projectName == prop) isProject = true;
			}
			
			Plist.find({router:projectName}).exec(function(err,tasks){
				if(isProject) {
					res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
					res.render('index.html',{range:tasks[0].range,column:tasks[0].column,loginUserName:req.session.username});
				}else{
					res.send('등록된 프로젝트의 경로가 아니거나 삭제된 프로젝트 입니다.. [<a href="/">프로젝트 리스트로 돌아가기</a>]');
				} 
			})
		}

	}
	else{
		res.redirect('/login');
	}
});

app.post('/:projectName/changeRange',function(req,res,err){
	projectName = req.params.projectName
	Plist.update({router:projectName},{range:req.body.range},function(err,tasks){});
	res.send('');
})

//getdatas
app.get('/:projectName/getDatas', function(req,res,err){	
	projectName = req.params.projectName
	var max_count,total_num;
	Cdmlist[projectName].findOne().sort('-row').exec(function(err,tasks){
		if(tasks != null){
			max_count = tasks.row + 1;
		}
		else{
			max_count = 0;
		}
	})
	Cdmlist[projectName].count().exec(function(err,tasks){
		if(tasks != null){
			total_num = tasks
		}
		else{
			total_num = 0
		}
	})
	Cdmlist[projectName].find().sort({order:1}).exec(function(err,tasks){
		var dataObj ={
			count:max_count,
			total:total_num,
			cell:tasks
		}
		res.send(dataObj);
	});
});

app.post('/:projectName/update', function(req,res,err){	
	projectName = req.params.projectName
	for(var i = 0;i<req.body.row.length;i++){
		(function(idx){
			setTimeout(function(){
				Cdmlist[projectName].find({row:req.body.row[idx]},function(err,tasks){
					if(tasks == ''){
						var cdm = new Cdmlist[projectName]({row:req.body.row[idx],col:req.body.col[idx],order:req.body.order[idx]});
						cdm.save(function(err,tasks){console.log(idx)});
						//console.log(req.body.row[idx])
					}
					else{
						Cdmlist[projectName].update({row:req.body.row[idx]},{col:req.body.col[idx],order:req.body.order[idx]},function(err,tasks){console.log("엘스" + idx)});
						
					}
				});
			},i*35);
		})(i);
	}
	res.send('');
});

app.post('/:projectName/sort', function(req,res,err){	
	projectName = req.params.projectName
	for(var i = 0;i<req.body.row.length;i++){
		(function(idx){
			setTimeout(function(){
				Cdmlist[projectName].update({row:req.body.row[idx]},{order:req.body.order[idx]},function(err,tasks){});
			},i*35);
		})(i);
	}
	res.send('');
});

app.post('/:projectName/remove', function(req,res,err){	
	projectName = req.params.projectName
	for(var i = 0;i<req.body.row.length;i++){
		(function(idx){
			Cdmlist[projectName].remove({row:req.body.row[idx]},function(err,tasks){});
		})(i);
	}
	res.send('');
});

app.post('/fromProjectList',function(req,res,err){
    destination = req.body.destination;
    res.send('');
});

app.post('/svnToPub',function(req,res,err){
    exec("/home/jboss/publisher/bin/svn2pstatic",function(error, stdout, stderr){        
        if(error == null) res.send(stdout);
        else res.send(error);        
    });    
});

app.post('/pubToDev',function(req,res,err){
    exec("/home/jboss/publisher/bin/pstatic2tstatic",function(error, stdout, stderr){
        if(error == null) res.send(stdout);
        else res.send(error);
    });
});

app.post('/svnToPubAndDev',function(req,res,err){
    exec("/home/jboss/publisher/bin/syncAll",function(error, stdout, stderr){
       if(error == null) res.send(stdout);
       else res.send(error);
    });
});

app.post('/updateSrc',function(req,res,err){
    exec("/home/jboss/publisher/bin/codingmap_svnup",function(error, stdout, stderr){       
       if(error == null) res.send(stdout);
       else res.send(error);
    });
});
app.post('/getExcludeList',function(req,res,err){
    fs.readFile('/home/jboss/publisher/bin/rsync_except_list','utf-8',function(err,data){
        res.send(data);
    });
});
app.post('/updateExcludeList',function(req,res,err){
    fs.writeFile('/home/jboss/publisher/bin/rsync_except_list',req.body.lists,function(err){
        if(err) throw err;
        else res.send('OK');
    });
});

//compare remineUser with cdmDBuser and processing
app.post('/saveUser',function(req,res,err){
    Memberlist.find({id:req.body.userId}).exec(function(err,tasks){
		if(tasks != ''){
			req.session.userid = tasks[0].id;
            req.session.useradmin = tasks[0].admin;
            req.session.userSuperAdmin = tasks[0].superAdmin;
            if(tasks[0].name !== req.body.name){
                Memberlist.update({id:req.body.userId},{name:req.body.name},function(err,tasks){
                    req.session.username = req.body.name;
                })
            } else {
                req.session.username = tasks[0].name;
            }            
            req.session.usergender = tasks[0].gender;
            res.send('success');
		}
		else{
			var memberlist = new Memberlist({
                id:req.body.userId,
                name:req.body.name,
                gender:Math.floor(Math.random()*20).toString(),  
                admin:'N',
                superAdmin:'N'
            });
			memberlist.save(function(err,tasks){
                //console.log(tasks);
                req.session.userid = tasks.id;
                req.session.useradmin = tasks.admin;
                req.session.userSuperAdmin = tasks.superAdmin;
                req.session.username = tasks.name;
                req.session.usergender = tasks.gender;
                res.send('success');
            });
		}
	});
});

