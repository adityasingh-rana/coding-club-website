import React from 'react'
import GridAnimation from '../components/GridAnimation'
import { Search } from 'lucide-react'

function Resources() {
  return (
    <div >
      <div className="hidden md:block">
        <GridAnimation />
      </div>


      {/* backgroundImage*/}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('images/backgroundImg.png')` }}
      ></div>

      {/*overlay layer*/}
      <div className='absolute inset-0 bg-linear-to-b from-black/70 to-black/80 '></div>

      <section className='relative min-h-screen overflow-hidden py-30 z-3 animate-[fadeIn_1s_ease-in-out]'>

        {/* hero section */}
        <div className='flex flex-col items-center '>
          <h1
            className='text-4xl  md:text-6xl font-bold
          max-w-3xl mx-15 z-3 text-gray-300'
          >Learning <span className='bg-primary text-transparent bg-clip-text'>Resources</span></h1>
          <h2 className='text-sm  md:text-xl
            max-w-130 text-center mx-15 mt-5 text-muted-foreground z-3 '>
            Curated notes, PYQs, roadmaps, and learning resources to help students grow in tech.
          </h2>
        </div>

        {/* searchbar */}
        <div className='flex justify-center mt-15'>
          <div className='z-5 h-12 transition-all duration-300 animate-[fadeIn_1s_ease-in-out] w-100  flex items-center justify-center'>
            <input id='search' type="text" placeholder='Search resources...' className='px-5 border border-primary rounded-s-xl h-8 w-50 sm:w-100 outline-none ' />
            <button className='rounded-r-xl bg-primary text-sm flex justify-center items-center w-15 h-8 mr-2 cursor-pointer '>
              <Search className='hover:scale-110' />
            </button>
          </div>

        </div>



      </section>

    </div>
  )
}

export default Resources
