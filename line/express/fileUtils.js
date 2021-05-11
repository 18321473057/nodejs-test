const formidable = require("formidable");
const fs = require("fs");
module.exports = {
    upload: (req) => {

        //TODO  查看上传的到底是什么, data,end 都是req事件
        // let allDate='';
        // req.on("data", (che) => {
        //     allDate += che;
        // })
        // req.on("end", () => {
        //     console.log(allDate)
        // })

        const form = formidable({multiples: true});
        form.parse(req, (err, fields, files) => {
            console.log(files.img.path);
            console.log("./"+files.img.name);
            console.log(files);
            // TODO 不能夸分区
            // fs.rename(files.img.path, "./"+files.img.name,(err)=>{
            //     console.log(err);
            //     console.log("上传成功!");
            //
            // });

            // 从默认路劲移动到本项目中
            var readStream=fs.createReadStream(files.img.path);
            var writeStream=fs.createWriteStream("./public/img/"+files.img.name);
            readStream.pipe(writeStream);
            readStream.on('end',function(){
                fs.unlinkSync(files.img.path);
            });

        });
    }
}