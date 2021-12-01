import React from 'react';
import ReactPlayer from 'react-player'
import { List, Image, Grid } from 'semantic-ui-react'

const YoutubeSong = (props) => {
    const youtube_base = "https://www.youtube.com/"
    const thumbnail = props.thumbnails
    const height = thumbnail.height
    const width = thumbnail.width
    const src = thumbnail.url
    const player_url = youtube_base + "watch?v=" + props.videoId
    const channel_url = youtube_base + "channel/" + props.channelID
    // console.log("key", props.videoId)
    // <Image width={width} height={height} src={src} alt=""/>

    const typeDetermination = () => {
        if (props.intent === "Search Video"){
            return(
            <div className="player">
                <ReactPlayer url={player_url} 
                light={true}
                controls={true}/>
                <p>{props.name}</p> 
                <p>{props.channel}</p>
            </div>
            )
        }
        else{
            // <Image size="medium" circular src={thumbnail.medium.url}/>
            console.log("Channel url:", channel_url, "Image:", thumbnail)
            return(
                <div>
                    <img src={thumbnail.medium.url} class="ui medium circular image"/>
                </div>
            )
        }
    }
    return(
        <List.Item  onClick = { () => props.update(props.uri)}> 
            <Grid.Row  style={{backgroundColor:"eee"}}>
                <List.Content>
                    {typeDetermination()}
                    <p>{props.channelTitle}</p>
                </List.Content>
            </Grid.Row>
            
        </List.Item>
    )
}
export default YoutubeSong;