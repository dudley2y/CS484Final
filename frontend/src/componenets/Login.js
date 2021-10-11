import React, {useState} from 'react';
import Loginform  from './Loginform';
import Signupform from './Signupform';
import Spotifylogin from './Spotifylogin'
import { Button } from 'semantic-ui-react'

const Login = () => {

    const [intent, setIntent] = useState('Sign up');
    const [loginIsPositive, setLoginIsPostive] = useState(false)
    const [spotifyLoginIsPositive, setSpotifyLoginIsPositive] = useState(false)
    const [signupIsPositive, setSignupPositive] = useState(true)

    const handleChange = (event, intent) => {
        setIntent(intent);

        if(intent === "Log in"){
            setLoginIsPostive(true)
            setSignupPositive(false)
        }
        else if(intent == "Spotify Login"){
            setSpotifyLoginIsPositive(true)
            setLoginIsPostive(false)
            setSignupPositive(false)
        }
        else{
            setSignupPositive(true)
            setLoginIsPostive(false)
            setSpotifyLoginIsPositive(false)
        }
    }

    const renderForm = () => {
        if(intent === "Log in"){
            return(<Loginform/>)
        }
        else if(intent == "Spotify Login"){
            return(<Spotifylogin/>)
        }
        else{
            return(<Signupform/>)
        }
    }
    

    return(
        <div style = {{width: "50%", marginLeft: "auto", marginRight: "auto", paddingRight: "1em"}}>
            <div align = "center">
                <Button.Group>
                    <Button positive = {signupIsPositive} onClick={ (event) => handleChange(event, "Sign up") } >Sign up</Button>
                    <Button.Or />
                    <Button positive = {loginIsPositive} onClick={ (event) => handleChange(event, "Log in") } >Login</Button>
                    <Button.Or />
                    <Button positive = {spotifyLoginIsPositive} onClick={ (event) => handleChange(event, "Spotify Login") } >Login with Spotify</Button>
                </Button.Group>
            </div>
            {renderForm()}
        </div>
    )

}
export default Login;