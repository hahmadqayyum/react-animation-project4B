import React, { useEffect } from 'react';
import './Blog.css'
import blogback from '../../background/blogback.mp4'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import useWebAnimations from '@wellyshen/use-web-animations'
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 360,
        maxHeight: 400,
        borderRadius: '10px',
        backgroundColor: 'rgba(151, 147, 147, 0.137)',
        color: 'white',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    avatar: {
        backgroundColor: red[500],

    },


}));


export default function Blog() {
    const classes = useStyles();
    const card1Animation = useWebAnimations({
        keyframes: [
            {  opacity: '0', },
            { transform: 'translateX(-10px)', opacity: '0.5',  },
            { transform: 'translateX(0px)', opacity: '1',  },
        ],
        timing: {
            duration: 2000,
            iterations: 1,
            easing: "ease-in-out",

        }
    })
    const card2Animation = useWebAnimations({
        keyframes: [
            {  opacity: '0', },
            { transform: 'translateX(-10px)', opacity: '0.5', },
            { transform: 'translateX(0px)', opacity: '1',  },
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


    return (
        <div className="blog-page"
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
                <source src={blogback} />
            </video>
            <div ref={ref} className="cursor2">

            </div>
            <div className="card-wrapper" >
                <div className="card" >

                    <div id="card1" >
                        <Card className={classes.root} ref={card1Animation.ref}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        S
          </Avatar>
                                }

                                title="Sophia"

                            />
                            <CardMedia
                                className={classes.media}
                                image="https://assets.madebyshape.co.uk/craft3-uploads/imager/163c52fa539a5b090734715290a64814/166445/ZOOM-SCREENSHOT_353fe568217a4ecd8f2727f818d6534e.webp"

                            />
                            <CardContent>
                                <Typography variant="body2" color="inherit" component="p">

                                    Remote work experience during lockdown
        </Typography>
                            </CardContent>


                        </Card>
                    </div>
                    <div id="card2" >
                        <Card className={classes.root} ref={card2Animation.ref}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        J
          </Avatar>
                                }

                                title="Jhon"

                            />
                            <CardMedia
                                className={classes.media}
                                image="https://assets.madebyshape.co.uk/craft3-uploads/imager/e03452863aa6625c13e4d7d7a1e2190c/162145/flora_353fe568217a4ecd8f2727f818d6534e.webp"

                            />
                            <CardContent>
                                <Typography variant="body2" color="inherit" component="p">
                                    Jhom Wick: Working from home
        </Typography>
                            </CardContent>

                        </Card>
                    </div>



                </div>
            </div >
        </div >
    )
}













