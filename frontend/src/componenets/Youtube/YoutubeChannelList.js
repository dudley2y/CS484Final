import React from 'react';
import { List, Image } from 'semantic-ui-react'

const YoutubeChannelList = (props) => {
    return(
        <List.Item > 
            <List.Content>
                <p>{props.name}</p> 
                <p>{props.artist}</p>    
            </List.Content>
        </List.Item>
    )
}
export default YoutubeChannelList;

