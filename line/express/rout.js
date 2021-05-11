const express = require('express');
const mysqlLink = require("./mysqlLink");
const fileUtils = require("./fileUtils");
const router = express.Router();
router.get('/', (req, res) => {
    res.send('welcome express index!')
}).get('/ping', (req, res) => {
    res.send('pong!')
}).get('/myInfo', (req, res) => {
    mysqlLink.getDate("select * from t_test limit 1", function (autherData) {
        mysqlLink.getDate("select * from t_user ", function (userData) {
            console.log(autherData)
            res.render('myInfo.html', {
                data: {"autherData": autherData, "userData": userData}
            });
        })
    })
}).post('/upImg', (req, res) => {
    fileUtils.upload(req);
})

module.exports = router