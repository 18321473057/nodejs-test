var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.99.133',
    user: 'root',
    password: 'ycs19930606',
    database: 'line'
});
connection.connect();

var getDate = (sql, callBack) => {
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        callBack(results);
    });
    // connection.end();
}

var testf = () => {
    console.log("123312123123123")
}

module.exports = {getDate, testf};