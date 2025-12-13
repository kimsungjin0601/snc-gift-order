import { BrowserRouter, Route, Routes } from "react-router-dom"
import Order from "./pages/Order"
import Member from "./pages/Member"
import Login from "./pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}></Route>        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/member" element={<Member/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
