import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ContactUs from '@/components/ContactUsPage/ContactUs'



import PageTransition from '@/components/PageTransition'
type ContactPageProps = {}
type ContactPageRef = React.ForwardedRef<HTMLDivElement>




const contactUs = (props: ContactPageProps, ref: ContactPageRef) => {
    return (
        <PageTransition ref={ref}>
            <div className='ContactPageBg'>
                <Navbar />
                <ContactUs />
            </div>
        </PageTransition>
    )
}

export default contactUs