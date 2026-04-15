import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
      <div className="hidden md:block">
        <a href="https://www.rmlau.ac.in/">
        <img src="/images/rmlauLogo.png" alt="Rmalau Logo" className="
        relative
        md:fixed
        shadow-lg shadow-primary
        bottom-18 bg-transparent right-8 h-15 w-15 rounded-2xl hover:scale-110 transition-all duration-300 z-50
        " style={{
            boxShadow: "3px 3px 10px #20b2a6"
          }} />
      </a>
      </div>

      <Footer />

    </div>
  )
}

export default App
