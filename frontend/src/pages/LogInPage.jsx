import { useState } from 'react'
import { Link } from 'react-router-dom'

function LogInPage() {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    const handleLogin = async (e) => {
    e.preventDefault()

        try {
            const res = await fetch('http://127.0.0.1:5000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
            })


            const data = await res.json()
            if (res.ok) {
                setMessage(data.message || 'Login Successful!')
            } else {
                setMessage(data.error || 'Login failed. Please check credentials.' )
            }
        
        } catch (error){
            setMessage("Network error or server unavailable.")
            console.error("Login fetch error", error);
        }
    }
return(
    <div className = "flex items-center justify-center h-screen bg-gray-800">
        <h1 className = "text-4xl font-bold text-white mb-2">Welcome back to Tellux!</h1>
        <p className = "text-gray-300">Your study schedule, solved.</p>
        {message && (
        <p className="mb-4 p-3 rounded text-sm text-red-300 bg-red-900 border border-red-700">
          {message}
        </p>
        )}
        

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
                type = "email"
                placeholder = "Enter your email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className = "p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            <input 
            type = "password"
            placeholder = "Enter your password"
            value = {password}
            onChange = {(e) => setPassword (e.target.value)}
            required
            />
            <button type="submit" className = "bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition"> Login </button>
        </ form>

        <p className= 'text-center text-sm mt-8 text-gray-300'>
        Don't have an account?
        <Link 
          to="/signup" 
          className="text-amber-500 font-semibold hover:text-amber-400 transition duration-150 ml-1"
        >
           Sign up here
        </Link>
      </p>
    </div>
)
}

export default LogInPage