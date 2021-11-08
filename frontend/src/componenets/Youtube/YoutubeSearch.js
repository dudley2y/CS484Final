import React, { useState } from 'react';
import { Form, List, Grid, Image  } from 'semantic-ui-react';
import axios from 'axios'
// import YTSearch from 'youtube-api-search';
// import YoutubeGetData from './YoutubeGetData'



const YoutubeSearch = () => {
    const [response, setReponse] = useState("")
    const [search_params, setYoutubeSearch] = useState([])
    const [songs, setSongs] = useState("")
    const [currSongUri, setSongUri] = useState()

    const WATCH_URL = "https://www.youtube.com/watch?v=";
    const YOUTUBE_API_KEY = 'AIzaSyALI-6Nyga6ee6vZOOsT_UM_lTjEush68E';
    const default_url = 'https://www.googleapis.com/youtube/v3/search?';
    const query = "q=" + search_params;
    const maxResultsString = "maxResults=";
    const desiredMaxResults = "1";
    const baseurl =  default_url + "part=snippet&key=" + YOUTUBE_API_KEY + "&" + maxResultsString + desiredMaxResults + "&" + query


        
    const search_triggered = () => {
        if(search_params){

            axios({
                url: baseurl,
                method: 'GET'
            }).then(res => {
                console.log(res);
                console.log(res.data.items[0])
                // response.data.items.forEach(element => {
                //     setSongs( songs => [...songs,<YoutubeSong name = {element.name} id = {element.id} uri = {element.uri} artist = {element.artists[0].name} key = {element.id} update = { setSongUri } imageSrc = {element.album.images[2].url} /> ])
            })

            /*
            axios.get(baseurl, {
                params: {
                    
                }
            }).then( api_response =>  {

                
                var api_resp = api_response;
                var data = JSON.stringify(api_resp)
                setReponse(data);
                console.log(response.items)
                
              }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        setReponse(error.response)
                    }
                });

                // auth: {
                //     key: YOUTUBE_API_KEY
                //   },
                // data: {
                //     part: 'snippet',
                //     key: YOUTUBE_API_KEY,
                //     kind: "youtube#video",
                //     id: "8YWrmZoUYGs&t=219s",
                //     maxResults: 1
                // }
                */
        }
    }   

    const sortData = () => {
            
    }
    
    
    return(
        <div>
        <Form onSubmit={search_triggered}>
            <Form.Group widths = "equal"> 
                <Form.Input label = "Search" type = "text" placeholder = "Search Youtube" name = "search_params" onChange = {(evt) => setYoutubeSearch(evt.target.value)}/> 
            </Form.Group>
            <Form.Button type = "submit">Search</Form.Button>
        </Form>
        <p>{response}</p>
    </div>
    )
}

export default YoutubeSearch;