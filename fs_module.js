const fs = require("fs");
const path = require("path");

// Hard coding path
fs.readFile('./files/start.txt', 'utf8',(err, data)=>{
    if(err){
        console.error("Error reading file: ", err)
        return;
    }
    // if(err) throw err
    console.log("data: ", data)
})

// using path module to read the file
fs.readFile( path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data)=>{
    if(err){
        console.error("Error reading file: ", err)
        return;
    }
    console.log("data: ", data)
})

//reading image files
// For binary data (like images), omit the encoding
fs.readFile(path.join(__dirname,'files','wb-2.jpg'), (err, data)=>{
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    console.log("Image size: ", data.length, 'bytes')
})

// using readFileSync()
try {
  const data = fs.readFileSync(
    path.join(__dirname, "files", "start.txt"),
    "utf8"
  );
  console.log("data: ", data);
} catch (err) {
  console.error("Error reading file: ", err);
}

// Writing file
fs.writeFile(path.join(__dirname,'files','second.txt'), 'Node.js provides several methods for creating and writing to files. Using fs.writeFile()', (err)=>{
    if(err){
        console.error('Error Writing File: ', err);
        return;
    }
    console.log("Write File success!");
})

//Appending contents to file
fs.appendFile(path.join(__dirname,'files', 'second.txt'), '\n\n Apending some content at the end of the file', (err)=>{
    if(err){
        console.error("Error appending file:", err);
        return;
    }
    console.log("Append File success!");
})

//Renaming the file
fs.rename(path.join(__dirname, 'files', 'second.txt'), path.join(__dirname, 'files', 'renamed.txt'),(err)=>{
    if(err){
        console.error("Error renaming file: ", err);
        return;
    }
    console.log("Renaming file success!");
})

// process.on('uncaughtException', err=>{
//     console.error("Error occured: ", err)
// })
