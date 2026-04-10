import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50'>

      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <div className='tittle'>
          <Link to = "/" className='text-xl font-bold tracking-tight hover:text-primary'>
          IET STUDENT COMMUNITY
          </Link>
        </div>
        <div className='flex gap-1 items-center'>
          <div className="links glass rounded-full px-2 py-1 flex items-center gap-1">
            <Link to='/' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Home
            </Link>
            <Link to='/events' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Events
            </Link>
            <Link to='/members' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Members
            </Link>
            <Link to='/contact' className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
              Contact
            </Link>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar;