import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import DashBoard from "./components/DashBoard";
import Wallet from "./components/Wallet";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path='/products' element={<Wallet />} />
      </Route>
      <Route path='/login' element={<div>this is login page</div>} />
    </Routes>
  )
}
export default App;
