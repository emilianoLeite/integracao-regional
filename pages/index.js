import Navbar from '../components/navbar'
import About from '../components/about'
import IntegrationTypes from '../components/integration_types'
import Quizzes from '../components/quizzes'

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <main>
      <h1> Integração Regional </h1>
      <p> Subtítulo do site</p>

      <About/>
      <IntegrationTypes/>
      <Quizzes/>
    </main> 
    </>)
}
