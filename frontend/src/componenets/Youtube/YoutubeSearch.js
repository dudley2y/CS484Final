import React, { useState } from 'react';
import { Form, List, Grid, Image  } from 'semantic-ui-react';
import axios from 'axios'
import YoutubeSong from './YoutubeSong';
// import YTSearch from 'youtube-api-search';
// import YoutubeGetData from './YoutubeGetData'



const YoutubeSearch = () => {
    const [response, setReponse] = useState("")
    const [search_params, setYoutubeSearch] = useState([])
    const [songs, setSongs] = useState([])
    const [currSongUri, setSongUri] = useState()
    
// ?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20
    const WATCH_URL = "https://www.youtube.com/watch?v=";
    const YOUTUBE_API_KEY = 'AIzaSyALI-6Nyga6ee6vZOOsT_UM_lTjEush68E';
    const default_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + YOUTUBE_API_KEY + "&";
    const query = "q=" + search_params;
    const maxResultsString = "maxResults=";
    const desiredMaxResults = "2";
    const baseurl_video =  default_url + maxResultsString + desiredMaxResults + "&type=video&" + query


    
    const parse_search = (res) => {
        setSongs([])
        res.data.items.forEach(element => {
            setSongs( songs => [...songs,<YoutubeSong name = {element.snippet.name} id = {element.id.videoId} 
                    uri = {WATCH_URL + element.id.videoId} channel = {element.snippet.channelTitle} 
                    description = {element.snippet.description} videoId = {element.id.videoId} update = { setSongUri } 
                    imageSrc = {element.snippet.thumbnails.default.url} thumbnails = {element.snippet.thumbnails}/> ])
        },
        res.data.items.forEach(element =>{
            if(element.id.videoId){
                console.log("Video found with id:", element.id.videoId)
            }
            else{
                console.log("Returns a channel:", element.id.channelTitle)
            }
        })
        );
        
    }
    const search_triggered = () => {
        if(search_params){

            axios({
                url: baseurl_video,
                method: 'GET'
            }).then(res => {
                parse_search(res);
                console.log(res);
            }).catch( err => {
                console.log(err)
            })
        }
    }   

    const sortData = () => {
            
    }
    
    
    return(
        <div class="ui container">
        <Form onSubmit={search_triggered}>
            <Form.Group widths = "equal"> 
                <Form.Input label = "Search Videos" type = "text" placeholder = "Search Youtube" name = "search_params" onChange = {(evt) => setYoutubeSearch(evt.target.value)}/> 
            </Form.Group>
            <Form.Button type = "submit">Search</Form.Button>
        </Form>
        <Grid>
                <Grid.Row columns = {2}>
                    <Grid.Column>
                        <List divided verticalAlign='middle'>
                            {songs}
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    </div>
    )
}

export default YoutubeSearch;