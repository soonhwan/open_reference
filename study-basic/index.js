var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.
var bodyParser = require('body-parser'); //post데이터 접근에 필요
var session = require('express-session');

app.listen(3000, function () { //3000번 포트를 사용합니다.
	console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

/*
app.get('/',function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('Hello World!!!!'); // "Hello World!"를 보냅니다.
});
*/

/*
// jade 사용
app.set("view engine", "jade");
app.get("/temp", function (req, res) {
 res.render("temp");
});
*/

// ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드입니다.
app.set("view engine", "ejs");

//
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(session({
	secret: '212313@sdfs!drg',
	resave: false,
	saveUninitialized: true
}));

// 'get'요청
app.get("/main", function (req, res) {
	res.send("'get'요청");
});

// query
app.get("/hello", function (req, res) {
	res.render("hello", {
		name: req.query.name
	});
});

// params
app.get("/hello/:name", function (req, res) {
	res.render("hello", {
		name: req.params.name
	});
});

app.get("/document", function (req, res) {
	res.render("document", {
		name: req.query.name
	});
});

//form post
app.post('/form_receiver', function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	res.send(title + ', ' + description);
});

//form get
app.get('/form_receiver', function (req, res) {
	var title = req.query.title;
	var description = req.query.description;
	res.send(title + ', ' + description);
});

//session
app.get('/count', function(req, res){
	if(req.session.count){
	  	req.session.count++;
	}
	else {
		req.session.count = 1;
	}	
	res.send('count : '+req.session.count);
});
app.get('/count2', function(req, res){
	res.send('result : '+req.session.count);
});



