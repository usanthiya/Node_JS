const fs= require('fs');
const path= require('path');

//Reading a File using stream

const rs= fs.createReadStream(path.join(__dirname,'files','bigFile.txt'),'utf8');

rs.on('data',(dataChunck)=>{
    console.log("Data chunck length: ", dataChunck.length);
})

rs.on('end',()=>{
    console.log("Finished reading file");
})

rs.on('error', err=>{
    console.error("Error reading chuncked file: ", err);
})

//writing to file using stream

const ws= fs.createWriteStream(path.join(__dirname,'files','newBig_file.txt'))

rs.on('data', (dataChunck)=>{
    ws.write(dataChunck);
})

// Piping a read stream to write stream (copy file)
rs.pipe(ws)