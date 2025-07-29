import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Lazy load sections for better mobile performance
const About = dynamic(() => import('@/components/sections/About'), { 
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>
})
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>
})
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>
})
const Certifications = dynamic(() => import('@/components/sections/Certifications'), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>
})
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>
})

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}
