import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

const AccountSettings= () => {

    const [password, setPassword] = useState("")
    const [response, setReponse] = useState("No response yet")


    const loginAction = (event) =>{
        if(password){
            axios.post("http://localhost:5000/edit_user", {'password': password
        }).then( res => {
            console.log(res)
            setReponse(res.data)
        }).catch(err => {
            setReponse(err)
        })

            axios.post("http://localhost:5000/edit_user", {'password': password
            }).then( res => {
                console.log(res)
                setReponse(res.data)

            }).catch( err => {
                if(err.message === "Request failed with status code 401"){
                    setReponse("Failed login")
                }
                else{
                    setReponse(JSON.stringify(err))
                }
            })
        }else{
            console.log("not valid")
        }
        event.preventDefault();
    }
    
    
    return(
        <div>
            <Form onSubmit={loginAction}>
                <Form.Group>
                    <Form.Input label = "New_Password" type="text" placeholder="New Password" name = "password" onChange = {(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <Form.Button type = "submit">Submit Password Change!</Form.Button>
            </Form>
            <h1>{response}</h1>
        </div>
    )
}

export default AccountSettings;