import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import MainContainer from '@/components/Layout/MainContainer'
import CustomersSection from '@/components/CustomersSection/CustomersSection'
import OurApproach from '@/components/OurApproachSection/OurApproach'
import Stats from '@/components/Stats/Stats'
import ElevateProject from '@/components/ElevateProject/ElevateProject'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import FeaturedProjectsMobile from '@/components/FeaturedProjects/FeaturedProjectsMobile'
import ExpertUiDesigns from '@/components/ExpertUiDesigns/ExpertUiDesigns'
import Testimonials from '@/components/Testimonials/Testimonials'
import Footer from '@/components/Footer/Footer'
import FooterMobile from '@/components/Footer/FooterMobile'

import PageTransition from '@/components/PageTransition'
type HomePageProps = {}
type HomePageRef = React.ForwardedRef<HTMLDivElement>


export default function Home(props: HomePageProps, ref: HomePageRef) {
  return (
    <PageTransition ref={ref}>
      <div className='LandingPageBgMobile lg:hidden'>
        <Navbar />
        <HeroSection />
      </div>
      <div className='hidden lg:block bg-landingPage'>
        <Navbar />
        <HeroSection />
      </div>
      <CustomersSection />
      <div>
        <OurApproach />
      </div>
      <Stats />
      <ElevateProject />
      <div>
        <div className='hidden lg:block'>
          <FeaturedProjects />
        </div>
        <div className='lg:hidden'>
          <FeaturedProjectsMobile />
        </div>
      </div>
      <ExpertUiDesigns />
      <Testimonials />
      <div>
        <div className='hidden lg:block'>
          <Footer />
        </div>
        <div className='lg:hidden'>
          <FooterMobile />
        </div>
      </div>
    </PageTransition>
  )
}

