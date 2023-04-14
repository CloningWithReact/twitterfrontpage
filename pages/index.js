import Head from 'next/head'
import CenterZone from '../components/CenterZone'
import LeftZone from '../components/LeftZone'
import RightZone from '../components/RightZone'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/assets/twitter-logo.png" />
      </Head>

      <main>
        <LeftZone />
        <CenterZone />
        <RightZone />
      </main>
    </div>
  )
}
