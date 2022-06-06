import { useReducer } from "react";
import login from './login'
import './App.css'


function loginReducer(state,action){
  switch (action.type) {
    case 'field': {return {
      ...state,
      [action.field]: action.value
    }}

    case 'success':{
      return{
        ...state,
        username: '',
        password: '',
        loggedIN: 'true'
      }
    }

    case 'error' : {
      return{
        ...state,
        error : 'Wrong Username or Password!',
        username: '',
        password: '',
        loading: false
      }
    }

    case 'login': {
      return {
        ...state,
        error: '',
        loading: true,
      }
    }

    case 'logout': {
      return{
        ...state,
        loggedIN: false,
        loading: false                
      }
    }

    default:
      break;
  }
  return state
}
const initialState = {
  username: '',
  password: '',
  loggedIN: false,
  error: '',
  loading: false
}

export default function App () {
  const[state,dispatch] = useReducer(loginReducer,initialState) 
  const {username,password,loggedIN,error,loading} = state


  const onsubmit = async (e)=>{
    e.preventDefault()
    dispatch({type: 'login'})
    try {
      await login({username,password})
      dispatch({type: 'success'})
    }catch(error){
      dispatch({type: 'error'})
    }
  }
  return(
   <>
       <div className="LoginPage">
      <div className="login-container">
        {loggedIN ? 
        <>
        <h1>Hello</h1><br></br>
        <button type="submit" onClick={()=>dispatch({type: 'logout'})}>Logout</button>
        </>:
        <form className="form" onSubmit={onsubmit}>
          {error && <p className="error">{error}</p>}
          <p>Please Login!</p>
          <input className="username" type='text' value={username} placeholder='Username' onChange={e=>dispatch({type:'field',field:'username', value:e.currentTarget.value})}/>
          <input className='password' value={password} type='password' placeholder='Password' onChange={e=>dispatch({type:'field',field:'password',value:e.currentTarget.value})}/>
          <button className="submit" type="submit" disabled={loading} >{loading ? 'Logging in...':'Log in'}</button>
        </form>}
      </div>
    </div>   
   </>
  )
}