import React from 'react';
import './Contact.css'
import contact from '../../background/contact.mp4'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            width: '100%',
        },
    },
}));
export default function Contact() {
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
                <source src={contact}/>
            </video>
            <div className="form">
                <div className="input-wrapper">
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