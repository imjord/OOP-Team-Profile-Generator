
const fs = require("fs");




const writeFile = (fileContent) => {
    fs.writeFile("../dist/index.html", fileContent, (err) => {
        if(err){
            rejects(err)
            return;
        }
        resolve({ ok: true, message: "File Written,"});
    })
}


module.exports = { writeFile };