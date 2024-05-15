import React from 'react'
import './Footer.css'
import Image from 'next/image'
import rasm from '@/image/fologo.png'
import rasm1 from '@/image/watsapp.png'
import rasm2 from '@/image/facebook.png'
import rasm3 from '@/image/instagram.png'
import rasm4 from '@/image/tiktok.png'


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__card">
                    <Image src={rasm} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footer__card">
                    <h2>Contact us</h2>
                    <p>E: info@example.com <br /> P:+94 7670000000 <br /> A: 123 Hospital rd, <br /> Kalubowila, Dehiwela</p>
                </div>
                <div className="footer__card">
                    <h2>Useful links</h2>
                    <p>
                        Shop All <br />
                        Tempered Glass <br />
                        Back-cover <br />
                        About Us
                    </p>
                </div>
                <div className="footer__card">
                    <div className="foimg">
                        <Image src={rasm1} />
                        <h3>Whatsapp</h3>
                    </div>
                    <div className="foimg">
                        <Image src={rasm2} />
                        <h3>Facebook</h3>
                    </div>
                    <div className="foimg">
                        <Image src={rasm3} />
                        <h3>Instargram</h3>
                    </div>
                    <div className="foimg">
                        <Image src={rasm4} />
                        <h3>Tik Tok</h3>
                    </div>
                </div>
            </div>
        </>
                )       
}

export default Footer