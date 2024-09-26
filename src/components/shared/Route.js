import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import DashBoard from '../DashBoard'
import Wallet from '../Wallet'
import Login from '../login'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/wallet" element={<Wallet />} />
            
        </Routes>
    )
}
