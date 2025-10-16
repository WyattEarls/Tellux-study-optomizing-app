import './App.css'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

 function App () {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<SignUpPage />}/>
       <Route path = "/login" element = {<LogInPage />} />
       <Route path = "/signup" element = {<SignUpPage />} />
     </Routes>
   </Router>
  )
}

export default App



