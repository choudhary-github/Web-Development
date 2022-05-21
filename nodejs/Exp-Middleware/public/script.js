let code = document.getElementById('code')
let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let decode = document.getElementById('decode')
let btnEncrypt = document.getElementById('btnEncrypt')
var data

function encrypt(data){
    let cryptdata = ''
    let str
    for(let i in data){
        str = data[i]
        if (data[i] == str.toUpperCase()) {cryptdata  += str.toLowerCase()}
        else if (data[i] == str.toLowerCase()) {cryptdata += str.toUpperCase()}
        else {cryptdata += str}
}         
    return cryptdata
}

btnEncode.onclick = ()=>{
    let data = inpCode.value
    data = btoa(data)
    code.value = data
}
btnEncrypt.onclick = ()=>{
    let data = code.value
    data =  encrypt(data)
    code.value = data
    console.log('Data is Encrypted')
}
