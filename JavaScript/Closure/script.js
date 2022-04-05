function outer(arg1){
    let var1 = 10
    var x = 50
    function inner(arg2){
        let var2 = 20
        let x = 500
        console.log(arg1,var1,arg2,var2,x)
    }
    return inner
}

let x = outer("param1")
x("param2")