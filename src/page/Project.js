import React from 'react'
import { Grid, Card, Typography, Button, Box, ButtonGroup, Chip } from '@mui/material';
import img from "../Assets/mobile1.2c9ead24950043391393.png";
import img1 from "../Assets/mobile4.4d556dbc23b57024fbc5.png";
import { BorderColor } from '@mui/icons-material';

const Project = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'React Js' },
    { key: 1, label: 'Javascript' },
    { key: 1, label: 'Local Storage ' },
    { key: 1, label: 'Matrial UI' },
    { key: 1, label: 'Deployment' },
    { key: 2, label: 'ReactHooks' },
    { key: 0, label: 'Responsive Design' },
    { key: 2, label: 'React Router' },
  ]);
  const [chipData2, setChipData2] = React.useState([
    { key: 1, label: 'Node js' },
    { key: 0, label: 'React Js' },
    { key: 1, label: 'Javascript' },
    { key: 1, label: 'Matrial UI' },
    { key: 1, label: 'Deployment' },
    { key: 2, label: 'ReactHooks' },
    { key: 0, label: 'Responsive Design' },
    { key: 2, label: 'React Router' },
  ]);
  return (
    <div>
      <Grid id="projects" container spacing={2} justifyContent="center" alignItems="center" sx={{ background: 'linear-gradient(to right, #2c1a39, #1b213d)' }} marginTop={0}>
        <Box sx={{ width: '85%', justifyContent: "center", alignItems: "center" }}>
          <> <br />
            <br />
            <Typography variant='h4' sx={{ color: 'white', fontSize: '40px', fontWeight: 666, textAlign: "center" }}>
              Project
            </Typography>
            <Typography sx={{ color: '#b1b2b3', fontSize: '18px', fontWeight: 666, textAlign: "center" }}>
              I have worked on a wide range of projects. From web apps to<br /> android apps. Here are some of my projects.            </Typography>
            <br />
            <Box sx={{ textAlign: 'center', padding: 2, justifyContent: 'center' }} >
              <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ border: '1px solid #854CE6', borderRadius: '10px', }}>
                <Button sx={{ bgcolor: '#29223f', borderRadius: '10px', border: '1px solid none' }}>One</Button>
                <Button sx={{ bgcolor: '#1c1c27', border: '1px solid none', '&:hover': { bgcolor: '#1c1c27' } }}>Two</Button>
                <Button sx={{ bgcolor: '#29223f', borderRadius: '10px', border: '1px solid none' }}>Three</Button>
              </ButtonGroup>
            </Box>
            <Grid container spacing={0} m={1}>
              <Grid item xl={1.3} lg={1.3} md={1.2} />
              <Grid
                item
                xl={3}
                lg={3}
                md={3.5}
                sm={12}
                xs={12}
                sx={{
                  borderRadius: "15px",
                  bgcolor: "#171721",
                  boxShadow: "10px 20px 35px rgba(0, 0, 0, 0.3)", // Initial box shadow
                  transition: "box-shadow 0.5s ease, transform 0.5s ease", // Slower transition for transform and box shadow
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: "20px 30px 75px rgba(0, 0, 0, 0.5)", // Increased box shadow on hover
                  },
                  '@media (max-width: 900px)': {
                    marginBottom: 1
                  },
                }}
              >
                <Box sx={{ padding: 2, justifyContent: 'center' }}>
                  <Box variant='h4' sx={{ fontWeight: 666, marginTop: 1, height: "30vh", color: '#b1b2b3', fontSize: '28px', borderRadius: '10px', }}>
                    <img src={img} alt="Description of the image" style={{ width: '100%', height: '100%', }} />
                  </Box>
                  <Box sx={{
                    marginTop: 1, display: 'flex',
                    height: "13vh", color: '#b1b2b3', borderRadius: '13px', flexWrap: 'wrap',
                  }}>
                    {chipData.map((data) => (
                      <Chip sx={{ margin: 0.1, padding: 0, color: "#854CE6", bgcolor: ' #29223f', height: '23px' }}
                        label={data.label}
                      />
                    ))}
                  </Box>
                  <Box variant='h6' sx={{ float: 'left', fontWeight: 666, height: "3.5vh", color: '#b1b2b3', fontSize: '23px', borderRadius: '10px' }}>
                    PYS Online Bookings
                  </Box>
                  <Box variant='h4' sx={{ float: 'left', marginTop: 1, height: "10vh", color: '#b1b2b3', fontSize: '15px' }}>
                    Pick Your Slot is a React-based project that allows users to conveniently schedule and manage their appointments or reservations.
                  </Box>
                  <a href="https://pickyourslot.com/" target="_blank" rel="noopener noreferrer">
                    <Button
                      sx={{
                        borderRadius: '10px',
                        background: '#854ce6',
                        color: 'white',
                        width: '100%',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(191, 57, 137, 0.8) 0%, rgba(9, 107, 222, 0.8) 100%)',
                        },
                        '@media (max-width: 600px)': {
                          width: "95%",
                          margin: 1
                        }
                      }}
                    >View Project</Button>
                  </a>
                </Box>
              </Grid>
              <Grid item xl={0.2} lg={0.2} md={0.2} sm={0.1} xs={0.1} />
              <Grid
                item
                xl={3}
                lg={3}
                md={3.5}
                sm={12}
                xs={12}
                sx={{
                  borderRadius: "15px",
                  bgcolor: "#171721",
                  boxShadow: "10px 20px 35px rgba(0, 0, 0, 0.3)", // Initial box shadow
                  transition: "box-shadow 0.5s ease, transform 0.5s ease", // Slower transition for transform and box shadow
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: "20px 30px 75px rgba(0, 0, 0, 0.5)", // Increased box shadow on hover
                  },
                  '@media (max-width: 900px)': {
                    marginBottom: 1
                  },
                }}
              >
                <Box sx={{ padding: 2, justifyContent: 'center' }}>
                  <Box variant='h4' sx={{ fontWeight: 666, marginTop: 1, height: "28vh", color: '#b1b2b3', fontSize: '28px', borderRadius: '10px' }}>
                    {/* <img src={img} alt="Description of the image" style={{ width: '100%', height: '100%', }} /> */}
                    <img src={img1} alt="Description of the image" style={{ width: '100%', height: '100%', }} />

                  </Box>
                  {/* <Box sx={{
                    marginTop: 1, display: 'flex',
                    // justifyContent: 'center',
                    height: "13vh", color: '#b1b2b3', borderRadius: '13px', flexWrap: 'wrap',
                  }}>
                    {chipData.map((data) => (
                      <Chip sx={{ margin: 0.1, padding: 0, color: "#854CE6", bgcolor: ' #29223f', height: '23px' }}
                        label={data.label}
                      />
                    ))}
                  </Box> */}
                  <Box variant='h6' sx={{ float: 'left', fontWeight: 666, height: "3.5vh", color: '#b1b2b3', fontSize: '23px', borderRadius: '10px' }}>
                    Project
                  </Box>
                  {/* <Box sx={{ float: 'left', marginTop: 1, height: "4vh", color: '#b1b2b3', }}>
                      Oct 2023
                    </Box> */}
                  <Box variant='h4' sx={{ float: 'left', marginTop: 1, height: "25vh", color: '#b1b2b3', fontSize: '15px', textJustify: 'center' }}>
                  Developed and maintained the "Pick Your Slot" web app, facilitating user bookings for physical activities like gym sessions and salon appointments. Utilized ReactJS, HTML5, CSS3, React MUI Material, and JavaScript to create dynamic, visually appealing interfaces, enhancing user engagement.              </Box>
                  <a href="https://pickyourslot.com/" target="_blank" rel="noopener noreferrer">
                    <Button
                      sx={{
                        borderRadius: '10px',
                        background: '#854ce6',
                        color: 'white',
                        width: '100%',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(191, 57, 137, 0.8) 0%, rgba(9, 107, 222, 0.8) 100%)',
                        },
                        '@media (max-width: 600px)': {
                          width: "95%",
                          margin: 1
                        }
                      }}
                    >View Project</Button>
                  </a>
                </Box>
                <br />
              </Grid>
              <Grid item xl={0.2} lg={0.2} md={0.2} sm={0.1} xs={0.1} />
              <Grid
                item
                xl={3}
                lg={3}
                md={3.5}
                sm={12}
                xs={12}
                sx={{
                  borderRadius: "15px",
                  bgcolor: "#171721",
                  boxShadow: "10px 20px 35px rgba(0, 0, 0, 0.3)", // Initial box shadow
                  transition: "box-shadow 0.5s ease, transform 0.5s ease", // Slower transition for transform and box shadow
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: "20px 30px 75px rgba(0, 0, 0, 0.5)", // Increased box shadow on hover
                  },
                  '@media (max-width: 900px)': {
                    marginBottom: 1
                  },
                }}
              >
                <Box sx={{ padding: 2, justifyContent: 'center' }}>
                  <Box variant='h4' sx={{ fontWeight: 666, marginTop: 1, height: "28vh", color: '#b1b2b3', fontSize: '28px', borderRadius: '10px' }}>
                    <img src={img1} alt="Description of the image" style={{ width: '100%', height: '100%', }} />
                  </Box>
                  <Box sx={{
                    marginTop: 1, display: 'flex',
                    // justifyContent: 'center',
                    height: "13vh", color: '#b1b2b3', borderRadius: '13px', flexWrap: 'wrap',
                  }}>
                    {chipData2.map((data) => (
                      <Chip sx={{ margin: 0.1, padding: 0, color: "#854CE6", bgcolor: ' #29223f', height: '23px' }}
                        label={data.label}
                      />
                    ))}
                  </Box>
                  <Box variant='h6' sx={{ fontWeight: 666, height: "3.5vh", color: '#b1b2b3', fontSize: '23px', borderRadius: '10px' }}>
                    Sri Rayar
                  </Box>
                  <Box variant='h4' sx={{ marginTop: 1, height: "10vh", color: '#b1b2b3', fontSize: '15px', }}>
                    Sri Rayar project is an online course web application that offers a diverse range of courses for learning and skill development.                  </Box>
                  <a href="https://pickyourslot.com/" target="_blank" rel="noopener noreferrer">
                    <Button
                      sx={{
                        borderRadius: '10px',
                        background: '#854ce6',
                        color: 'white',
                        width: '100%',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(191, 57, 137, 0.8) 0%, rgba(9, 107, 222, 0.8) 100%)',
                        },
                        '@media (max-width: 600px)': {
                          width: "95%",
                          margin: 1
                        }
                      }}
                    >View Project</Button>
                  </a>
                </Box>

              </Grid>
              <Grid item xl={1} lg={1} md={1} />
            </Grid>
            <br />
            <br />
          </>
        </Box>
      </Grid>

    </div>
  )
}

export default Project