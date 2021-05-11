const fs = require("fs");

function sync_promise(path) {
    return new Promise(function (sucf, errf) {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                errf(err);
            } else {
                sucf(data);
            }
        });
    })
}

sync_promise("./a.text").then(function (data) {
    console.log(data)
    return sync_promise("./b.text");
}, function (err) {
    console.log("发生了异常");
    console.log(err);
}).then(function (data) {
    console.log(data)
    return sync_promise("./c.text")
}, function (err) {
    console.log("发生了异常");
    console.log(err);
}).then(function (data) {
    console.log(data);
}, function (err) {
    console.log("发生了异常");
    console.log(err);
})
