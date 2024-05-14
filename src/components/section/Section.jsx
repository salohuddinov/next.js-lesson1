import React from 'react'
import './Section.css'
import section from '@/image/section.png'
import Image from 'next/image'

export const Section = () => {
    return (
        <div>
            <div className="section1">
                <h2>about us</h2>
                <h5>If you’re looking for a Premium Quality Tempered Glass or Back-cover for your Device </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <Image className='section__img' src={section} />
        </div>
    )
}
