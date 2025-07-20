const { format } = require('date-fns');
const { v4: uuid} = require('uuid');
const path = require('path');
const fs= require('fs');
const fsPromise= require('fs').promises;

const logEvents = async (message)=>{
  const dateTime = `${format(new Date(), 'yyyy-MM-dd hh:mm:ss')}`;
  const logItem =`${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem)
  try{
     if(!fs.existsSync(path.join(__dirname,'logs'))){
       await fsPromise.mkdir(path.join(__dirname,'logs'))
     }
     await fsPromise.appendFile(path.join(__dirname,'logs','eventLogs.txt'),logItem);
  }catch(err){
    console.error(err);
  }
}

module.exports= logEvents;