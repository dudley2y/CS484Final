import React, {useState} from 'react';
import { Container, Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Loginform  from './Loginform';
import Signupform from './Signupform';

const Login = () => {

    const [alignment, setAlignment] = useState('Log in');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment) ;
    }

    const renderForm = () => {
        if(alignment === "Log in"){
            return(<Loginform/>)
        }
        else{
            return(<Signupform/>)
        }
    }

    return(
        <Container maxWidth = "xs">
            <ToggleButtonGroup color = "primary" value = {alignment} exclusive >
                <ToggleButton onClick={ (event) => handleChange(event, "Log in") } value="Log in">Login</ToggleButton>
                <ToggleButton onClick={ (event) => handleChange(event, "Sign up") } value="Sign up">Signup</ToggleButton>  
            </ToggleButtonGroup>

            {renderForm()}


        </Container>
    )

}
export default Login;