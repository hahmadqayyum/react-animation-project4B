import React, { useEffect } from 'react';
import './Contact.css'
import contact from '../../background/contact.mp4'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import useWebAnimations from '@wellyshen/use-web-animations'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            width: '100%',
        },
    },
}));
export default function Contact() {
    const formAnimation = useWebAnimations({
        keyframes: [
            {  opacity: '0', backgroundColor: 'rgba(151, 147, 147, 0.137)' },
            { transform: 'translateY(1000px)', opacity: '0.5', backgroundColor: 'rgba(151, 147, 147, 0.527)' },
            { transform: 'translateY(0px)', opacity: '1', backgroundColor: 'none' },
        ],
        timing: {
            duration: 2000,
            iterations: 1,
            easing: "ease-in-out",

        }
    })


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

    const HandleSubmit = () => { }
    const classes = useStyles();
    return (
        <div
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
                <source src={contact} />
            </video>
            <div ref={ref} className="cursor3">

            </div>
            <div className="form" ref={formAnimation.ref}>
                <div className="input-wrapper" >
                    <form className={classes.root} noValidate autoComplete="off" >
                        <h2>Sign UP</h2>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
                        <Button variant="contained" color="secondary" onClick={HandleSubmit}>
                            SUBMIT
                        </Button>
                    </form><br />
                    <p>Already Have an Account,<Link>Sign In</Link></p>
                </div>

            </div>
        </div>
    )
}