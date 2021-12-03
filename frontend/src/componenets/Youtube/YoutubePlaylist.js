import React from 'react';
import ReactPlayer from 'react-player'
import { List, Image, Grid, Container } from 'semantic-ui-react'
import {Row, Col} from "react-bootstrap";

const YoutubePlaylist = (props) =>{

    return(
        <div width="100%">
            <table class="ui celled table">
                <thead>
                    <tr><th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="Name">James</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Engineer</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default YoutubePlaylist;