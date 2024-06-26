import React from 'react';
import Box from '@mui/material/Box';
import { TypeAnimation } from 'react-type-animation';
import { Grid, Typography, Button } from '@mui/material';
import img from '../Assets/rahul.jpeg';
import bganimation from '../Svg/svg+xml;base64,PHN2ZyBjbGFzcz0iQmdBbmltYXRpb25fX3N2ZyIgdmlld0JveD0iMCAwIDYwMiA2MDIiIGZpbGw9Im5vbmUi.svg'

const About = () => {
    return (
        <Grid id='about' container spacing={2} justifyContent="center" sx={{
            bgcolor: '#171721', marginTop: '60px', display: "flex",
            flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
            },
            // justifyContent: "space-between",
        }}>
            <Grid item xl={5.6} lg={5.6} md={5.6} sm={12} xs={12} sx={{ paddingTop: '0px' }}>
                <Box sx={{
                    textAlign: 'center',
                    paddingTop: '60px',
                    // paddingLeft: "18px",
                    '@media (max-width: 600px)': {
                        textAlign: 'center',
                        paddingTop: '0px',

                    },
                    '@media (min-width: 601px) and (max-width: 960px)': {
                        textAlign: 'center',
                    },
                    '@media (min-width: 961px)': {
                        textAlign: 'left',
                    },
                }}>
                    <Typography variant='h4' sx={{
                        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
                        fontWeight: 666, color: 'white', justifyContent: "center", alignItems: "center"
                    }}>
                        Hi, I am<br />
                        Rahul Kumar R
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontWeight: 666, color: 'white', '@media (max-width: 600px)': {
                            textAlign: 'center',
                            fontSize: '20px',
                            fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',

                        },
                    }}>
                        I am a <TypeAnimation
                            sequence={[
                                'Front-End Developer',
                                2000, // Increased duration to slow down the typing
                                // /'Expertise in API integration'/,
                                // 2000, // Increased duration to slow down the typing
                                'Full Stack Developer', // Removed the '|' at the end
                                "", // Empty string to create a pause
                                2000, // Increased duration to slow down the typing
                            ]}
                            wrapper="span"
                            speed={2} // Decreased speed to make it slower
                            style={{
                                display: 'inline-block',
                                fontWeight: 666,
                                color: '#854CE6',
                            }}
                            repeat={Infinity}
                        />

                    </Typography>
                    <Typography sx={{
                        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
                        color: '#9C9CA2', fontSize: '20px', lineHeight: "32px", width: '80%',
                        '@media (max-width: 960px)': {
                            width: '100%', // Change width to 100% for screens smaller than 960px
                        },
                    }}>
                        As a Full Stack Developer with 1 years of hands-on experience, I specialize in JavaScript technologies, adept at customizing development environments and solving intricate technical challenges. At Cotyledon Technologies Pvt Ltd, I focused on product development and deployment, fueled by a strong passion for JavaScript and its frameworks. Skilled in both back-end and front-end aspects, I excel in team management and possess broad knowledge of developing and deploying web applications from scratch
                    </Typography>
                    <br />
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, rgba(191, 57, 137, 1) 0%, rgba(9, 107, 222, 1) 100%)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, rgba(191, 57, 137, 0.8) 0%, rgba(9, 107, 222, 0.8) 100%)',
                            },
                            '@media (max-width: 600px)': {
                                width: "95%",
                                margin: 1
                            }
                        }}
                    >Check Resume</Button>
                </Box>
                <br />
                <br />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} style={{}}>
                <br /><br />

                <Box
                    sx={{
                        backgroundImage: `url(${bganimation})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        position: 'relative',
                        height: '70VH', '@media (max-width: 600px)': {
                            height: "50vh"
                        }
                    }}
                >
                    <Box
                        sx={{
                            margin: 0,
                            border: 2,
                            borderColor: "#854CE6",
                            borderRadius: '50%',
                            width: '314px',
                            height: '310px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: "20px 20px 60px rgba(200, 0, 187, 0.1), -20px -20px 60px rgba(201, 32, 184, 0.1), 20px -20px 60px rgba(0, 70, 209, 0.1), -20px 20px 60px rgba(0, 70, 209, 0.1)",
                            overflow: 'hidden' // Add overflow hidden to clip the SVG to the box
                        }}
                    >
                        <img
                            src={img}
                            alt="Description of the image"
                            style={{ borderRadius: '50%', width: '314px', height: '310px', zIndex: 1 }} // Ensure the image appears above the SVG
                        />
                    </Box>
                </Box>
                <br />
                <br />
            </Grid>
        </Grid>
    )
}

export default About;
