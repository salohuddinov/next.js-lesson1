import React from 'react'
import hero from '@/image/hero.png'
import Image from 'next/image'
import rasm1 from "@/image/rasm1.png"
import rasm2 from "@/image/rasm2.png"
import rasm3 from "@/image/rasm3.png"
import rasm4 from "@/image/rasm4.png"
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero__left">
                    <h2>Backcover</h2>
                    <h1>Backcover <br /> Tempered Glass</h1>
                    <button>Shop all !</button>
                </div>
                <Image src={hero} />
            </div>
            <div className="section">
                <div className="sect__card">
                    <div className="sect__card__top">
                        <button>sale !</button>
                        <Image src={rasm1} />
                    </div>
                    <h2>iPhone 13 Pro - Transparent LKR 499</h2>
                </div>
                <div className="sect__card">
                    <div className="sect__card__top">
                        <button>sale !</button>
                        <Image src={rasm2} />
                    </div>
                    <h2>Samsung S23+ - Transparent
                        <br />   LKR 799</h2>
                </div>
                <div className="sect__card">
                    <div className="sect__card__top">
                        <button>sale !</button>
                        <Image src={rasm3} />
                    </div>
                    <h2>iPhone 14 - Transparent with <br /> magsafe
                        <br />   LKR 799</h2>
                </div>
                <div className="sect__card">
                    <div className="sect__card__top">
                        <button>sale !</button>
                        <Image src={rasm4} />
                    </div>
                    <h2>Pixel 7 Pro - Transparent <br /> Wireless<br />  LKR 599</h2>
                </div>
            </div>
        </>
    )
}

export default Hero