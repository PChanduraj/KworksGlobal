import React from 'react';
import Grid from '@mui/material/Grid';
import './AboutUs.css'
import Typography from '@mui/material/Typography';
import Logo from '../image/final.png';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import icons from Material-UI
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SupportIcon from '@mui/icons-material/Support';
import SpeedIcon from '@mui/icons-material/Speed';
import AnimationIcon from '@mui/icons-material/Animation';
import BusinessIcon from '@mui/icons-material/Business'; // Assuming an icon for Ownership Mindset
import AboutImg from '../image/cool.png';
import { ListItemIcon } from '@mui/material';
import Values from './Values';
import priya from '../image/Picture1.jpg'
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const keyFeatures = [
    { text: 'Team of Experts', icon: <AccountCircleIcon fontSize='80px'/> },
    { text: 'Startup Friendly', icon: <AccessibilityNewIcon fontSize='80px' /> },
    { text: 'Quick Support', icon: <SupportIcon fontSize='80px'/> },
    { text: 'Efficiency', icon: <SpeedIcon fontSize='80px'/> },
    { text: 'Transparency', icon: <AnimationIcon fontSize='80px'/> },
    { text: 'Ownership Mindset', icon: <BusinessIcon fontSize='80px'/> },
  ];

  return (
    <>
    <Helmet>
        <title>Finteam - About</title>
        <meta name="description" content="Our mission is to empower businesses with the appropriate financial tools and expertise needed so they can perform wonders." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/about" />
    </Helmet>
    <div className='container'>
      {/* Image on the left */}
      <AnimatedOnScroll
                animationIn="bounceInRight" >  
      <div className='sub-container-1'>
      <img src={AboutImg} alt="About Us"  />    <img src={Logo} alt="Logo" style={{ width: '120px',marginBottom:'1rem' }} />
      </div>
      </AnimatedOnScroll>
      {/* Text content on the right */}
      <div  className='sub-container-2'>
        <div elevation={3} style={{ padding: '20px', height: '100%' }}>
        <AnimatedOnScroll
                animationIn="bounceInLeft" >
          <h1 className='heading' style={{overflow:'hidden'}}  gutterBottom>
           We are your dedicated Finance Team !
          </h1>
          <p className='para'>
          Founded in September 2023, FinTeam One's vision is to transform the financial landscape for businesses of all sizes and bring the future of managed financial services to small to medium-sized companies.
            Our mission is to empower businesses with the appropriate financial tools and expertise needed so they can perform wonders. We believe that by simplifying financial management, we enable our clients to focus on what they do best while we handle the numbers. Together, we're shaping a future where financial success is within reach for every business.
          </p>
          </AnimatedOnScroll>
        </div>
      </div>
      
    </div>
    <AnimatedOnScroll
                animationIn="bounceInRight" >
 
    
    <div className='container-2'>
      
    {keyFeatures.map((feature, index) => (
              <div  className='ListItem' key={index}>
                <span >{feature.icon}</span>
                
                <span>{feature.text}</span>
              </div>
            ))}
  </div>
</AnimatedOnScroll>

  {/* <Values/> */}
 
  <div className='container-3'>
   
     <div className='container-3-sub'>
     <AnimatedOnScroll
                animationIn="bounceInRight" >
      <div className='container-3-sub-div1'><img src={priya} alt='priya pic'/></div></AnimatedOnScroll>
      <AnimatedOnScroll
                animationIn="bounceInLeft" >
      <div className='container-3-sub-div2'>
      <h2 className='key-features'> From Founder's Pen</h2><p>
      Priya Chanduraj is a seasoned finance and business transformation leader with over 20+ years of experience. She excels at aligning financial strategies with overall business goals, utilizing her technical expertise and deep business understanding to craft tailored solutions for clients' unique accounting and finance needs. Her multi-faceted skills include M&A execution, systems optimization, process improvement, financial reporting, budgeting, cash flow management, forecasting, and internal controls.

Previously, Priya served as CFO at BlueWave Energy, managing their financial operations. Her prior experience includes senior finance roles at Fortune 500 companies like Schneider Electric and AES,
 as well as the World Bank's IFC. Notably, Priya actively contributes her financial expertise to non-profit boards, including the Greater Boston Salvation Army and the Finance Executive International Boston Chapter.
 Driven by a mission to fuel small business success, she leverages technology and talent management to solve their financial needs.
        </p></div>
        </AnimatedOnScroll>
     </div>
  </div>
  </>
  );
};

export default AboutUs;


{/* <Typography variant="h4" gutterBottom>
            Key Features:
          </Typography>
       
          <ul className='main-list' >
            {keyFeatures.map((feature, index) => (
              <li className='ListItem' key={index}>
                <span >{feature.icon}</span>
                
                <span>{feature.text}</span>
              </li>
            ))}
          </ul> */}