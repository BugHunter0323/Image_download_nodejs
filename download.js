request = require('request');
const readline = require('readline');
var http = require('http');
const download = require('image-downloader');
const delay = require('delay');
const fs = require('fs');
var img_url=[];
var dir_path=[];
const readInterface = readline.createInterface({
  input: fs.createReadStream('readme.txt'),
  output: process.stdout,
  console: false
});
 var k=0;
  readInterface.on('line', function(line) {
  //  console.log(line);
    var url="https://www.realmediashop.de/"+line;
    
  // Executed 100 milliseconds later
 

  // ...do your asynchronous line processing..
  readInterface.pause(); 
  k=20;
  var dd=""
   while(k>19)
   {
       if(line[k]=='/') break;
       dd+=line[k];
       k++;
   }
  try{
      dir_1path=process.cwd()+'/image/product'+'/'+dd;
      fs.mkdirSync(dir_1path)
     console.log('success')  
     } catch(err){
        if(err.code=='EEXIST')
        {
          console.log('exist same directory!');
        }else{
          console.log(err)
        }
     }
     dir_2path=dir_1path+'/md';
     try{
      fs.mkdirSync(dir_2path)
     console.log('success')  
     } catch(err){
        if(err.code=='EEXIST')
        {
          console.log('exist same directory!');
        }else{
          console.log(err)
        }
     }
     options = {
      url: url,
      dest: dir_2path     // Save to /path/to/dest/photo.jpg
    }
    download.image(options)
    .then(({ filename, image }) => {
    //   console.log('Saved to', filename)  // Saved to /path/to/dest/photo.jpg
    })
    .catch((err) => console.error(err)
    )
    
    setTimeout(function () {
      readInterface.resume;
    }, 50000);
     //img_url.push(url);
     //dir_path.push(dir_2path);
})
var counter=0;
// setTimeout(function () {
//   counter++
//   options = {
//     url: img_url[counter],
//     dest: dir_path[counter]      // Save to /path/to/dest/photo.jpg
//   }
//   download.image(options)
//   .then(({ filename, image }) => {
//   //   console.log('Saved to', filename)  // Saved to /path/to/dest/photo.jpg
//   })
//   .catch((err) => console.error(err)
//   )
//   // ...and continue emitting lines.
// }, 2000);


