const moment = require("moment");
const http = require("http");
const url = require("url");
//引入自己的模块
const mysql = require("./mysqlLink");
let s = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
console.log(s);


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    console.log(req.url)
    console.log(url.parse(req.url,true).query.id)

    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



mysql.getDate("select * from t_test",function (data){
    console.log(data)
})

mysql.testf();
