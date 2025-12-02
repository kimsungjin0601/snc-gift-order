import { BrowserRouter, Route, Routes } from "react-router-dom"
import Order from "./assets/pages/Order"
import Member from "./assets/pages/Member"
import Login from "./assets/pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/member" element={<Member/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
