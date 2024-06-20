import React from 'react';
import { Typography, Container, Button } from '@mui/material';

const Home: React.FC = () => {
    return (
        <>
            <Container>
                <Typography variant='h4' component='h5' gutterBottom>
                    Welcome to My App, built with ReactJS, NextJS, Typescript and Material UI.
                </Typography>

                <Typography variant='body1' gutterBottom>
                    This is a simple example of a NextJS app using Typescript & Material UI.
                </Typography>

                <Button variant='contained' color='primary'>
                    Click Me
                </Button>
            </Container>
        </>
    );
};

export default Home;
