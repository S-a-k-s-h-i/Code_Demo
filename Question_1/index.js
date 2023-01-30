const fs = require('fs').promises

async function readSingleFile(filePath){
   try{
      const content = await fs.readFile(filePath,'utf-8');
      console.log(content);
   }catch(err){
      console.log(err)
   }
}

async function readFilesInDirectory(dirName){
  try{
   const files= await fs.readdir(dirName)
   files.forEach(async file=> {
      await readSingleFile(dirName+"/"+file);
   })
  }catch(err){
   console.log(err)
  }
}

readSingleFile(__dirname+"/read1.txt")
readFilesInDirectory(__dirname)
