import { useEffect, useState } from 'react'
import Login from './components/login'
import Layout from './components/shared/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './components/signup'

function App() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        const authenticated = localStorage.getItem('isAuthenticated')
        if (authenticated === 'true') {
            setUser(true)
        } else {
            setUser(false)
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}
export default App
