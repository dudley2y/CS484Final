import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios'
import SpotifySong from './SpotifySong'
import SpotifyPlayer from 'react-spotify-web-playback';
import { get } from 'http';
const querystring = require('querystring');

const SpotifySearch = () => {

    const [search, setSearch] = useState() 
    const [songs, setSongs] = useState([])
    const [currSongUri, setSongUri] = useState()
    const [tokens, setTokens] = useState()

    const searchSpotify = () => {

        // db search to get tokens 

        axios({
            method: "get",
            withCredentials: true,
            url:"http://localhost:5000/spotify_accessToken"
        }).then( res => {
            if(res.data != "Error"){
                setTokens([])
                setTokens(res.data)
            }
            else{
                console.log("error")
            }
        })
    }

    useEffect( () => {
        if(tokens != []){
            const headers = {
                headers: {
                'Accept': 'application/json',
                Authorization: 'Bearer ' + tokens,
                }
            };
            
            axios.get("https://api.spotify.com/v1/search?" + 
                querystring.stringify({
                    q: search,
                    type: "track"
                }), headers)
                .then(response => {
                    setSongs([])
                    response.data.tracks.items.forEach(element => {
                        console.log(element)
                        setSongs( songs => [...songs,<SpotifySong name = {element.name} id = {element.id} uri = {element.uri} artist = {element.artists[0].name} key = {element.id} update = { setSongUri } /> ])
                    }
                );
            })
        }
    }, [tokens])

    const displaySpotify = () =>{
        if(tokens && currSongUri){
           return  <SpotifyPlayer token={tokens} uris={currSongUri} autoPlay = {true} /> 
        }
        else if(!tokens){
          return <h1>Player needs token</h1>
        }
        else{ 
          return <h1>Needs Song Uri</h1>
        }
      }

    return(
        <div>
            <Form onSubmit={searchSpotify}>
                <Form.Group widths = "equal"> 
                    <Form.Input label = "Search" type = "text" placeholder = "Search Spotify" name = "spotify" onChange = {(evt) => setSearch(evt.target.value)}/> 
                </Form.Group>
                <Form.Button type = "submit">Search</Form.Button>
            </Form>
            {displaySpotify()}
            {songs}
        </div>
    )

}
export default SpotifySearch;