import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';


const UpdateName = () => {

    const [name, setName] = useState("")
    const [response, setReponse] = useState("")

    const submitAction = () => {
        if(name){
            axios({
                method: "post",
                data: {
                    name: name
                },
                withCredentials: true,
                url:"http://localhost:5000/edit_name"
                
            }).then( res => {
                setReponse(res.data)
            }).catch( err => {
                setReponse(JSON.stringify(err))
            })
        }
        else{
            setReponse("No Name!")
        }
    }

    return(
        <div>
            <h1>Update Name</h1>
            <Form onSubmit={submitAction}>
                <Form.Group>
                    <Form.Input label = "Change Name" type="text" placeholder="New Name" name = "name" onChange = {(evt) => setName(evt.target.value)}/>
                </Form.Group>
                <Form.Button type = "submit">Submit Name Change!</Form.Button>
            </Form>
            <h1>{response}</h1>
        </div>
    )
}

export default UpdateName;