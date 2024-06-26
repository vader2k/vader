import { Link } from "react-router-dom"
import screenshot from '../../assets/images/dictionary.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Dictionary = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0 md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center lg:gap-16 gap-8">
        <div className="w-full max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10">
          <motion.h1
              initial={{y: '100vh'}}
              animate={{y: 0}}
              transition={{ duration: 1.5, ease: 'easeOut'}} 
              className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem text-center w-full"
            >
              Dictionary
          </motion.h1>
        </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}} 
          className="w-full max-w-[800px]">
            <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
              An Urban Dictionary App
            </h1>

            <div className="flex w-full flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start py-10">
              <div className="max-w-[150px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
                <p className="pt-4">web development</p>
              </div>
              <div className="max-w-[300px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
                <div className="pt-4">
                  website Development, web design
                </div>
              </div>
              <div>
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
                <Link to='https://urban-dictionary-sigma.vercel.app/' target="_blank">
                  <p className="pt-4 hover:border-b border-black transition-all">https://urban-dictionary-sigma.vercel.app/</p>
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
          Urban Dictionary is an online crowdsourced dictionary that focuses on slang, colloquialisms, and informal language. It provides definitions for words and phrases that may not be found in traditional dictionaries, often reflecting contemporary language use, internet culture, and subcultures.
        </p>
        <p className="text-[1rem] max-w-[700px]">
          <strong>Search History:</strong> Urban Dictionary remembers past searches, making it easier for users to revisit previously looked-up terms without retyping them. This can be particularly helpful when researching slang or unfamiliar phrases within a specific context.
        </p>
        <p className="text-[1rem] max-w-[700px]">
          <strong>Bookmarking:</strong> Users can save their favorite definitions for future reference. This allows them to build a personalized dictionary of slang terms they encounter frequently or find particularly interesting. This feature caters to users who want to learn and keep track of the ever-evolving world of slang.
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/sABLFZvYGqg?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <div className="text-center py-10">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://urban-dictionary-sigma.vercel.app/' text='https://urban-dictionary-sigma.vercel.app/'/>
        </div>
      </div>
    </section>
  )
}

export default Dictionary