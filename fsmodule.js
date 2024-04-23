const fs  = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })

const data = fs.readFileSync('file.txt');

console.log(data.toString())


// fs.writeFile('kq.text','Kaleem i am writing it for you.',()=>{

//     console.log('Done with new file writing');
// })

fs.writeFileSync('kq.text','Kaleem i am writing it for you, this write sync test',()=>{

    console.log('Done with new file writing');
})

console.log('Finished reading/Writing file data here')