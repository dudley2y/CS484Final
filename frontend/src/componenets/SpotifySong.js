import React from 'react';

const SpotifySong = (props) => {
    return(
        <div onClick = { () => props.update(props.uri)}>
            <h1>Name {props.name} Artist {props.artist} </h1>
        </div>
    )

}
export default SpotifySong;

