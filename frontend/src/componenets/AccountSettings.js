import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

const AccountSettings= () => {

    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [response, setReponse] = useState("No response yet")


    const loginAction = (event) =>{
        if(password || name){
            axios({
                method: "post",
                data: {
                    name: name,
                    password: password
                },
                withCredentials: true,
                url:"http://localhost:5000/edit_user"
                
            }).then( res => {
                setReponse(res.data)
            }).catch( err => {
                setReponse(JSON.stringify(err))
            })
        }
    }

    return(
        <div>
            <Form onSubmit={loginAction}>
                <Form.Group>
                    <Form.Input label = "Change Password" type="text" placeholder="New Password" name = "password" onChange = {(evt) => setPassword(evt.target.value)}/>
                    <Form.Input label = "Change Name" type="text" placeholder="New Name" name = "name" onChange = {(evt) => setName(evt.target.value)}/>
                </Form.Group>
                <Form.Button type = "submit">Submit Password Change!</Form.Button>
            </Form>
            <h1>{response}</h1>
        </div>
    )
}

export default AccountSettings;