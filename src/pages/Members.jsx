import React from 'react'
import { members } from '../data/members'
import GridAnimation from '../components/GridAnimation'

function Members() {
  return (
    <div className='bg-linear-to-b from-background/90 via-black/60 to-background/90'>
      <div className="hidden md:block">
        <GridAnimation />
      </div>
      <section className='min-h-screen py-30 mx-5'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h2 className="animate-[fadeIn_1s_ease-in-out] text-4xl font-bold mb-4">
            Meet the <span className="text-primary">Team</span> Behind the <span className="text-primary">Community</span>
          </h2>
          <p className="animate-[fadeIn_1s_ease-in-out] text-muted-foreground mb-12">
            Dedicated individuals working together to build a strong, collaborative, and growing tech community.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" w-4/5 h-4/5 rounded-2xl">
            <div className="p-5 gap-5 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
              {/* Profile Cards */}
              {
                members.map((member) => (
                  <div key={member.id} className="animate-[fadeIn_1s_ease-in-out] relative group rounded-2xl
              overflow-hidden border border-primary/40 sm:border-white/10  hover:border-primary/40 h-96 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(32,178,166,0.2)] cursor-pointer z-10 flex items-center justify-center
            max-w-59 sm:max-w-68 max-h-83 sm:max-h-96
              ">

                    {/* Background Image */}

                    <img
                      src={member.bg}
                      alt="bg"
                      className="absolute inset-0 w-full h-full opacity-90 sm:opacity-70 group-hover:opacity-90 object-contain transition duration-300"
                    />
                    <div className="flex flex-col mt-25 sm:mt-30 ml-3 items-center gap-0 sm:gap-1 z-5">
                      <h1 className='z-5 text-foreground text-xl sm:text-2xl mt-2 sm:mt-0'>{member.name} </h1>
                      <p className="z-5 text-sm  text-center max-w-45 sm:max-w-55 text-primary">{member.role} ({member.batch}) </p>
                      <p className="z-5 text-xs text-muted-foreground max-w-45 sm:max-w-55 text-center">
                        {member.bio}
                      </p>
                      <a href={member.linkedIn} className='z-50'>
                        <button className="z-20 cursor-pointer mt-1 sm:mt-3 bg-primary sm:bg-transparent border border-primary hover:bg-primary text-white font-bold py-2 px-4 h-10 rounded transition-all duration-300" >
                          LinkedIn →
                        </button>
                      </a>

                    </div>
                  </div>

                ))
              }


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Members
