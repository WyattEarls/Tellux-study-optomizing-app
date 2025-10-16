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
    <div className = 'w-full max-w-md bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl border border-gray-700 text-white'>
        <h1 className = "text-4xl font-extrabold text-white mb-8 text-center">Welcome back to Tellux!</h1>
        
        {message && (
        <p className="mb-4 p-3 rounded text-sm text-red-300 bg-red-900 border border-red-700">
          {message}
        </p>
        )}
        

        <form onSubmit={handleLogin} className="space-y-6">
            <input
                type = "email"
                placeholder = "Enter your email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className = 'w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500 transition duration-150'
                />
            <input 
            type = "password"
            placeholder = "Enter your password"
            value = {password}
            onChange = {(e) => setPassword (e.target.value)}
            required
            />
            <button type="submit" className = 'w-full bg-amber-500 text-gray-900 py-3 rounded-lg font-bold hover:bg-amber-400 transition duration-200 shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-500/50'
        >Login</button>
        </form>

        <p className="text-center text-sm mt-8 text-gray-300">
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