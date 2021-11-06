import React, { useEffect, useState } from 'react';
import { Form, List, Grid  } from 'semantic-ui-react';
import axios from 'axios'
import YTSearch from 'youtube-api-search';



const YoutubeSearch = () => {
    const [response, setReponse] = useState("")
    const [search_params, setYoutubeSearch] = useState([])
    const YOUTUBE_API_KEY = 'AIzaSyCOVCCGsybib6c8MJE8p1dSNtAQcn7hQmM'


        
    const search_triggered = () => {
        if(search_params){
            fetch("https://www.googleapis.com/youtube/v3/search?q=cats", {
                "method": "GET",
                "headers": {
                    "key": YOUTUBE_API_KEY
                }
            }).then(response=>{
                console.log(response);
            }).catch(err=>{
                console.log(err)
            })
    }
        //     axios({
        //         url: 'https://www.googleapis.com/youtube/v3/search',
        //         method: "Get",
        //         params: {
        //             part: 'snippet',
        //             maxResults: 5,
        //             key: YOUTUBE_API_KEY
        //         }
        //     }).then( res => {
        //         setReponse(res.data)
        //     }).catch( err => {
        //         if(err.message === "Request failed with status code 401"){
        //             setReponse("Failed login")
        //         }
        //         else{
        //             setReponse(JSON.stringify(err))
        //         }
        //     })
    
            // axios({
            //     method: "get",
            //     withCredentials: true,
            //     url:"http://localhost:5000/youtube_api_search"
            // }).then( res => {
            //     setReponse(res.data)

            // }).catch( err => {
            //     if(err.message === "Request failed with status code 401"){
            //         setReponse("Failed login")
            //     }
            //     else{
            //         setReponse(JSON.stringify(err))
            //     }
            // })
    // }

    // YTSearch({key: YOUTUBE_API_KEY, search_params: search_params}, (videos) =>{
    //     console.log(videos);

    // })
// }
    
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