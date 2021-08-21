
const fs = require("fs");
const path = require("path");
const teamIndex = require("../src/teamTemplate");





// const writeIndex = () => {
//     fs.writeFile("../dist/index.html", teamIndex(theAnswers), (err) => {
//         if(err){
//             return console.log(err);
//         }
//         return ({ ok: true, message: "File Written,"});
//     } )
// }




const writeFile = (theAnswers) => {
    fs.writeFile("./dist/index.html", teamIndex(theAnswers), (err) => {
        if(err){
            return console.log(err);
        }
        return ({ ok: true, message: "File Written,"});
    })
}

module.exports = { writeFile };