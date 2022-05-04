function download(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith("http")) {
      reject(new Error("Please enter a correct url"));
    } else {
      console.log('Start uploading')
      setTimeout(() => {
        let fileName = url.split("/").pop();
        resolve(fileName)
      },3000);
    }
  });
}

function resize(fileName){
  return new Promise((resolve,reject)=>{
    if(!fileName.endsWith('.jpg')){
      reject(new Error("file is not in .jpg format"))
    }
    else{
      console.log('Start resizing');
      setTimeout(()=>{
        let resizedFile = fileName.split('.')[0] + '_resized.jpg'
      resolve(resizedFile)
      },3000)
    }
  })
}

function upload(resizedFile){
  return new Promise((resolve,reject)=>{
    console.log('Preparing your download');
    setTimeout(()=>{
      let uploadedlink = 'http//www.upload.com/'+ resizedFile
      resolve(uploadedlink)
    },3000)
  })
}

download('http//www.example.com/mypic.jpg')
.then(resize)
.then(upload)
.then((uploadedlink)=>{
  console.log(uploadedlink)
})