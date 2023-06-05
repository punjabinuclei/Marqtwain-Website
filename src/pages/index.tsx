import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import MainContainer from '@/components/Layout/MainContainer'
import CustomersSection from '@/components/CustomersSection/CustomersSection'
import OurApproach from '@/components/OurApproachSection/OurApproach'
import Stats from '@/components/Stats/Stats'
import ElevateProject from '@/components/ElevateProject/ElevateProject'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import ExpertUiDesigns from '@/components/ExpertUiDesigns/ExpertUiDesigns'
import Testimonials from '@/components/Testimonials/Testimonials'
import Footer from '@/components/Footer/Footer'

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
      <Stats />
      <ElevateProject />
      <FeaturedProjects />
      <ExpertUiDesigns />
      <Testimonials />
      <Footer />
    </div>
  )
}
