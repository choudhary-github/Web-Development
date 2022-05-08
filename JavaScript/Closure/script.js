function outer(arg1){
    let var1 = 10
        function middle(arg2){
            let var2 = 51
            function inner(arg3){
                let var3 = 20
                console.log(arg1,var1,arg2,var2,arg3,var3)
            }
            return inner
        }
        return middle
}

let x = outer("param1")
let y = x("param2")
y('param3')