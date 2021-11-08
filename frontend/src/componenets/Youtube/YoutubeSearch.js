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


    const YOUTUBE_API_KEY = 'AIzaSyALI-6Nyga6ee6vZOOsT_UM_lTjEush68E'
    const default_url = 'https://www.googleapis.com/youtube/v3/search?';
    const query = "q=" + search_params
    const maxResultsString = "maxResults=";
    const desiredMaxResults = "1"
    const baseurl =  default_url + "part=snippet&key=" + YOUTUBE_API_KEY + "&" + maxResultsString + desiredMaxResults + "&" + query


        
    const search_triggered = () => {
        if(search_params){
            axios.get(baseurl, {
                params: {
                    
                }
            }).then(function (api_response) {
                var parsed = JSON.parse(response)
                var video_id = parsed.data.id;
                var snippet = parsed.data.snippet;
                var title = snippet.title;
                var description = snippet.description;
                var thumbnail_url = snippet.thumbnails.url;
                var thumbnail_width = snippet.thumbnails.height;
                var thumbnail_height = snippet.thumbnails.height;
                
                
                var api_resp = api_response;
                var data = JSON.stringify(api_resp)
                setReponse(data);
                // console.log(response.items)
                
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
        }
    }   

    const objectJson = () => {
        var arr = [];
        for (var object in response){
            console.log(object);
            arr += object;
        }
        return{
            arr
        }

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