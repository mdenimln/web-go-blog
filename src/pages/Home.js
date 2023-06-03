
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './Home.css';
export default function Home() {
    const [selengkapnya, setSelengkapnya] = useState(false);
    const addSelengkapnya = () =>{
        setSelengkapnya(true)
    }
    const hideSelengkapnya = () => {
        setSelengkapnya(false);
    }
    return(
        <section id="home" style={{overflow: 'hidden'}}>
            <div className="row">
                <div className='welcome'>
                    <div className='garis'></div>
                    <span className="home-span">Welcome</span>
                </div>
                <p className="home-p">What are you looking ?</p>
                <div style={{position: 'relative'}}>
                    
                    {selengkapnya ? (
                        <div style={{position: 'absolute'}}>
                            <div onClick={hideSelengkapnya} className='selengkapnya'>
                                <span>less</span>
                                <FaEye  />
                            </div>
                            <p className="home-p-sm">This website is for those of you who want to know about the solar system. The Solar System is a system of celestial bodies consisting of the Sun and other objects orbiting it.</p>
                        </div>
                        
                    ) : (
                        
                        <div style={{position: 'absolute'}}>
                            <div onClick={addSelengkapnya} className='selengkapnya'>
                                <span>more</span>
                                < FaEyeSlash  />
                            </div>
                        </div>
                    )}
                    
                </div>    
                    
            </div>
            <div className="row">
                <div className="backg">
                    <div className="planet">
                        <div className="r1"></div>
                        <div className="r2"></div>
                        <div className="r3"></div>
                        <div className="r4"></div>
                        <div className="r5"></div>
                        <div className="r6"></div>
                        <div className="r7"></div>
                        <div className="r8"></div>
                        <div className="shad"></div>
                    </div>
                    <div className="stars">
                        <div className="s1"></div>
                        <div className="s2"></div>
                        <div className="s3"></div>
                        <div className="s4"></div>
                        <div className="s5"></div>
                        <div className="s6"></div>
                        <div className="s7"></div>
                        <div className="s8"></div>
                        <div className="s9"></div>
                        <div className="s10"></div>
                    </div>
                    <div className="an">
                        <div className="tank"></div>
                        <div className="astro">
                            
                            <div className="helmet">
                                <div className="glass">
                                <div className="shine"></div>
                                </div>
                            </div>
                            <div className="dress">
                                <div className="c">
                                <div className="btn1"></div>
                                <div className="btn2"></div>
                                <div className="btn3"></div>
                                <div className="btn4"></div>
                                </div>
                            </div>
                            <div className="handl">
                                <div className="handl1">
                                <div className="glovel">
                                    <div className="thumbl"></div>
                                    <div className="b2"></div>
                                </div>
                                </div>
                            </div>
                            <div className="handr">
                                <div className="handr1">
                                <div className="glover">
                                    <div className="thumbr"></div>
                                    <div className="b1"></div>
                                </div>
                                </div>
                            </div>
                            <div className="legl">
                                <div className="bootl1">
                                <div className="bootl2"></div>
                                </div>
                            </div>
                            <div className="legr">
                                <div className="bootr1">
                                <div className="bootr2"></div>
                                </div>
                            </div>
                            <div className="pipe">
                                <div className="pipe2">
                                <div className="pipe3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}