import axios from 'axios';
import React, {useState} from 'react';

const Loginform = () => {
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
            <h1>Hello from Log in</h1>
            <form className = "ui fluid form" onSubmit={loginAction}>

                <div className="ui input focus">
                    <input name = "username" type="text" placeholder="Username"  onChange = {(evt) => setUsername(evt.target.value)}/>
                </div>
                <div className="ui input focus">
                    <input name = "password" type="text" placeholder="Password"  onChange = {(evt) => setPassword(evt.target.value)}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            <h1>{response}</h1>
        </div>
    )
}

export default Loginform;