import React, { useEffect, useState } from 'react';
import { Form, List, Grid  } from 'semantic-ui-react';
import axios from 'axios'
import YTSearch from 'youtube-api-search';
const YOUTUBE_API_KEY = 'AIzaSyCOVCCGsybib6c8MJE8p1dSNtAQcn7hQmM'
const default_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const playlistID = 'PLFsfg2xP7cbJY2Cg4F_tWUSDrtfvLVCAu';

const YoutubeGetData = ({data}) => {
    const [response, setReponse] = useState("")

const result = () => {
    axios({
        method: 'post',
        url: default_url,
        data: {
            part: 'snippet',
            key: YOUTUBE_API_KEY,
            playlistId: playlistID
        }
    }).then(res => {
        setReponse(res.data)
    });
}

    return (
        <h1>{result}</h1>
    )
}


// export async function getServerSideProps(){
//     const res = await fetch(`${default_url}?key=${YOUTUBE_API_KEY}`);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

// export default function YoutubeGetData({data}){
//     console.log('data')
// }
export default YoutubeGetData;