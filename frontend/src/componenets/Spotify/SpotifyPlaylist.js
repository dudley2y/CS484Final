import React from 'react';
import { List, Image, Table } from 'semantic-ui-react'

const SpotifyPlaylist = (props) => {
    console.log("Printing name:", props.name)
    return(
        <Table ui celled table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Tracks</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell singleLine textAlign='center'>
                        {props.name}
                    </Table.Cell>
                    <Table.Cell>
                        {props.tracks}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )

}
export default SpotifyPlaylist;

