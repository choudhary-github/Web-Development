function fakeDownload(correct){
    return new Promise((resolve,reject)=>{

        let downloadedData = "Some data from the internet"
        
        setTimeout(()=>{
            if(correct){
                console.log("Downloading is in process")
                resolve(downloadedData)
            }
            else{
                reject(new Error("could not download file"))
            }
        },1000)
    })
}
let downloaded = fakeDownload(true)

downloaded.catch((err)=>{
    console.log(err)
})

setTimeout(()=>{
    downloaded.then((data)=>{
        console.log("downloading data through internet ---->")
        setTimeout(()=>{
            console.log(data)
        },1000)
    })
},3000)



// fakeDownload(true).then((data)=>{
//     console.log('downloading data through internet ---->')
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })