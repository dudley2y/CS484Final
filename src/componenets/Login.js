import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const Login = () => {

    return(
        <Container maxWidth = "xs">
            <form>
                <Grid container spacing = {2}>
                    <TextField label = "Username" required/>
                    <TextField label = "Password" required/>
                    <Button variant="contained" color="inherit">Primary </Button>
                </Grid>
            </form>
            
        </Container>
    )

}

export default Login;