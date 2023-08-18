import Image from 'next/image'
import Serach from './search/page'
import Context from "../context/context"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
    <Context>
      <Serach/>
    </Context>
    </main>
  )
}
