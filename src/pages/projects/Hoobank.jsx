import { Link } from "react-router-dom"
import screenshot from '../../assets/images/hoobank.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Hoobank = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0 md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center lg:gap-16 gap-8">
        <div className="w-full max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10">
          <motion.h1
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{ duration: 1.5, ease: 'easeOut'}}  
              className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] text-center w-full"
            >
              Hoobank
          </motion.h1>
        </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}} 
          className="w-full max-w-[800px]">
            <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
              Hoobank: My First React Project (Thanks, YouTube!)
            </h1>

            <div className="flex w-full flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start py-10">
              <div className="max-w-[150px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
                <p className="pt-4">Website Design and web development</p>
              </div>
              <div className="max-w-[300px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
                <div className="pt-4">
                  website Development,
                </div>
              </div>
              <div>
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
                <Link to='https://hugoo-bank-app.vercel.app/' target="_blank">
                  <p className="pt-4 hover:border-b border-black transition-all">https://hugoo-bank-app.vercel.app</p>
                </Link>
              </div>
            </div>
        </motion.div>

        
        <img 
          src={screenshot} 
          alt="hoobank"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          Hoobank wasn{"'"}t some fancy project - it was my first crack at React, thanks to a killer YouTube tutorial. It might have started as following instructions, but whoa, did I learn a ton!
          <br />
          React went from a mystery to, like, totally understandable. Reusable components? Those things became my BFFs, making coding way faster and way cleaner. Plus, separating my Tailwind styles into their own file? Genius! It made everything so much easier to read and keep track of.

          Hoobank was also where I got schooled on folder structures. No more code chaos - everything had its own place, which made working on the project (and finding stuff later) a breeze. Oh, and yeah, Hoobank was my first time using Tailwind CSS too! Super cool to be able to style stuff without a ton of extra work.
        </p>

        <p className="text-[1rem] max-w-[700px]">
          special thanks to <em>JavaScript Mastery</em> for putting out such an amzing tutorial on youtbe for young aspiring developers to learn and understand.
          It was my launchpad into the awesome world of React. I learned a ton about how things work, and those skills are still helping me out today.
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/6xD5jXEgkcM?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <div className="text-center py-10">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://hugoo-bank-app.vercel.app/' text='https://hugoo-bank-app.vercel.app'/>
        </div>
      </div>
    </section>
  )
}

export default Hoobank