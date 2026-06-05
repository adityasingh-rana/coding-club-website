import React from 'react'
import GridAnimation from '../components/GridAnimation'

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

        <h1
          className='text-4xl  md:text-6xl font-bold
            max-w-3xl mx-15 z-3 '
        >Learning <span className='bg-linear-to-r from-primary to-highlight text-transparent bg-clip-text'>Resources</span> ...</h1>



      </section>

    </div>
  )
}

export default Resources
