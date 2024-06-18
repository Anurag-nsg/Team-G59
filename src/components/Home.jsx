// src/Home.js
import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
// import backgroundImage from './background.jpg'; // Add a suitable background image to your project

const useStyles = makeStyles({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: "EFE2BA",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
  },
  header: {
    fontSize: '2rem',
    marginTop: '60px',
  },
  buttonContainer: {
    marginTop:"40px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  button: {
    width: '325px',
    padding: '10px 20px',
    height:"75px",
    fontSize: '1.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#333',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
});

const Home = ({ userName }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleHostSettingsClick = () => {
    navigate('/face');
  };

  return (
    <Container className={classes.homeContainer}>
      <Typography className={classes.header} variant="h3">
        Welcome, Visitor {userName}!
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">Apartment A</Button>
        <Button className={classes.button} variant="contained">Apartment B</Button>
        <Button className={classes.button} variant="contained">Office/Company 1</Button>
        <Button className={classes.button} variant="contained">Office/Company 2</Button>
        <Button className={classes.button} variant="contained">Hospital</Button>
        <Button className={classes.button} variant="contained" onClick={handleHostSettingsClick}>Host Settings</Button>
      </Box>
    </Container>
  );
};

export default Home;
