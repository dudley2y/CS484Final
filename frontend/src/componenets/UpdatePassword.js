import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';


const UpdatePassword = () => {

    const [password, setPassword] = useState("")
    const [response, setReponse] = useState("")

    const submitAction = () => {
        if(password){
            axios({
                method: "post",
                data: {
                    password: password
                },
                withCredentials: true,
                url:"http://localhost:5000/edit_password"
                
            }).then( res => {
                setReponse(res.data)
            }).catch( err => {
                setReponse(JSON.stringify(err))
            })
        }
        else{
            setReponse("No password!")
        }
    }

    return(
        <div>
            <h1>Update Password</h1>
            <Form onSubmit={submitAction}>
                <Form.Group>
                    <Form.Input label = "Change Password" type="text" placeholder="New Password" name = "password" onChange = {(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <Form.Button type = "submit">Submit Password Change!</Form.Button>
            </Form>
            <h1>{response}</h1>
        </div>
    )
}

export default UpdatePassword;