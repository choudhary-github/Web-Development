function work (done){
    console.log('1. work in process')
    done()
}

work(() => {
    console.log("2. work is done");
})

console.log("3. end");

/**
 *          callback function is not async function
 */