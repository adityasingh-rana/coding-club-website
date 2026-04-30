import React from 'react'
import { Calendar, Users, BookOpen } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { events } from '../data/event';
import GridAnimation from '../components/GridAnimation';

function Events() {
  const navigate = useNavigate();
  return (
    <div className='bg-linear-to-b from-background/90 via-black/60 to-background/90'>
       <div className="hidden md:block">
          <GridAnimation />
        </div>
        {/* backgroundImage*/}
             <div
               className="fixed inset-0 bg-cover bg-center z-0 bg-no-repeat pointer-events-none"
               style={{ backgroundImage: `url('images/backgroundImg.png')` }}
             ></div>

             {/*overlay layer*/}
             <div className='fixed inset-0 bg-linear-to-b from-black/60 via-black/90 to-black/80'></div>
      <div className='relative z-10'>


      <section className="py-30">
        <div className="animate-[fadeIn_1s_ease-in-out] container mx-auto px-6 text-center z-10">

          <h2 className="animate-[fadeIn_1s_ease-in-out] text-4xl font-bold mb-4">
            What <span className="text-primary">We Offer</span>
          </h2>
          <p className="animate-[fadeIn_1s_ease-in-out] text-muted-foreground mb-12">
            Explore events, connect with developers, and grow your skills
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
            {/* Card 1 */}
            <div className="animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-primary/10 backdrop-blur-xs border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] z-10"
            >

              <div className='flex justify-center'>
                <Calendar className="w-8 h-8 mb-4 text-primary " />

              </div>

              <h3 className="text-xl font-semibold mb-2">Events</h3>

              <p className="text-muted-foreground">
                Participate in coding contests, hackathons, and workshops
              </p>

            </div>
            {/* Card 2 */}
            <div className="z-10 animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-primary/10 backdrop-blur-xs border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(32,178,166,0.2)]">

              <div className='flex justify-center'>
                <Users className="w-8 h-8 mb-4 text-primary " />

              </div>

              <h3 className="text-xl font-semibold mb-2">Community</h3>

              <p className="text-muted-foreground">
                Connect with like-minded developers and grow together
              </p>

            </div>

            {/* Card 3 */}

            <div className="animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-primary/10 backdrop-blur-xs border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] z-10">

              <div className='flex justify-center'>

                <BookOpen className="w-8 h-8 mb-4 text-primary " />
              </div>

              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-muted-foreground">
                Access resources, mentorship, and real-world projects
              </p>

            </div>
          </div>

        </div>
      </section>


      <section className="events-sec py-24 ">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="animate-[fadeIn_1s_ease-in-out] text-4xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="animate-[fadeIn_1s_ease-in-out] text-muted-foreground mt-2">
              Join exciting events and level up your skills
            </p>
          </div>
          <div className={`
          grid mx-auto gap-8 animate-[fadeIn_1s_ease-in-out] justify-center
           ${events.length === 1 ? "grid-cols-1 max-w-68" :
             events.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-68 sm:max-w-145" :
              "gird-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-68 sm:max-w-145 md:max-w-220" } }`
        }>
            {/* Event Card */}
            {events.map((event) => (

              <div  key={event.id} className="relative group rounded-2xl
              shadow-[0_0_30px_rgba(32,178,166,0.2)] sm:shadow-none overflow-hidden border border-primary/40 sm:border-white/10 active:scale-300 hover:border-primary/40 h-96 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] cursor-pointer z-10 flex items-center justify-center bg-primary/10 backdrop-blur-md sm:backdrop-blur-xs">

                {/* Background Image */}
                <img
                  src="/images/cardBg.png"
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-contain opacity-40 group-hover:opacity-60 transition duration-300"
                />

                <div
                  className="group p-6 ml-6 rounded-xl z-10 w-full max-w-sm h-auto"
                  onClick={() => navigate(`/events/${event.id}`)}
                >

                  <p className="text-sm text-muted-foreground mb-2">
                    📅 {event.date}
                  </p>

                  <h3 className="text-white text-xl font-semibold mb-3">
                    {event.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                    {event.type}
                  </span>&nbsp;
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    <span className="relative inline-flex size-3">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                    </span>
                      <span className='ml-0.5'>
                        {event.status}
                      </span>
                  </span>

                      <p className="text-muted-foreground mt-3">
                        {event.shortDescription}
                      </p>

                      <button className="mt-5 text-primary transition-all duration-300 group-hover:translate-x-1 cursor-pointer hover:underline" >
                        View Details →
                      </button>
                    </div>
                </div>

            ))}
              </div>



        </div>
      </section>
      </div>
    </div>
  )
}

export default Events
