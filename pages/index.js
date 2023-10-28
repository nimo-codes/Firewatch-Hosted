import Image from 'next/image'

import Navbar from '@/components/navbar'
import Landing from '@/components/landing'

export default function HomePage() {
  return (
   <div className='xl:overflow-y-hidden h-screen bg-black'>
    <Navbar/>
    <Landing/>
   </div>
  )
}
