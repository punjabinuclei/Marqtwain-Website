import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import MainContainer from '@/components/Layout/MainContainer'
import CustomersSection from '@/components/CustomersSection/CustomersSection'
import OurApproach from '@/components/OurApproachSection/OurApproach'

export default function Home() {
  return (
    <div>
      <div className='bg-landingPage'>
        <Navbar />
        <HeroSection />
      </div>
      <CustomersSection />
      <div>
        <OurApproach />
      </div>
    </div>
  )
}
