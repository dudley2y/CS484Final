import React, {useState} from 'react';
import Loginform  from './Loginform';
import Signupform from './Signupform';

const Login = () => {

    const [alignment, setAlignment] = useState('Sign up');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    }

    const renderForm = () => {
        console.log(alignment)
        if(alignment === "Log in"){
            return(<Loginform/>)
        }
        else{
            return(<Signupform/>)
        }
    }

    return(
        <div>
            <div className = "ui buttons">
                <button className = "ui button" onClick={ (event) => handleChange(event, "Sign up") } >Sign up</button>
                <div className = "or"></div>
                <button className = "ui button" onClick={ (event) => handleChange(event, "Log in") }>Login</button>
            </div>
            {renderForm()}
        </div>
    )

}
export default Login;