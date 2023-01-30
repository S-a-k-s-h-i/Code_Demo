/**
 *PROMISES :
 *Here we solves the problem of hell, inversion of control    
 *Used async/await to avoid the problem of promise hell also and its much readable, easier to debug.
 */

function readContent(url){
    return new Promise(function (resolve,reject){
        console.log('Start downloading from url ',url);
        //mimicking
        setTimeout(function (){
          console.log('content successfully downloaded');
          let data='Dummy data';
          resolve(data);
        },3000)
    })
}

function writeContent(data){
    return new Promise(function (resolve,reject){
        console.log('writing data ',data);
        //mimicking
        setTimeout(function (){
           console.log('Writing completed');
           let filename='output.txt';
           resolve(filename);
        },4000)
    })
}

async function process(){
    let downloadedData = await readContent("www.google.com");
    let file = await writeContent(downloadedData);
    console.log('filename: ',file)
}
process();
