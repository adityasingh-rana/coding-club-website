import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
