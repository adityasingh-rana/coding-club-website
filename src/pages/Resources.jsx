import React from 'react'
import GridAnimation from '../components/GridAnimation'

function Resources() {
  return (
    <div>
      <div className="hidden md:block">
        <GridAnimation/>
      </div>

     {/* backgroundImage*/}
             <div
               className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat pointer-events-none"
               style={{ backgroundImage: `url('images/backgroundImg.png')` }}
             ></div>

             {/*overlay layer*/}
             <div className='absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-primary/10'></div>
    </div>
  )
}

export default Resources
