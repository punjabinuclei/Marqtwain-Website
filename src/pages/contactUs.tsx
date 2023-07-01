import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ContactUs from '@/components/ContactUsPage/ContactUs'

const contactUs = () => {
    return (
        <div className='ContactPageBg'>
            <Navbar />
            <ContactUs />
        </div>
    )
}

export default contactUs