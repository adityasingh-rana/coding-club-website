import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/darkthemeCodingBackgroundimg.jpg'
import GridAnimation from '../components/GridAnimation';



function Home() {

  const Navigate = useNavigate();

  return (
    <>
      <section className='relative min-h-screen overflow-hidden'>
        <div className="hidden md:block">
          <GridAnimation />
        </div>

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
        <div className='relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 gap-4 animate-[fadeIn_1s_ease-in-out]'>

          <h1
            className='text-4xl  md:text-6xl font-bold
            max-w-3xl mx-auto '
          >Your <span className='bg-linear-to-r from-primary to-highlight text-transparent bg-clip-text'>CODING</span><br /> Journey Starts Here</h1>

          <h2 className='mt-6 text-lg  md:text-xl text-gray-400 max-w-xl'>Join a community of developers, explore events, and grow your skills at IET.</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full sm:w-auto">
            <button
              className=" sm:w-auto hover:scale-105 border cursor-pointer px-6 py-3 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 text-white bg-primary border-primary hover:bg-primary2 animate-bounce hover:animate-none"
              onClick={() => Navigate('/events')}
            >
              Explore Events
            </button>

            <a href="https://chat.whatsapp.com/BOBvRMpmMfX6592BVVoQvA">
              <button
                className="
                  w-full sm:w-auto
                  border border-primary
                 text-foreground
                  px-6 py-3
                 rounded-full
                  flex justify-center items-center
                  transition-all duration-300
                hover:bg-surface
                  hover:shadow-md hover:shadow-primary/20
                  active:scale-95 cursor-pointer"
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
