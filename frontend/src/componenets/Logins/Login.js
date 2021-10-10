import React, {useState} from 'react';
import Loginform  from '../Forms/Loginform';
import Signupform from '../Forms/Signupform';
import { Button } from 'semantic-ui-react'


const Login = () => {

    const [intent, setIntent] = useState('Sign up');
    const [loginIsPositive, setLoginIsPostive] = useState(false)
    const [signupIsPositive, setSignupPositive] = useState(true)

    const handleChange = (event, intent) => {
        setIntent(intent);

        if(intent === "Log in"){
            setLoginIsPostive(true)
            setSignupPositive(false)
        }
        else{
            setSignupPositive(true)
            setLoginIsPostive(false)
        }
    }

    const renderForm = () => {
        if(intent === "Log in"){
            return(<Loginform/>)
        }
        else{
            return(<Signupform/>)
        }
    }
 

    return(
        <div style = {{width: "50%", marginLeft: "auto", marginRight: "auto" }}>
            <div align = "center">
                <Button.Group>
                    <Button positive = {signupIsPositive} onClick={ (event) => handleChange(event, "Sign up") } >Sign up</Button>
                    <Button.Or />
                    <Button positive = {loginIsPositive} onClick={ (event) => handleChange(event, "Log in") } >Login</Button>
                </Button.Group>
            </div>
            {renderForm()}
        </div>
    )

}
export default Login;