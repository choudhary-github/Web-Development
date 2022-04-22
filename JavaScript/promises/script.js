function fakeDownload(done){
    setTimeout(function(){
        let downloadData = 'Some data we ripped of the interwebs'
        done(downloadData)
    }, 1000);
}

fakeDownload(function(data){
    console.log('we download a file, which had this data -->')
    console.log(data)
})
