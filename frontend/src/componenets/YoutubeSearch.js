import React, {useState, useRef} from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

const YoutubeSearchBar = () => {

    const [yt_search, setYoutubeSearch] = useState("")
    const [response, setReponse] = useState("")

    const searchAction = (event) =>{
        if(yt_search){
            axios({
                method: "post",
                data: {
                    yt_search: yt_search
                },
                withCredentials: true,
                url:"http://localhost:5000/youtube_api_search"
                
            }).then( res => {
                setReponse(res.data)

            }).catch( err => {
                if(err.message === "Request failed with status code 401"){
                    setReponse("Failed search lookup")
                }
                else{
                    setReponse(JSON.stringify(err))
                }
            })
        }
        else{
            console.log("No search sent")
        }
    }

    return(
        <div >
            <Form onSubmit={searchAction}>
                <Form.Group widths = "equal"> 
                    <Form.Input label = "Search" type = "text" placeholder = "Search Youtube" name = "yt_search" onChange = {(evt) => setYoutubeSearch(evt.target.value)}/> 
                </Form.Group>
                <Form.Button type = "submit">Search</Form.Button>
            </Form>
            <h1>{response}</h1>
        </div>
    )

}
export default YoutubeSearchBar;