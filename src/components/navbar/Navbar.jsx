import Link from 'next/link'
import React from 'react'
import "./Navbar.css"
import Image from 'next/image'
import logo from '@/image/logo.png'
import serch from '@/image/serch.png'

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="nav__item">
                        <Link className='link' href={"/"}>Home</Link>
                        <Link className='link' href={"/shop"}>Shop All</Link>
                        <Link className='link' href={"/blog"}>Blog</Link>
                    </div>
                    <Image src={logo} />
                    <div className="nav__item">
                        <Link className='link' href={"/about"}>About</Link>
                        <form className='nav__item__form' action="">
                            <input type="text" placeholder='Search Product' />
                            <Image src={serch} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar