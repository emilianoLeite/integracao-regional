import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import About from '../components/about'
import IntegrationTypes from '../components/integration_types'
import Quizzes from '../components/quizzes'

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <main>
      <Hero/>
      

      <About/>
      <IntegrationTypes/>
      <Quizzes/>
    </main> 
    </>)
}
