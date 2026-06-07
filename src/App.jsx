import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import IntroAnimation from "./components/IntroAnimation";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroAnimation />;
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    {showIntro && <IntroAnimation />}
    </div>
  )
}

export default App
