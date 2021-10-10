import axios from 'axios';
// import Captcha  from './Captcha';
import React, {useState, useRef} from 'react';
import Spotifylogin from '../Spotifylogin';
import Captcha from '../Captcha';
import { Form } from 'semantic-ui-react';

const Loginform = () => {
    // const reRef = useRef();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [response, setReponse] = useState("No response yet")


    const loginAction = (event) =>{
        if(username && password){
            axios.post("http://localhost:5000/login", {'username': username, 'password': password
            }).then( res => {
                console.log(res)
                setReponse(res.data)
            }).catch(err => {
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
                <Form.Group widths = "equal"> 
                    <Form.Input label = "Username" type = "text" placeholder = "Username" name = "username" onChange = {(evt) => setUsername(evt.target.value)}/>
                    <Form.Input label = "Password" type = "password" placeholder = "Password" name = "password" onChange = {(evt) => setPassword(evt.target.value)}/>   
                </Form.Group>
                <Form.Button type = "submit">Login!</Form.Button>
            </Form>
            <Captcha/>
            <h1>{response}</h1>
        </div>
    )
}

export default Loginform;