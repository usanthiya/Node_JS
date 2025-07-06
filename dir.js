const fs= require('fs');
const fsPromise= require('fs').promises;
const path = require('path');

//using callback- make directory
try{
    fs.mkdir('./new', err =>{
      if(err){
        console.error(err);
        return;
      }
      console.log("make directory success!")
    })
}catch(err){
    console.error(err);
}

//mkdir- using promise based 
const mkdir = async()=>{
  try{
    await fsPromise.mkdir('./new');
    console.log('Directory created!');
  }catch(err){
    console.error("Error creating an directory: ", err)
  }
}
mkdir();

//mkdir, only if directory doesn't exists
try{
   if(!fs.existsSync('./new')){
    fs.mkdirSync('./new');
    console.log("Directory created")
   }
}catch(err){
    console.error(err)
}

//renaming a directory
try{
    if(fs.existsSync('./new')){
        fs.renameSync('./new','./current')
        console.log("Directory renamed!");
    }
}catch(err){
    console.error(err)
}

//rmdir- remove directory
try{
    if(fs.existsSync('./current')){
        fs.rmdirSync('./current');
        console.log("Directory removed")
    }
}catch(err){
    console.error("Error removing directory: ", err)
}

//remove directory with contents in it- rm
try{
   if(fs.existsSync('./current')){
    fs.rmSync('./current', {recursive: true, force: true})
    console.log('Directory removed with its content')
   }
}catch(err){
    console.error(err);
}

//read the contents of a directory
try{
    const files= fs.readdirSync('./files');
    console.log("File content: ", files)
    const fullPaths= files.map(file=>{
        return path.join(__dirname,'files', file)
    })
    console.log("File paths: ",fullPaths)
}catch(err){
    console.error(err);
}
