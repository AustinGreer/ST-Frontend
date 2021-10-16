import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Login() {
    const [loginFormValues, setLoginFormValues] = useState({
        username: "",
        password: ""
    })
    const [funMessage, setFunMessage] = useState("")

    const inputChangeHandler = (e) => {
        setLoginFormValues({
            ...loginFormValues,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        setLoginFormValues({
            username: "",
            password: ""
        })

        setFunMessage("Damnit dude, now I have to fill out the form again")
    }

    return (
        <div className="login-wrapper">
            <div className="container">
                <h1>Welcome Back!</h1>
                <p>With the help of Sleep Tracker, you can discover your ideal sleep schedule today.</p>

                {funMessage && <p className="fun-message">{funMessage}</p>}

                <form onSubmit={submitHandler}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        disableUnderline={true}
                        value={loginFormValues.username}
                        onChange={inputChangeHandler}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        disableUnderline={true}
                        value={loginFormValues.password}
                        onChange={inputChangeHandler}
                    />
                    <Button type="submit">Login</Button>
                </form>

                <p>
                    New to Sleep Tracker? <Link to="/signup">Sign up here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
