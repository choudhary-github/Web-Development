import { useReducer } from "react";
// import { useState } from 'react';
import './App.css'
import login from '../src/login';

function loginReducer(state,action){
  switch (action.type) {
    case 'field':{
      return {
        ...state,
        [action.field]: action.value
      }
    }
    case 'login': {return{
      ...state,
      loading:true,
      error:''
    }  }

    case 'sucess':{return {
      ...state,
      loggedIN: true,
      username: '',
      password: ''
    }  }

    case 'error': {return {
      ...state,
      error: 'Incorrect username or password!',
      loading: false
    }}

    case 'logout':{return {
      ...state,
      loggedIN: false,
      username: '',
      password: '',
      loading: false
    }  }

    default:
      break;
  }
return state;
}

const initialState = {
  username: '',
  password: '',
  loading: false,
  error: '',
  loggedIN: false  
}

export default function App () {
  const [state, dispatch] =useReducer(loginReducer,initialState)
  const {username,password,loading,error,loggedIN}=state

  const onSubmit = async e=>{
    e.preventDefault();
    dispatch({type:'login'})
    try {
        await login({username,password})
        dispatch({type:'sucess'})
        
      } catch (error) {
        dispatch({type:'error'})
      }      
  }
  
  return (
    <>
    <div className="LoginPage">
      <div className="login-container">
        {loggedIN ?
        <>
        <h1>Hello</h1><br></br>
        <button onClick={()=>dispatch({type:'logout'})}>Log out</button>
        </> : 
        <form className="form" onSubmit={onSubmit}>
          {error && <p className='error'>{error}</p>}
          <p>Please Login!</p>
          <input type='text' placeholder="username" value={username} onChange = {e=>dispatch({type:'field', field:'username', value:e.currentTarget.value})}/>
          <input type='password'placeholder="password" value={password} onChange = {e=>dispatch({type:'field', field:'password', value:e.currentTarget.value})}/>
          <button className="submit" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
        </form>}
      </div>
    </div>
    </>
  )
}