import React, { useEffect, useState } from 'react';
import { Form, List, Grid  } from 'semantic-ui-react';
import axios from 'axios'
import YTSearch from 'youtube-api-search';

const youtubeSong = (props) => {
    return(
        <List.Item  onClick = { () => props.update(props.uri)}> 
            <Image src = {props.imageSrc}/>
            <List.Content>
                <p>{props.name}</p> 
                <p>{props.artist}</p>    
            </List.Content>
            
        </List.Item>
    )
}
export default YoutubeSong;