const fs = require("fs");
const fsPromise = require('fs').promises
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

// //Renaming the file
fs.rename(path.join(__dirname, 'files', 'second.txt'), path.join(__dirname, 'files', 'renamed.txt'),(err)=>{
    if(err){
        console.error("Error renaming file: ", err);
        return;
    }
    console.log("Renaming file success!");
})

//using callback based method
const content= "Hello, Good Morning!"
fs.writeFile(path.join(__dirname, 'files','test.txt'), content, (err)=>{
    if(err){
        console.error("Error writting file: ", err);
        return;
    }
    console.log("Write File complete ");
    fs.appendFile(path.join(__dirname, 'files','test.txt'), '\nHope you are doing good!', (err)=>{
    if(err){
        console.error("Error Appending file: ", err);
        return;
    }
    console.log("append File complete ");
    fs.rename(path.join(__dirname, 'files','test.txt'), path.join(__dirname, 'files','sample.txt'), (err)=>{
    if(err){
        console.error("Error renaming file: ", err);
        return;
    }
    console.log("rename File complete ");
    })

    })
})

//using fs promises, do the file operation (promise based method)
const fileOps= async() =>{
    try{
      const data = await fsPromise.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8');
      console.log(data);
      console.log("read file complete")
      await fsPromise.writeFile(path.join(__dirname,'files','second.txt'),'Node.js provides several methods for creating and writing to files. Using fs.writeFile()');
      console.log("write file complete")
      await fsPromise.appendFile(path.join(__dirname,'files','second.txt'),'\n\nappending some content at the end of the file');
      console.log("append file complete")
      await fsPromise.rename(path.join(__dirname, 'files', 'second.txt'), path.join(__dirname, 'files', 'renamed.txt'));
      console.log("rename file complete")
    }catch(err){
        console.error(err)
    }
}
fileOps();

//Deleting a single file
const fileDelete= async()=>{
    try{
      await fsPromise.unlink(path.join(__dirname, 'files', 'sample.txt'))
    }catch(err){
        console.error(err);
    }
}
fileDelete();

//deleting multiple files
const deleteFiles= async()=>{
    const filespaths=['sample.txt', 'abc.txt']
    try{
      await Promise.all(
        filespaths.map(file=>{
            fsPromise.unlink(path.join(__dirname, 'files', file));
            console.log(file+" deleted");
        })
      )
    }catch(err){
        console.error(err);
    }
}
deleteFiles();

// process.on('uncaughtException', err=>{
//     console.error("Error occured: ", err)
// })
