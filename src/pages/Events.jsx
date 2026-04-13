import React from 'react'
import { Calendar, Users, BookOpen } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { events } from '../data/event';
import GridAnimation from '../components/GridAnimation';

function Events() {
  const navigate = useNavigate();
  return (
    <div className='bg-linear-to-b from-black/70 via-black/75 to-black/70'>
      <GridAnimation />
      <section className="py-20">
        <div className="animate-[fadeIn_1s_ease-in-out]container mx-auto px-6 text-center z-10">

          <h2 className="animate-[fadeIn_1s_ease-in-out] text-4xl font-bold mb-4">
            What <span className="text-primary">We Offer</span>
          </h2>
          <p className="animate-[fadeIn_1s_ease-in-out] text-muted-foreground mb-12">
            Explore events, connect with developers, and grow your skills
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
            {/* Card 1 */}
            <div className="animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] z-10">

              <div className='flex justify-center'>
                <Calendar className="w-8 h-8 mb-4 text-primary " />

              </div>

              <h3 className="text-xl font-semibold mb-2">Events</h3>

              <p className="text-muted-foreground">
                Participate in coding contests, hackathons, and workshops
              </p>

            </div>
            {/* Card 2 */}
            <div className="z-10 animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
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

            <div className="animate-[fadeIn_0.8s_ease-in-out] p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-3 hover:scale-[1.02]
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


      <section className="py-24 ">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="animate-[fadeIn_1s_ease-in-out] text-4xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="animate-[fadeIn_1s_ease-in-out] text-muted-foreground mt-2">
              Join exciting events and level up your skills
            </p>
          </div>

          <div className="grid md:grid-cols-1 max-w-xl mx-auto gap-8 animate-[fadeIn_1s_ease-in-out]">

            {/* Event Card */}
            {events.map((event) => (
              <div
                key={event.id}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] cursor-pointer z-10"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />

                <p className="text-sm text-muted-foreground mb-2">
                  📅 {event.date}
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {event.title}
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  {event.type}
                </span>

                <p className="text-muted-foreground mt-3">
                  {event.shortDescription}
                </p>

                <button className="mt-5 text-primary transition-all duration-300 group-hover:translate-x-1">
                  View Details →
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  )
}

export default Events
