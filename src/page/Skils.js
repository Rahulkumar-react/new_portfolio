import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Grid, Typography, Box,  } from '@mui/material';
import styled from 'styled-components'
import aws from "../Assets/aws .jpeg"
import node from "../Assets/node js.jpeg"
import img from "../Svg/redux.png";
import mui from "../Assets/mui.png"
import vscode from "../Svg/Visual_Studio_Code_1.35_icon.svg.png";

const SkillItem = ({ text, icon }) => (
  <Box sx={{ margin: 1, border: 2, borderColor: "#75767B", borderRadius: 3, width: '118px', height: "40px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {icon}
    {/* <Avatar alt="Avatar" src={icon} sx={{ margin: "2px", height: '29px', width: '29px' }} /> */}
    <Typography sx={{ color: '#B1B2B3', fontWeight: 666 }}>{text}</Typography>
  </Box>
);
export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const SkillCategory = ({ title, items }) => (
  <Grid item xl={4} lg={4} md={4.5} sm={12} xs={12} sx={{
    border: 1,
    boxShadow: "2px 2px 2px rgba(133, 76, 230, 0.1), -2px -2px 2px rgba(133, 76, 230, 0.1), 2px -2px 2px rgba(133, 76, 230, 0.1), -2px 2px 2px rgba(133, 76, 230, 0.1)",
    borderColor: "#854ce6",
    borderRadius: '10px',
    display: 'flex',
    bgcolor: '#171721',
    flexDirection: 'column',
    alignItems: 'center', flexWrap: 'wrap', height: '42vh', '@media (max-width: 900px)': {
      marginBottom: 3
    },
  }}>
    <Box sx={{ textAlign: 'center', width: '95%', flexWrap: 'wrap', }}>
      <Typography variant='h4' sx={{ fontWeight: 666, marginTop: 3, color: '#b1b2b3', fontSize: '28px' }}>
        {title}
      </Typography>
    </Box>
    <br />

    <Box sx={{ textAlign: 'center', width: '95%', height: '10vh', flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
      {items.map((item, index) => (
        <SkillItem key={index} {...item} />
      ))}
    </Box>

  </Grid>
);

export const Skills = () => {
  const frontendSkills = [
    {
      text: 'Reactjs', icon: (
        <div style={{ paddingTop: '5px', margin: 4 }}>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22">
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div >

      )
    },
    {
      text: 'Redux',
      icon: (
        <div style={{ padding: '0px 10px 0px 0px ', margin: '0px', width: '20px' }}>
          <img src={img} style={{ width: '90%', height: '60%', }} />
        </div >

      )
    }
    ,

    {
      text: 'HTML',
      icon: (
        <div style={{ paddingTop: '15px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>HTML5 Logo</title>
            <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6" />
            <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
            <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
            <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" />
            <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
          </svg>
        </div>
      )
    }
    ,

    {
      text: 'CSS', icon: (
        <div style={{ paddingTop: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" width="26" height="26" >
            <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z" />
            <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
            <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" />
            <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" />
          </svg>
        </div >

      )
    },
    {
      text: 'JavaScript',
      icon: (
        <div style={{ paddingTop: '5px', margin: 4 }}>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" width="24" height="24" style={{ borderRadius: '30px' }} >
            <rect width="630" height="630" fill="#f7df1e" rx="30" ry="30" />
            <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" fill="#000" />
          </svg>
        </div >

      )
    }
    ,
    {
      text: 'Bootstrap', icon: (
        <div style={{ paddingTop: '15px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" width="28" padding-top="20px" height="28"><defs><linearGradient id="bs-logo-a" x1="76.079" x2="523.48" y1="10.798" y2="365.945" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" /><stop offset="1" stop-color="#6610f2" /></linearGradient><linearGradient id="bs-logo-b" x1="193.508" x2="293.514" y1="109.74" y2="278.872" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" /><stop offset="1" stop-color="#f1e5fc" /></linearGradient><filter xmlns="http://www.w3.org/2000/svg" id="bs-logo-c" width="197" height="249" x="161.901" y="83.457" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="4" /><feGaussianBlur stdDeviation="8" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow" /><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter></defs><path fill="url(#bs-logo-a)" d="M56.481 53.32C55.515 25.58 77.128 0 106.342 0h299.353c29.214 0 50.827 25.58 49.861 53.32-.928 26.647.277 61.165 8.964 89.31 8.715 28.232 23.411 46.077 47.48 48.37v26c-24.069 2.293-38.765 20.138-47.48 48.37-8.687 28.145-9.892 62.663-8.964 89.311.966 27.739-20.647 53.319-49.861 53.319H106.342c-29.214 0-50.827-25.58-49.86-53.319.927-26.648-.278-61.166-8.966-89.311C38.802 237.138 24.07 219.293 0 217v-26c24.069-2.293 38.802-20.138 47.516-48.37 8.688-28.145 9.893-62.663 8.965-89.31z" /><path fill="url(#bs-logo-b)" filter="url(#bs-logo-c)" stroke="#fff" d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605z" /></svg>
        </div>
      )
    },
    {
      text: 'Material UI',
      icon: (
        <div style={{ padding: '5px 10px 0px 0px ', margin: '0px', width: '20px' }}>
          <img src={mui} style={{ width: '90%', height: '60%', }} />
        </div>
      )
    }

  ];

  const backendSkills = [
    {
      text: 'Node.js',
      icon: (
        <div style={{ padding: '5px 10px 0px 0px ', margin: '0px', width: '20px', borderRadius: '30px' }}>
          {/* <div style={{ paddingTop: '5px',borderRadius:'90px' }}> */}
          <img src={node} style={{ width: '99%', height: '70%' }} />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="33" height="33">
            <path d="M5 50a45 45 0 0 1 90 0a45 45 0 0 1-45 45a45 45 0 0 1-45-45z" fill="#8CC84B" />
            <circle cx="50" cy="50" r="20" fill="#fff" />
            <path d="M50 75a25 25 0 0 1 0-50a25 25 0 0 1 0 50z" fill="#333" />
          </svg> */}
        </div>
      )
    },
    {
      text: 'MySQL',
      icon: (
        <div style={{ paddingTop: '5px', }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="35" height="35">
            <circle cx="50" cy="50" r="40" fill="#f7df1e" />
            <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="#000">MySQL</text>
          </svg>
        </div>
      )
    },
    {
      text: 'Git',
      icon: (
        <div style={{ paddingTop: '5px', margin: 4 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="34" height="36">
            <path d="M64 4C31.3 4 4 31.3 4 64c0 19.3 8.6 36.7 22.2 48.5c2.1.5 2.9-.9 2.9-2.1c0-1.1-.1-5.1-.1-9.9c-9.7 1.7-11.7-4.7-11.7-4.7c-1.6-4.1-3.8-5.2-3.8-5.2c-3.1-2.1.2-2 .2-2c3.4.2 5.2 3.5 5.2 3.5c3 5.2 7.8 3.7 9.7 2.8c.3-2.2 1.2-3.7 2.2-4.6c-7.7-.9-15.8-3.8-15.8-16.9c0-3.7 1.3-6.7 3.5-9.1c-.4-.9-1.5-4.3.3-9c0 0 2.8-.9 9.3 3.5c2.7-.8 5.6-1.2 8.5-1.2c2.9 0 5.8.4 8.5 1.2c6.4-4.4 9.2-3.5 9.2-3.5c1.9 4.7.7 8.1.3 9c2.2 2.4 3.5 5.4 3.5 9.1c0 13.1-8.1 16-15.9 16.8c1 .9 1.9 2.6 1.9 5.3c0 3.8-.1 6.9-.1 7.8c0 1.2.8 2.7 2.9 2.1C115.5 100.7 124 83.3 124 64C124 31.3 96.7 4 64 4z" fill="#F05032" />
          </svg>
        </div>
      )
    }

    ,
    {
      text: 'GitHub',
      icon: (
        <div style={{ paddingTop: '5px', margin: 4 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="34" height="34">
            <path fill="#000000" d="M256 8C119 8 8 119 8 256c0 114.6 74.3 211.9 177 246.6c13 2.4 17.8-5.6 17.8-12.5c0-6.2-.3-26.9-.4-48.8c-72.2 15.7-87.4-34.7-87.4-34.7c-11.8-30.2-28.8-38.2-28.8-38.2c-23.5-16.1 1.8-15.8 1.8-15.8c26 1.8 39.7 26.8 39.7 26.8c23.1 39.5 60.7 28.1 75.5 21.5c2.3-16.7 9-28.1 16.4-34.5c-57.4-6.5-117.6-28.7-117.6-128.2c0-28.3 10.1-51.5 26.8-69.6c-2.7-6.5-11.6-32.9 2.5-68.6c0 0 21.8-7 71.4 26.6c20.7-5.7 42.9-8.6 65-8.7c22.1.1 44.3 3.1 65 8.7c49.5-33.6 71.2-26.6 71.2-26.6c14.2 35.7 5.3 62.1 2.6 68.6c16.8 18.1 26.7 41.3 26.7 69.6c0 99.7-60.4 121.6-117.9 128c9.3 8 17.5 23.9 17.5 48.2c0 34.8-.3 62.8-.3 71.4c0 6.9 4.7 15 17.9 12.4C437.7 467.9 512 370.6 512 256C512 119 401 8 256 8z" />
          </svg>
        </div>
      )
    }
    ,
    {
      text: 'VS Code',
      icon: (
        <div style={{ padding: '5px 14px 0px 0px ', margin: '0px', width: '20px' }}>
          <img src={vscode} style={{ width: '90%', height: '60%', }} />
        </div>
      )
    },
    {
      text: 'Postman',
      icon: (
        <div style={{ paddingTop: '5px', margin: 4 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
            {/* Postman SVG path */}
            <path fill="#FF6C37" d="M49.98,0c-0.06,0.05-0.11,0.1-0.17,0.16C21.06,16.57,3.1,39.06,0,64.1c1.9-0.2,3.9-0.3,5.9-0.3c14.95,0,28.55,5.36,39.27,14.23 C51.05,70.26,44.42,71.1,37.97,71.1c-4.21,0-8.24-0.47-12.05-1.35c-8.65-1.66-16.39-5.7-22.61-11.57C2.12,53.38,0,48.87,0,43.91 c0-1.25,0.1-2.5,0.3-3.74C4.22,16.57,21.06,0.05,49.98,0z M0.11,64.1c2.77-23.86,16.73-45.1,39.87-58.5c4.66,12.7,17.11,21.66,31.61,21.66 c2.73,0,5.42-0.33,8.06-0.95c-0.33,2.04-0.54,4.1-0.54,6.19c0,23.16,18.84,41.99,41.99,41.99c0.68,0,1.36-0.04,2.04-0.07 c0.53,2.73,0.83,5.54,0.83,8.42c0,23.14-18.85,41.99-41.99,41.99c-6.39,0-12.44-1.41-17.89-3.9 c-8.62-3.67-15.9-9.59-21.11-16.82C17.46,94.68,4.34,83.61,0.11,64.1z M55.67,39.92c-0.5,0.29-0.94,0.66-1.33,1.1l-0.63,0.68 c-1.62,1.75-3.42,3.32-5.4,4.67c-0.72,0.49-1.5,0.94-2.26,1.38c-0.06,0.04-0.11,0.08-0.17,0.12c-0.26,0.19-0.52,0.37-0.79,0.54 c-0.07,0.04-0.15,0.09-0.22,0.14c-0.3,0.2-0.59,0.4-0.9,0.59c-0.07,0.04-0.14,0.09-0.21,0.13c-0.33,0.2-0.66,0.41-1,0.6 c-0.06,0.03-0.12,0.07-0.18,0.1c-0.35,0.21-0.7,0.41-1.06,0.61c-0.07,0.04-0.14,0.07-0.21,0.11c-0.35,0.17-0.71,0.34-1.07,0.5 c-0.08,0.04-0.17,0.07-0.25,0.11c-0.35,0.16-0.71,0.31-1.07,0.46c-0.08,0.03-0.17,0.06-0.26,0.1c-0.33,0.14-0.66,0.28-1,0.41 c-0.07,0.03-0.14,0.05-0.21,0.08c-0.36,0.13-0.73,0.25-1.1,0.37c-0.09,0.03-0.17,0.05-0.26,0.07c-0.37,0.1-0.74,0.19-1.12,0.28 c-0.08,0.02-0.16,0.04-0.24,0.06c-0.38,0.09-0.76,0.17-1.15,0.24c-0.09,0.02-0.17,0.03-0.26,0.05c-0.38,0.1-0.76,0.19-1.15,0.28 c-0.09,0.02" />
          </svg>
        </div>
      )
    }


    ,
    {
      text: 'AWS',
      icon: (
        <div style={{ padding: '5px 10px 0px 0px ', margin: '0px', width: '20px', borderRadius: '30px' }}>
          <img src={aws} style={{ width: '99%', height: '70%' }} />
        </div>
      )
    }

  ];

  return (
    <div>
      <Grid id='skills' container spacing={2} justifyContent="center" alignItems="center" sx={{ bgcolor: '#1c1c27' }} marginTop={0}>
        <Box sx={{ width: '85%', justifyContent: "center", alignItems: "center" }}>
          <>
            <br />
            <br />
            <Title>
              Skills
            </Title>
            <Typography sx={{fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', color: '#b1b2b3', fontWeight: 666, textAlign: "center" }}>
              Here are some of my skills on which I have been working on for the<br /> past 1 years.
            </Typography>
            <br />
            <Grid container spacing={0} m={1}>
              <Grid item xl={1.8} lg={1.8} md={1.8} />
              <SkillCategory title="Frontend" items={frontendSkills} />
              <Grid item xl={0.2} lg={0.2} md={0.2} sm={0.2} xs={0.2} />
              <SkillCategory title="Backend & Others" items={backendSkills} />
              <Grid item xl={1} lg={1} md={1} />
            </Grid>
            <br />
            <br />
            <br />
          </>
        </Box>
      </Grid>
    </div>
  );
};
