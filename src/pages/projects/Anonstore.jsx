import { Link } from "react-router-dom"
import screenshot from '../../assets/images/anon.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Anonstore = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0  md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 lg:gap-16">
        <div className="max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10 w-full">
          <motion.h1
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{ duration: 1.5, ease: 'easeOut'}} 
            className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem text-center w-full"
        >
          AnonStore
        </motion.h1>
        </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}}  
          className="w-full max-w-[800px]">
          <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
            Website design and development of a simple shopping website using vanilla js - a personal project
          </h1>

          <div className="flex flex-col items-start justify-between w-full gap-6 py-10 lg:flex-row lg:gap-0">
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
              <Link to='https://anon-stores.vercel.app/' target="_blank">
                <p className="pt-4 transition-all border-black hover:border-b">https://anon-stores.vercel.app</p>
              </Link>
            </div>
          </div>
        </motion.div>

        <img 
          src={screenshot} 
          alt="anon store"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          The Anon Store wasn{"'"}t just a project; it was a thrilling escapade into the world of CSS and Javascript!  While building this online store (with a touch of anonymity, of course ), I found myself getting swept away by the creative possibilities that these languages offered.
        </p>

        <p className="text-[1rem] max-w-[700px]">
          The Anon Store wasn{"'"}t just a project - it was a learning adventure. It helped me understand JavaScript way better, with each problem I solved giving me a {'"'}lightbulb moment.{'"'} It was exciting, filled with {'"'}aha!{'"'} moments and a growing feeling of satisfaction.
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/z8YEdF7N7Qg?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        
        <div className="py-10 text-center">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://anon-stores.vercel.app/' text='https://anon-stores.vercel.app/'/>
        </div>
      </div>
    </section>
  )
}

export default Anonstore