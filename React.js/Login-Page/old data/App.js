import React, {useState} from "react";
import './App.css'
import login from '../src/login'

export default function App(){
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[loading,setLoading] = useState(false);
  const[error,setError]=useState('');
  const[loggedIn,setLoggedIn]=useState(false)

  const onSubmit = async e =>{
    setLoading(true)
    setError('')
    e.preventDefault();
    try {
      await login({username,password})
      setLoggedIn(true);
      setUsername('');
      setPassword('');
    } catch (error) {
      setError('Incorrect Username or Password!')
    }
    setLoading(false)
  }

  return(
    <div className="LoginPage">
      <div className="login-container">
        {loggedIn ? (
        <>
        <h1>Hello</h1><br/>
        <button onClick={()=>setLoggedIn(false)}>Log Out</button>
        </>
        ) :   
        <form className="form" onSubmit={onSubmit}>
          {error && <p className="error">{error}</p>}
          <p>Please Login!</p>
          <input type='text' placeholder='username'value={username} onChange={e =>{setUsername(e.currentTarget.value)}}/>
          <input type='password' placeholder="password" value={password} onChange={e => {setPassword(e.currentTarget.value)}}/>
          <button className="submit" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
        </form>}
      </div>
    </div>
  )
}