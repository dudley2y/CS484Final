import React from 'react';
import ReactPlayer from 'react-player'
import { List, Image } from 'semantic-ui-react'

const YoutubeSong = (props) => {
    const youtube_base = "https://www.youtube.com/watch?v="
    const thumbnail = props.thumbnails.medium
    const height = thumbnail.height
    const width = thumbnail.width
    const src = thumbnail.url
    const player_url = youtube_base + props.videoId
    // console.log("key", props.videoId)
    // <Image width={width} height={height} src={src} alt=""/>
    return(
        <List.Item  onClick = { () => props.update(props.uri)}> 
            <List.Content>
                <div className="player">
                    <ReactPlayer url={player_url} 
                    light={true}
                    controls={true}
                    />
                </div>
                <p>{props.name}</p> 
                <p>{props.channel}</p>
            </List.Content>
            
        </List.Item>
    )
}
export default YoutubeSong;