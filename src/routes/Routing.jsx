import { Routes, Route, useLocation } from "react-router-dom"
import { Home, About, Works, Contact, Articles,
  Summarizer,
  Anonstore,
  Medicare,
  Hoobank,
  Friends,
  Coinking,
  Dictionary,
  Dreally,
  Socialcheap,
  Clotya
} from '../pages'
import ScrollToTop from '../components/ScrollToTop'
import { AnimatePresence } from "framer-motion"

const Routing = () => {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/project/summarizer" element={<Summarizer />} />
          <Route path="/project/anon" element={<Anonstore />} />
          <Route path="/project/medicare" element={<Medicare />} />
          <Route path="/project/hoobank" element={<Hoobank />} />
          <Route path="/project/friends" element={<Friends />} />
          <Route path="/project/dreally" element={<Dreally />} />
          <Route path="/project/coinking" element={<Coinking />} />
          <Route path="/project/dictionary" element={<Dictionary />} />
          <Route path="/project/socialcheap" element={<Socialcheap />} />
          <Route path="/project/clotya" element={<Clotya />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default Routing