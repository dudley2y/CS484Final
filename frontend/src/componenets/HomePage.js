import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Dropdown, Menu } from 'semantic-ui-react';
import axios from 'axios'


const HomePage= () => {
    const history = useHistory();

    const redirectSettings = () => {
        history.push("./account")
    }

    const logout = () => {
        axios({
            method: "post",
            withCredentials: true,
            url:"http://localhost:5000/logout"
        }).then( res => {
            if(res.data == "success"){
                history.push("/")
            }
        })
    }

    const [user, setUser] = useState("") 
    
    useEffect( () => {
        axios({
            method: "post",
            withCredentials: true,
            url:"http://localhost:5000/user"
        }).then( res => {
            if(res.data == "Cookie is invalid"){
                history.push('/')
            }
            console.log(res)
            setUser(res.data)
        })
    }, [])

    const options = [
        { key: 1, text: 'Settings', value: 1, icon: 'settings', onClick: redirectSettings},
        { key: 2, text: 'Logout', value: 2, icon: 'log out', onClick: logout}, 
      ]

    return(
        <div>
            <Menu>
                <Menu.Item header> 
                    <h1>Welcome to our App {user.name}</h1>
                </Menu.Item>
                <Menu.Item position = "right">
                    <Dropdown text = "Account Info" options = {options} simple item />
                </Menu.Item> 
            </Menu>
        </div>
    )
}

export default HomePage;