import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/home/home"
import Info from "../components/info/info"
import Search from "../components/search/search"

export default function RoutesApp() {
  
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/galeria/:id?" element={<Home/>} />
  <Route path="/info" element={<Info/>} />
  <Route path="/search/:search" element={<Search/>} />
  </Routes>
  </BrowserRouter>
  )
}