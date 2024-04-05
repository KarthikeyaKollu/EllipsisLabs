import './index.css'
import { NavbarDemo } from './components/Nav'
import { LampDemo } from './components/Lamp'
import { HeroScrollDemo } from './components/CodePad'
import { HeroParallaxDemo } from './components/Hero'
import { Testimonials } from './components/Testimonials'
import { SignupFormDemo } from './components/Form'

function App() {


  return (
    <div className=''>
      <NavbarDemo />


      <section id='hero' className=''>
        <LampDemo />
      </section>
      <section id='services' className=''>
        <HeroScrollDemo />
      </section>
      <section id='Docs' className='dark:bg-slate-950 bg-white '>
        <HeroParallaxDemo />
      </section>
      <section id='testimonials' className='dark:bg-slate-950 bg-white '>
        <Testimonials  direction={"left"} />
        <Testimonials direction={"right"}/>
      </section>
      <section id='contact' className='dark:bg-slate-950 bg-white '>
        <SignupFormDemo />
      </section>
    </div>
  )
}

export default App
