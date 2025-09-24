import { Route, Routes } from 'react-router-dom'
import DashBoard from '../DashBoard'
import Wallet from '../Wallet'
import CameraCapture from '../Capture'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/camera-capture" element={<CameraCapture />} />
        </Routes>
    )
}
