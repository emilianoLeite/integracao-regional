import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import IntegrationTypes from '../components/integration_types'
import Quizzes from '../components/quizzes'
import NavigationButtons from '../components/navigation-buttons'

import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
          <link
            rel="preload"
            href="/fonts/Bacalisties.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Kinan.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Today-Easter.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>

      {/* <Navbar/> */}

      <main>
        <Hero/>

        <NavigationButtons/>

        <About/>
        <IntegrationTypes/>
        <Quizzes/>
      </main>
    </>
  )
}
