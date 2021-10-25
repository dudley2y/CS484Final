import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const querystring = require('querystring');

const SpotifySuccess = () => {

    const history = useHistory();

    const [tokens, setToken]  = useState()

    const clientId = "426327bb47284651ba7d3aac5790edc1";
    const clientSecret = "e418005aab42495587ced18596035912"

    const url  = new URL(window.location.href);

    const error = url.searchParams.get('error');

    if(error){
        history.push('./')
    }

    const code = url.searchParams.get('code'); 

    const getToken = () => {

      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      };

      let data = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/spotify/success",
        client_id: clientId,
        client_secret: clientSecret,
      };

      axios.post("https://accounts.spotify.com/api/token", querystring.stringify(data), headers).then( res => {
        setToken(res.data.access_token)
      })

    }

    const doTheThingy = () => {

      const headers = {
        headers: {
          'Accept': 'application/json',
           Authorization: 'Bearer ' + tokens
        }
      };

      axios.get("https://api.spotify.com/v1/me", headers).then(response => {
        console.log(response)
      })
    }

    return(
        <div >
            <h1>Freeeee dataaa</h1>

            <button onClick = {getToken}>Get Token </button>
            <button onClick = {doTheThingy}>Do the thing</button>
        </div>
    )

}
export default SpotifySuccess;

