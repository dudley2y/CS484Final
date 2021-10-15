import React, { useState } from 'react';
import axios from 'axios';
import { Menu } from 'semantic-ui-react'
import UpdateUsername from './UpdateUsername';
import UpdatePassword from './UpdatePassword';
import DeleteAccount from './DeleteAccount';

const AccountSettings= () => {

    const [selected, updateSelected] = useState("username")

    const handleChange = (event, newSelect) => {
        updateSelected(newSelect)
    } 

    const renderForm = () => {
        if(selected == "username"){
            return(<UpdateUsername/>)
        }
        else if(selected == "password"){
            return(<UpdatePassword/>)
        }
        else if(selected == "delete"){
            return(<DeleteAccount/>)
        }
    }


    return(
        <div>
            <Menu pointing vertical>
                <Menu.Item name = "update username" onClick = {(evt) => handleChange(evt, "username")} />
                <Menu.Item name = "update password" onClick = {(evt) => handleChange(evt, "password")}/>
                <Menu.Item name = "delete account" onClick = {(evt) => handleChange(evt, "delete")}/>
            </Menu>
            {renderForm()}

        </div>
    )
}

export default AccountSettings;