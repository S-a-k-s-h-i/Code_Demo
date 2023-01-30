/**
 * CALLBACK
 * DISADVANTAGES:
 * - Callback Hell: Callback inside a callback[multiple callbacks] also it becomes hard to debug and we have to write this ugly piece of code.
 * - Inversion of Control: We are passing the control of the function to some other function, giving the control of our business logic 
 */

function readContent(url,fn){
    console.log('Start downloading from url ',url);
    //mimicking
    setTimeout(function (){
       console.log('content successfully downloaded');
       let data='Dummy data';
       fn(data);
    },3000)
}

function writeContent(data,fn){
    console.log('writing data ',data);
    //mimicking
    setTimeout(function (){
        console.log('Writing completed');
        let filename='output.txt';
        fn(filename);
     },4000)
}



readContent('www.google.com',function downloadCallback(data){
  console.log('Downloaded response', data);
  writeContent(data, function writeCallback(filename){
    console.log('new file written is ',filename)
  })
})