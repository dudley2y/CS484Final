import axios from 'axios';
import React, {useState, useRef} from 'react';
import Captcha from './Captcha';
import { Form } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Spotifylogin = () => {

    const history = useHistory();

    const clientId = "426327bb47284651ba7d3aac5790edc1"
    const redirect_uri = "http://localhost:3000/spotify";
    const scopes = 'user-read-private user-read-email';

    const fullAuthLink = 'https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + clientId + (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +'&redirect_uri=' + encodeURIComponent(redirect_uri)
    const requestSpotify = () => {
        /*
        axios({
            method: "GET",
            //withCredentials: true,
            crossdomain: true,
            url: fullAuthLink
        }).then( res => {
            console.log(res)
        })
        */
       history.push(fullAuthLink)
    }
    
    return(
        <div >
            <h1>Yoote</h1>
            <button onClick = {requestSpotify}>Click meee</button>
        </div>
    )

}
export default Spotifylogin;

