function checkThis () {
    console.log(this)
}

let obj = {
    a : 10,
    b : 'abcd',
    c : true,
    d : function(){
        console.log(this)
    },
    e : {
        l : 123,
        m : 'sdfff',
        f : function(){
            console.log(this)
        }
    }
}