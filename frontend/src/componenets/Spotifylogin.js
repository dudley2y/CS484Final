import axios from 'axios';
import React, {useState, useRef} from 'react';
import Captcha from './Captcha';
import { Form } from 'semantic-ui-react';


export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "e3b5e64c97e048b49d1c4383843f2f35";
const redirectUri = "http://localhost:3000";

const Spotifylogin = () => {
    
    return(
        <div >
            <h1>Yoote</h1>
        </div>
    )

}
export default Spotifylogin;