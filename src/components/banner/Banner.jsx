import React from 'react'
import './Banner.css'
import Image from 'next/image'
import Banner1 from '@/image/banner.png'

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner__left">
                    <h2>Shop Premium Tempered Glass in wholesale Price !</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. LKR : 299</p>
                    <button>Shop Tempered Glass </button>
                </div>
                <Image src={Banner1} />
            </div>
        </>
    )
}

export default Banner