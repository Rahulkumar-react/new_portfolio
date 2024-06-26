import React from 'react'
import { Grid, Card, Typography, Button, CardContent, Box, ButtonGroup, ListItem, Chip } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import education from '../Svg/young-happy-man.avif';
import School from '../Svg/young-people-friends.avif';
import college from '../Svg/images.png'


const Education = () => {
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
            <Grid id='education' container spacing={2} justifyContent="center" alignItems="center" sx={{ background: 'linear-gradient(to right, #2c1a39, #1b213d)' }} marginTop={0}>
                <Box sx={{ width: '69%', justifyContent: "center", }}>
                    <>
                        <br />
                        <Typography variant='h5' sx={{ color: 'white', fontSize: '40px', fontWeight: 666, textAlign: "center" }}>
                            Education
                        </Typography>
                        <br />
                        <Typography sx={{ color: '#b1b2b3', fontSize: '15px', fontWeight: 666, textAlign: "center" }}>
                            In my educational expedition, I've journeyed through a realm  <br />of self-exploration and continuous personal evolution.  <br />Here, I present the intricacies of my educational background.</Typography>
                        <br />
                    </>
                </Box>
                <Grid container spacing={2} m={1}>

                    <Grid item xl={12} xs={12} sm={12} md={12} lg={12} sx={{
                        display: "flex", justifyContent: 'center'
                    }}>
                        <Box sx={{ marginTop: '-20px', height: '0vh' }}>
                            <Timeline>
                                {/* <TimelineItem sx={{width:'0px'}} >  */}
                                <TimelineSeparator style={{ margin: 0 }}>
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                    <TimelineConnector sx={{ height: '130px', width: '3px', backgroundColor: '#844ce6' }} />
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                </TimelineSeparator>
                                {/* </TimelineItem> */}
                            </Timeline></Box>
                        <Box sx={{
                            border: 1,
                            width: 'auto', height: '28vh', justifyContent: 'center',
                            borderRadius: "10px", borderColor: '#854CE6',
                            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for transform and box shadow
                            "&:hover": {
                                borderColor: "#854CE6",
                                transform: "translateY(-10px)",
                                boxShadow: `-1px -1px 10px  rgba(204, 0, 187, 0.15), 10px 10px 10px rgba(201, 32, 184, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15) `,
                            },'@media(max-width:600px)':{padding:'3px'}
                        }}>
                            <Box variant='h4' sx={{
                                color: 'white', width: '97%', height: '9vh', margin: 1, display: 'flex',
                                justifyContent: "center",'@media(max-width:600px)':{margin:'0px'}
                            }}>
                                <Box variant='h4' sx={{ width: '10%', height: '9vh', paddingTop: 1.5 ,'@media(max-width:600px)':{width:'17%',textAlign:'center'}}}>
                                <img src={college} alt="Description of the image" style={{ width: '70%', height: '70%', borderRadius: '10px', '@media(max-width:600px)':{ width: '100px'}}} />
                                </Box>
                                <Box variant='h4' sx={{ color: 'white', width: '87%', height: '11vh', }}>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '17px' }}>
                                            JJ Collage of Arts and Science(bharathi University)
                                        </Typography>
                                    </Box>
                                    <Box sx={{ color: "1c1c27" }}>
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                            JJ Collage - Bachelor of Computer Applications (BCA)
                                        </Typography>
                                    </Box>
                                    <Box sx={{ color: "1c1c27" }} >
                                        <Typography style={{ color: "#9c9da2", fontSize: '12px' }}>
                                            June 2018 - May 2020
                                        </Typography>

                                    </Box>
                                </Box>
                            </Box>
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginTop: 4.3 }} />
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginLeft: 2 ,'@media(max-width:600px)':{margin:'0px'}}}>
                                <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '13.8px' }}>
                                    Grade: 70%
                                    <br />
                                    Successfully attained a JJ College degree specializing in BCA Computer Application<br /> from  Bharathi University.
                                </Typography>
                            </Box>


                        </Box>

                    </Grid>
                    <Grid item xl={12} xs={12} sm={12} md={12} lg={12} sx={{
                        display: "flex", justifyContent: 'center','@media(max-width:600px)':{padding:'0px'} 
                    }}>
                        <Box sx={{ marginTop: '-20px', height: '0vh','@media(max-width:600px)':{marginLeft:'0px'} }}>
                            <Timeline>
                                {/* <TimelineItem sx={{width:'0px'}} >  */}
                                <TimelineSeparator style={{ margin: 0 }}>
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                    <TimelineConnector sx={{ height: '130px', width: '3px', backgroundColor: '#844ce6' }} />
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                </TimelineSeparator>
                                {/* </TimelineItem> */}
                            </Timeline></Box>
                        <Box sx={{
                            border: 1,
                            width: 'auto', height: '28vh', justifyContent: 'center',
                            borderRadius: "10px", borderColor: '#854CE6',
                            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for transform and box shadow
                            "&:hover": {
                                borderColor: "#854CE6",
                                transform: "translateY(-10px)",
                                boxShadow: `-1px -1px 10px  rgba(204, 0, 187, 0.15), 10px 10px 10px rgba(201, 32, 184, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15) `,
                            },
                        }}>
                            <Box variant='h4' sx={{
                                color: 'white', width: '97%', height: '9vh', margin: 1, display: 'flex',
                                justifyContent: "center",'@media(max-width:600px)':{margin:'0px'}
                            }}>
                                <Box variant='h4' sx={{ width: '10%', height: '9vh', paddingTop: 1.5 ,'@media(max-width:600px)':{width:'17%',textAlign:'center'}}}>
                                    <img src={School} alt="Description of the image" style={{ width: '70%', height: '70%', borderRadius: '10px' }} />
                                </Box>
                                <Box variant='h4' sx={{ color: 'white', width: '87%', height: '11vh', }}>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '18px' }}>
                                            Sri Ramakrishna Vivekanantha Hr Sec School
                                        </Typography>
                                    </Box>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                            High School - 70%
                                        </Typography>
                                    </Box>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontSize: '12px' }}>
                                            Jun 2016 - April 2017
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginTop: 4.3 }} />
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginLeft: 2 }}>
                                <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                    Grade: 70.5%<br />
                                    I completed my class 12 education at Sri Ramakrishna Vivekanantha Hr Sec School
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xl={12} xs={12} sm={12} md={12} lg={12} sx={{
                        display: "flex", justifyContent: 'center'
                    }}>
                        <Box sx={{ marginTop: '-20px', height: '0vh' }}>
                            <Timeline>
                                {/* <TimelineItem sx={{width:'0px'}} >  */}
                                <TimelineSeparator style={{ margin: 0 }}>
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                    <TimelineConnector sx={{ height: '130px', width: '3px', backgroundColor: '#844ce6' }} />
                                    <TimelineDot sx={{ backgroundColor: '#9b27b0' }} />
                                </TimelineSeparator>
                                {/* </TimelineItem> */}
                            </Timeline></Box>
                        <Box sx={{
                            border: 1,
                            width: 'auto', height: '28vh', justifyContent: 'center',
                            borderRadius: "10px", borderColor: '#854CE6',
                            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for transform and box shadow
                            "&:hover": {
                                borderColor: "#854CE6",
                                transform: "translateY(-10px)",
                                boxShadow: `-1px -1px 10px  rgba(204, 0, 187, 0.15), 10px 10px 10px rgba(201, 32, 184, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15), 1px 1px 1px rgba(0, 70, 209, 0.15) `,
                            },'@media(max-width:600px)':{padding:'0px'}
                        }}>
                            <Box variant='h4' sx={{
                                color: 'white', width: '97%', height: '9vh', margin: 1, display: 'flex',
                                justifyContent: "center",'@media(max-width:600px)':{margin:'0px'}
                            }}>
                                <Box variant='h4' sx={{ width: '10%', height: '9vh', paddingTop: 1.5,'@media(max-width:600px)':{width:'17%',textAlign:'center'} }}>
                                    <img src={education} alt="Description of the image" style={{ width: '70%', height: '70%', borderRadius: '10px' }} />
                                </Box>
                                <Box variant='h4' sx={{ color: 'white', width: '87%', height: '11vh', }}>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '18px' }}>
                                            Sri Ramakrishna Vivekanantha Hr Sec School
                                        </Typography>
                                    </Box>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                            Secondary School - 73%
                                        </Typography>
                                    </Box>
                                    <Box  >
                                        <Typography style={{ color: "#9c9da2", fontSize: '12px' }}>
                                            Jun 2014 - April 2015
                                        </Typography >
                                    </Box>
                                </Box>
                            </Box>
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginTop: 4.3 }} />
                            <Box variant='h4' sx={{ color: 'white', width: '97%', marginLeft: 2 }}>
                                <Typography style={{ color: "#9c9da2", fontWeight: '666', fontSize: '14px' }}>
                                    Grade: 73.%<br />
                                    I completed my class 10 education at Sri Ramakrishna Vivekanantha Hr Sec School
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <br />
                <br />
            </Grid>

        </div>
    )
}

export default Education