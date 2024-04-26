import { Link, useNavigate } from 'react-router-dom'
import { pages } from '../constants'
import { motion } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import { useState } from 'react'


const Home = () => {  

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
    window.location.reload()
  }

  const [cursorVariant, setCursorVariant] = useState('default')
  
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <>
      <CustomCursor cursorVariant={cursorVariant}/>
      <section className="min-h-screen w-full flex flex-col lg:flex-row lg:items-end py-32 lg:justify-between gap-10 lg:gap-20 px-8 lg:px-20 bg-bg-50">
      <div className='lg:mb-28 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <h1 className='font-Montserrat uppercase text-[0.9rem] font-medium tracking-[2px] text-text-50'>ODUKWE DANIEL</h1>
        <p className='font-Montserrat text-[0.8rem]'>Frontend Web Developer / Gamer / Movie Lover</p>

        <p className='font-Montserrat text-[0.8rem]'>
          Currently working full-time as a junior web developer at
        </p>
        <Link to="https://tethral.com/" target='_blank' className='font-Montserrat text-[0.82rem] font-semibold underline hover:line-through transition-all'>
          <p>Tethral Technologies</p>
        </Link>
      </div>

      <div className='flex flex-col leading-[4.5rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[10rem] mb-5 lg:px-10'>
        {pages.map((link) => (
            <motion.div
              key={link.id}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              onClick={() => handleClick(link.path)}
              transition={{ type: 'spring', stiffness: 100 }}
              className='text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10vw] cursor-pointer h1 text-text-50 hover:italic transition-all'
              >
                {link.text}
              </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home