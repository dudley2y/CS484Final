import React, { useState } from 'react';
import axios from 'axios';
import { Icon } from 'semantic-ui-react'


const AccountSettings= () => {

    const [user, setUser] = useState() 
    axios({
        method: "post",
        withCredentials: true,
        url:"http://localhost:5000/user"
        
    }).then( res => {
        setUser(res.data)
    })
    
    return(
        <div>
            <div><Icon name='settings' size="huge"/></div>
            <h1>{user}</h1>
        </div>
    )
}

export default AccountSettings;