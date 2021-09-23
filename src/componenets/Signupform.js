import axios from 'axios';
import React, {useState} from 'react';

const Signupform = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retry, setRetry] = useState("")


    const signUpAction = (event) => {
        if(firstName && lastName && username && password && retry && password === retry){
            // valid sign up 
            axios.post("http://localhost:5000/register", {'name':firstName , 'username': username, 'password': password
            }).then( res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }else{
            console.log("not valid")
        }

        event.preventDefault();

    }

    return(
        <div>
            <h1>Hello from Sign up</h1>
            <form className = "ui fluid form" onSubmit={signUpAction}>
                <div className="ui input focus">
                    <input name = "first" type="text" placeholder="First name" onChange = {(evt) => setFirstName(evt.target.value)} />
                </div>
                <div className="ui input focus">
                    <input name = "last" type="text" placeholder="Last name"  onChange = {(evt) => setLastName(evt.target.value)}/>
                </div>
                <div className="ui input focus">
                    <input name = "username" type="text" placeholder="Username"  onChange = {(evt) => setUsername(evt.target.value)}/>
                </div>
                <div className="ui input focus">
                    <input name = "password" type="text" placeholder="Password"  onChange = {(evt) => setPassword(evt.target.value)}/>
                </div>
                <div className="ui input focus">
                    <input type="text" placeholder="Confirm Password"  onChange = {(evt) => setRetry(evt.target.value)}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signupform;