import { FormControl, InputLabel, Input, Box, TextField, Button} from '@material-ui/core';
import React, {useState} from 'react';

const Signupform = () => {

    const [name , setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const signUpRequest = () => {
        console.log("hi");
    }

    return(
        <Box sx={{ '& .MuiTextField-root': { display: 'block' }}} >
            <form onSubmit = {signUpRequest}> 
                <TextField id="name-input" label="First Name" type="text"/>
                <TextField id="username-input" label="Username" type="text"/>
                <TextField id="password-input" label="Password" type="password"/>
                <Button variant="contained" component="span" type="submit"> Sign up!</Button>
            </form>

        </Box>
    )
}

export default Signupform;