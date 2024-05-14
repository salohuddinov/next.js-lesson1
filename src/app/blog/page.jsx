import React from 'react'
import './Blog.css'
import rasm from "@/image/cont1.png"
import rasm2 from "@/image/cont2.png"
import Image from 'next/image'

const Blog = () => {
    return (
        <>
            <div className="container">
                <div className="Blog">
                    <h2> Blog Posts</h2>
                    <div className="blog__cont">
                        <div className="cont">
                            <h2>Tempered Glass</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                        </div>
                        <Image src={rasm} />
                    </div>
                    <div className="blog__cont">
                        <Image src={rasm2} />
                        <div className="cont">
                            <h2>Back Cover</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                        </div>
                    </div>
                    <div className="blogg">
                        <h2>Mobile Brand and Price Strategy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog