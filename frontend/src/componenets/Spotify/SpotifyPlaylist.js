import React from 'react';
import { List, Image, Table } from 'semantic-ui-react'

const SpotifyPlaylist = (props) => {
    return(
        <table class="ui celled table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Tracks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="Name">{props.name}</td>
            <td data-label="Tracks">{props.tracks}</td>
            </tr>
        </tbody>
    </table>
    )

}
export default SpotifyPlaylist;

