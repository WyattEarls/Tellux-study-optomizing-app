import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    const res =  await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email, password}),
    })
    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <div className="app">
      <h1>Register for Tellux!</h1>
      <form onSubmit={handleRegister}>
        <input 
          type = 'email'
          placeholder='Enter your email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
        <input 
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange= {(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
        {message && <p>{message}</p>}
      </div> 
  )
}

export default App
