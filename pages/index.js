import Hero from '../components/home/hero'
import NavigationButtons from '../components/home/navigation-buttons'
import About from '../components/home/about'
import IntegrationTypes from '../components/home/integration_types'
import Quizzes from '../components/home/quizzes'
import Team from '../components/home/team'

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

      <main>
        <Hero/>

        <NavigationButtons/>

        <About/>
        <IntegrationTypes/>
        <Quizzes/>
        <Team/>
      </main>
    </>
  )
}
