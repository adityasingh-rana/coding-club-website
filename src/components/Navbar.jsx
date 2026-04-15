import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();
  let [isScrolled,setIsScrolled] = useState();

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 30) setIsScrolled(true);
      else setIsScrolled(false);
    }

    window.addEventListener("scroll",handleScroll);
  });

  return (
    <header className={`animate-[fadeIn_1s_ease-in-out] fixed top-0 left-0 right-0  z-50 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}>

      <nav className='container ml-15 flex items-center justify-between'
      style={{width: "90%"}}>
        <div className='tittle'>
          <Link to = "/" className='text-xl font-bold tracking-tight hover:text-primary'>
          IET STUDENTS COMMUNITY
          </Link>
        </div>
        <div className='flex gap-1 items-center'>
          <div className="links glass rounded-full px-2 py-1 flex items-center gap-1">
            <Link to='/' className={`px-4 py-2 text-sm  rounded-full ${ location.pathname === '/'? 'bg-surface text-foreground': 'text-muted-foreground hover:text-foreground hover:bg-surface'} `}
            >
              Home
            </Link>
            <Link to='/events' className={`px-4 py-2 text-sm  rounded-full ${ location.pathname === '/events'? 'bg-surface text-foreground': 'text-muted-foreground hover:text-foreground hover:bg-surface'} `}>
              Events
            </Link>
            {/* <Link to='/members' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Members
            </Link>
            <Link to='/contact' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Contact
            </Link> */}
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar;