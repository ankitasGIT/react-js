import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // setUser from context is referenced here
  const {setUser} = useContext(UserContext)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} placeholder='username'/>
      <br></br>
      <input type='text' value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} placeholder='password'/>
      
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login
