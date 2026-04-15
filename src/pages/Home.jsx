import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/darkthemeCodingBackgroundimg.jpg'
import GridAnimation from '../components/GridAnimation';



function Home() {

  const Navigate = useNavigate();

  return (
    <>
      <GridAnimation/>
      <section className='relative min-h-screen overflow-hidden'>

        {/* backgroundImage*/}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>

        {/*overlay layer*/}
        <div className='absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-primary/10'></div>



        {/*Animation layer*/}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-20 animate-[float_6s_ease-in-out_infinite]"></div>

<div className="absolute top-40 right-20 w-1.5 h-1.5 bg-highlight rounded-full opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>

<div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary rounded-full opacity-10 animate-[float_7s_ease-in-out_infinite]"></div>

<div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-highlight rounded-full opacity-15 animate-[float_9s_ease-in-out_infinite]"></div>
        </div>

        {/*main content*/}
        <div className='main-content relative z-10 flex flex-col justify-center items-center  min-h-screen text-center px-6 gap-4 mt-8 animate-[fadeIn_1s_ease-in-out]'>

          <h1
            className='text-4xl md:text-6xl font-bold
            max-w-3xl mx-auto '
            >Your <span className='bg-linear-to-r from-primary to-highlight text-transparent bg-clip-text'>CODING</span><br /> Journey Starts Here</h1>

          <h2 className='mt-6 text-lg md:text-xl text-gray-400 max-w-xl'>Join a community of developers, explore events, and grow your skills at IET.</h2>

          <div className='flex justify-center gap-5 mt-5'>
            <button
              className="
                hover:scale-105 border cursor-pointer
                px-6 py-3 rounded-full animate-bounce hover:animate-none
                shadow-lg shadow-primary/30
                transition-all duration-300
                text-white
                bg-primary
                border-primary
                hover:bg-primary2

              "
              onClick={() => Navigate('/events')}
            >
              Explore Events
            </button>

            <a href="https://chat.whatsapp.com/BOBvRMpmMfX6592BVVoQvA">
            <button
              className=" border border-primary cursor-pointer
             text-foreground px-6 py-3 rounded-full
              transition-all duration-300 hover:bg-surface
              hover:shadow-md hover:shadow-primary/20"
            >
              Join Community
            </button>
            </a>
          </div>
        </div>
        </section>
    </>
  )
}

export default Home;
