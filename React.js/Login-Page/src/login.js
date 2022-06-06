export default function login ({username, password}) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(username === 'Choudhary' && password === 'Password'){
        resolve('hello');
      }else{
        reject('incorrect');
      }
    },1000)
  })
}