var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.
var bodyParser = require('body-parser'); //post데이터에 접근에 필요
var fs = require('fs'); //파일 시스템을 사용
var multer = require('multer'); //파일 업로드
var _storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})
var upload = multer({storage:_storage});

app.listen(3000, function () { //3000번 포트를 사용합니다.
	console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

app.use(bodyParser.urlencoded({extended: true}));
app.locals.pretty = true; //jade 자동 줄바꿈
app.set("view engine", "jade");
app.set("views", "./views_file");
app.use(express.static(__dirname + '/public_file')); //static에 접근하고 싶다면
app.use('/user', express.static(__dirname + '/uploads')); //유저가 업로드한 파일에 접근하고 싶다면

app.get('/upload', function(req, res){
	res.render('upload');
});

app.post('/upload', upload.single('userfile'), function(req, res){
	console.log(req.file);
	res.send('Uploaded : ' + req.file.filename);
});

app.get('/topic/new', function (req, res) {
	fs.readdir('data', function (err, files) {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.render('new', {topics: files, title:'Welcome', description:'Hello, jS'});
	});
});

app.get(['/topic', '/topic/:id'], function (req, res) {
	//폴더에 파일들을 읽어온다
	fs.readdir('data', function (err, files) {
		if (err) {
			console.log(err);
			res.statis(500).send('Internal Server Error');
		}
		
		//파라미터 링크로 접근
		var id = req.params.id; 		
		if (id) {
			//id가 있는 경우
			fs.readFile('data/' + id, 'utf-8', function (err, data) {
				if (err) {
					console.log(err);
					res.status(500).send('Internal Server Error');
				}
				res.render('view', {topics: files, title: id, description: data});
			});
		} else {
			//id가 없는 경우
			res.render('view', {topics: files, title:'Welcome', description:'Hello, jS'});
		}
	});
});

app.post('/topic', function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	fs.writeFile('data/' + title, description, function (err) {
		if (err) {
			res.status(500).send('Internal Server Error');
		}
		//res.send('Success!');
		res.redirect('/topic/'+title);
	});

	//res.send('Hi post ' + title + description);
});
