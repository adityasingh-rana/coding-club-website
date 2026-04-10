import bgImage from '../assets/darkthemeCodingBackgroundimg.jpg'


function Home() {

  return (
    <>
      <section className='relative min-h-screen overflow-hidden'>
        <div
          className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat pointer-events-none"
          style={{backgroundImage: `url('${bgImage}')`}}
        ></div>
        <div className='absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/40'></div>
        <div className='relative z-10 flex justify-center items-center  min-h-screen text-center px-6'>
          <h1 className='text-4xl md:text-6xl font-bold max-w-3xl' >Your Coding Journey <br /> Starts Here</h1>
        </div>
      </section>
    </>
  )
}

export default Home
