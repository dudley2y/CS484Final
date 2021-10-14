<<<<<<< Updated upstream
import React from 'react';

const AccountSettings= () => {

    
    return(
        <div>
            <h1>yeet</h1>
=======
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

const AccountSettings= () => {

    const [password, setPassword] = useState("")
    const [response, setReponse] = useState("No response yet")


    const updatePassword = (event) =>{
        if(password){
            axios({
                method: "post",
                data: {
                    username: 'jr',
                    password: password
                },
                withCredentials: true,
                url:"http://localhost:5000/edit_user"
                
            }).then( res => {
                setReponse(res.data)
            }).catch( err => {
                if(err.message === "Request failed with status code 401"){
                    setReponse("Failed login")
                }
                else{
                    setReponse(JSON.stringify(err))
                }
            })
        }
        else{
            console.log("username or password not there")
        }
    }
    
    
    return(
        <div>
            <Form onSubmit={updatePassword}>
                <Form.Group>
                    <Form.Input label = "New_Password" type="text" placeholder="New Password" name = "password" onChange = {(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <Form.Button type = "submit">Submit Password Change!</Form.Button>
            </Form>
>>>>>>> Stashed changes
        </div>
    )
}

export default AccountSettings;