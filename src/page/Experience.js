import React from 'react'
import { Grid, Card, Typography, Button, CardContent, Box, ButtonGroup, ListItem, Chip } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import company from '../Assets/cotyledon.jpg';
import oldcompany from '../Assets/cblaze_infotech_pvt_ltd_logo.jpeg'
import { Title } from './Skils';


const Experience = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'React Js' },
        { key: 1, label: 'Javascript' },
        { key: 1, label: 'Local Storage ' },
        { key: 1, label: 'Matrial UI' },
        { key: 1, label: 'Node js' },
        { key: 2, label: 'ReactHooks' },
        { key: 0, label: 'Responsive Design' },
        { key: 2, label: 'React Router' },
    ]);

    return (
        <div>
            <Grid id='experience' container spacing={2} justifyContent="center" alignItems="center" sx={{ background: 'linear-gradient(to right, #2c1a39, #1b213d)' }} marginTop={0}>
                <Box sx={{ width: '69%', justifyContent: "center", }}>
                    <>
                        <br />
                        <br />
                        <Title>
                            Experience
                        </Title>
                        <br />
                        <Typography sx={{ color: '#b1b2b3', fontSize: '15px', fontWeight: 666, textAlign: "center" }}>
                            My work experience as a software engineer and working on <br />different companies and projects.</Typography>
                        <br />
                    </>
                </Box>
                <Grid container spacing={2} m={1}>

                    {/* <Grid item xl={12} xs={12} sm={12} md={12} lg={12} sx={{
                        display: "flex", justifyContent: 'center'
                    }}>
                        <Box sx={{ marginTop: '-20px', height: '0vh', '@media (max-width: 600px)': { display: 'none' } }}>
                            <Timeline>
                                {/* <TimelineItem sx={{width:'0px'}} >  */}
                                {/* <TimelineSeparator style={{ margin: 0 }}>
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                    <TimelineConnector sx={{ height: '170px', width: '3px', backgroundColor: '#844ce6' }} />
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                </TimelineSeparator>
                                {/* </TimelineItem> */}
                            {/* </Timeline></Box>
                        <Box sx={{
                            border: 1,
                            width: 'auto', height: '34vh', justifyContent: 'center',
                            borderRadius: "10px", borderColor: '#854CE6',
                            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for transform and box shadow
                            "&:hover": {
                                borderColor: "#854CE6",
                                transform: "translateY(-10px)",
                                boxShadow: `-1px -1px 10px  rgba(204, 0, 187, 0.15), 10px 10px 10px rgba(201, 32, 184, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15) `,
                            },
                        }}>
                            <Box variant='h4' sx={{
                                color: 'white', width: '97%', height: '9vh', margin: 2, display: 'flex',
                                justifyContent: "center",
                            }}> */}
                                {/* <Box variant='h4' sx={{
                                    width: '10%', height: '9vh', paddingTop: 1.2,
                                    '@media (max-width: 600px)': {
                                        width: '20%', height: '9vh',
                                        fontSize: '5px'
                                    }
                                }}>
                                    <img src={oldcompany} alt="Description of the image" style={{ width: '80%', height: '80%', borderRadius: '10px' }} />
                                </Box> */}
                                {/* <Box variant='h4' sx={{ color: 'white', width: '87%', height: '11vh', }}>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '17px' }}>
                                            Frot End Developer                                        </Typography>
                                    </Box>
                                    <Box sx={{ color: "1c1c27" }}>
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', }}>

                                            Cblaze Infotech Private Limited
                                        </Typography>
                                    </Box> */}
                                    {/* <Box sx={{ color: "1c1c27" }} >
                                        <Typography style={{ color: "#9c9da2", fontSize: '12px' }}>
                                            June 2024 -present
                                        </Typography> */}

                                    {/* </Box> */}
                                {/* </Box>
                            </Box>
                            {/* <Box variant='h4' sx={{ color: 'white', width: '97%', marginTop: 4.3 }} /> */}
                            {/* <Box variant='h4' sx={{ color: 'white', width: '97%', marginLeft: 2 }}>
                                <Typography style={{
                                    color: "#9c9da2",
                                    // textAlign: 'center',
                                    fontSize: '16px', // default font size for larger screens
                                    '@media (max-width: 600px)': {
                                    fontSize: '5px'
                                    }
                                }}>
                                    Front End Development, Customer Support,Problem-Solving, API Automation,
                                    AssetExplorer Products,
                                    User Interface Enhancement,Technical Assistance, Cross-Functional Collaboration. */}    
                                {/* </Typography>

                                <Typography style={{
                                    color: "#9c9da2",
                                    fontWeight: '666', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
                                    fontSize: '13.8px', paddingTop: '10px',
                                    '@media (max-width: 600px)': {
                                        paddingTop: '0px'
                                    }
                                }}>
                                    <b style={{ fontWeight: 666 }}>Skills:</b>
                                    • ReactJS
                                    • JavaScript
                                    • Postman
                                    • HTML
                                    • CSS
                                    • Api
                                    <br />
                                    • Material UI

                                </Typography>
                            </Box> */}


                        {/* </Box> */}

                    {/* </Grid> */} 
                    <Grid item xl={12} xs={12} sm={12} md={12} lg={12} sx={{
                        display: "flex", justifyContent: 'center'
                    }}>

                        <Box sx={{
                            border: 1,
                            width: 'auto', height: '34vh', justifyContent: 'center', marginLeft: '86px',
                            borderRadius: "10px", borderColor: '#854CE6',
                            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for transform and box shadow
                            "&:hover": {
                                borderColor: "#854CE6",
                                transform: "translateY(-10px)",
                                boxShadow: `-1px -1px 10px  rgba(204, 0, 187, 0.15), 10px 10px 10px rgba(201, 32, 184, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15) `,
                            },
                            '@media (max-width:600px)': {
                                marginLeft: '0px'
                            }
                        }}>
                            <Box variant='h4' sx={{
                                color: 'white', width: '97%', height: '9vh', margin: 2, display: 'flex',
                                justifyContent: "center",
                            }}>
                                <Box variant='h4' sx={{
                                    width: '10%', height: '9vh', paddingTop: 1.2,
                                    '@media (max-width: 600px)': {
                                        width: '20%', height: '9vh',
                                        fontSize: '5px'
                                    }
                                }}>
                                    <img src={company} alt="Description of the image" style={{ width: '80%', height: '80%', borderRadius: '10px' }} />
                                </Box>
                                <Box variant='h4' sx={{ color: 'white', width: '87%', height: '11vh', }}>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '17px' }}>
                                            Full Stack Developer                                        </Typography>
                                    </Box>
                                    <Box sx={{ color: "1c1c27" }}>
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                            Cotyledon Technologies Pvt Ltd
                                        </Typography>
                                    </Box>
                                    <Box sx={{ color: "1c1c27" }} >
                                        <Typography style={{ color: "#9c9da2", fontSize: '12px' }}>
                                            June 2024 -present
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            {/* <Box variant='h4' sx={{ color: 'white', width: '97%', marginTop: 4.3 }} /> */}
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginLeft: 2 }}>
                                <Typography style={{ color: "#9c9da2", fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', textJustify: 'center' }}>
                                    I have built many industry grade projects from scratch and am armed
                                    with many technological<br />  skillsuseful for tech projects.
                                </Typography>

                                <Typography style={{
                                    color: "#9c9da2", fontWeight: '666', fontSize: '13.8px', paddingTop: '10px',
                                    '@media (max-width: 600px)': {
                                        paddingTop: '0px'
                                    }
                                }}>
                                    <b style={{ fontWeight: 666 }}>Skills:</b>
                                    • ReactJS
                                    • Redux
                                    • NodeJs
                                    • Material UI
                                    • HTML
                                    • CSS
                                    • REST<br />
                                    • Bootstrap
                                    • MY SQL
                                    • Git
                                    • Linux
                                    • AWS
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '-20px', height: '0vh', '@media (max-width: 600px)': { display: 'none' } }}>
                            <Timeline>
                                <TimelineSeparator style={{ margin: 0 }}>
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                    <TimelineConnector sx={{ height: '170px', width: '3px', backgroundColor: '#844ce6' }} />
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                </TimelineSeparator>
                            </Timeline></Box>
                    </Grid>
                </Grid>
                <br />
                <br />
            </Grid>

        </div>
    )
}

export default Experience