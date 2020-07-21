import React, { useEffect } from 'react';
import './Home.css'
import black from '../../background/black.mov'
import homesvg from '../../svg/homesvg.svg'
import useWebAnimations from '@wellyshen/use-web-animations';


export default function Home() {
    const { ref, animate } = useWebAnimations();

    useEffect(() => {
        document.addEventListener("mousemove", e => {
            try {
                animate({
                    keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
                    timing: { duration: 5, fill: "forwards" }
                });
            } catch (error) {
                // Ifnore error
            }
        });
    }, [animate]);
    const heading1Animation = useWebAnimations({
        keyframes: [
            { transform: 'translateY(-20px)', opacity: '0' },
            { transform: 'translateY(0px)', opacity: '1' },
        ],
        timing: {
            duration: 1000,
            iterations: 1,
            easing: "linear",

        }
    })
    const hrAnimation = useWebAnimations({
        keyframes: [
            { transform: 'translateX(-20px)', opacity: '0' },
            { transform: 'translateX(0px)', opacity: '1' },
        ],
        timing: {
            duration: 1000,
            iterations: 1,
            easing: "linear",

        }
    })
    const heading2Animation = useWebAnimations({
        keyframes: [
            { transform: 'translateX(0px)', opacity: '0', color: 'whitesmoke' },
            { transform: 'translateX(0px)', opacity: '1', color: 'white' },
        ],
        timing: {
            duration: 1000,
            iterations: 1,
            easing: "linear",

        }
    })
    const heading4Animation = useWebAnimations({
        keyframes: [
            { transform: 'translateX(40px)', opacity: '0' },
            { transform: 'translateX(0px)', opacity: '.5' },
        ],
        timing: {
            duration: 1000,
            iterations: 1,
            easing: "linear",

        }
    })
    const button = useWebAnimations({
        keyframes: [
            { transform: 'translateX(0px)', opacity: '0' },
            { transform: 'translateX(0px)', opacity: '1' },
        ],
        timing: {
            duration: 2000,
            iterations: 1,
            easing: "linear",

        }
    })
    const homeSVGanimation = useWebAnimations({
        keyframes: [
            { transform: 'translateX(10px)', opacity: '0' },
            { transform: 'translateX(0px)', opacity: '1' },
        ],
        timing: {
            duration: 1000,
            iterations: 1,
            easing: "linear",

        }
    })
    return (
        <div className="home-page"
            style={{
                width: '100vw',
                height: '100vh'
            }}>
            <video autoPlay="autoplay" loop muted className="back-vid"
                style={{
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover'
                }}>
                <source src={black} />
            </video>
            <div ref={ref} className="cursor1">

            </div>
            <div className="home-content-wrapper">

                <div className="home-content">
                    <h1 ref={heading1Animation.ref}>Web Design</h1><br /><hr ref={hrAnimation.ref} /><br />
                    <b><h2 ref={heading2Animation.ref}>A Web Design Studio in Pakistan who offers honest advice, industry experience and a great portfolio of work.</h2></b><br /><br />
                    <h4 ref={heading4Animation.ref}>UI/UX, Wireframes, Research and Development - we understand all areas of Web Design. We can take a start-up business with nothing to a fully functioning brand online and offline. We can revamp an existing website, or take a successful brand to the next level. Our talented and creative web design team will work alongside you in collaboration to create a site that reflects your brand, talks to your audience with meaning and personality, and has great functionality across latest devices.</h4><br />
                    <button ref={button.ref}><b>Let's Start a Project</b></button>
                </div>
                <div className="home-svg" ref={homeSVGanimation.ref}>
                    <img src={homesvg} alt="" />
                </div>

            </div>
        </div >
    )
}