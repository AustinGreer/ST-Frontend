import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Login() {
    return (
        <div className="login-wrapper">
            <div className="container">
                <h1>Welcome Back</h1>
                <p>With the help of Sleep Tracker, you can discover your ideal sleep schedule today!</p>

                <form>
                    <Input
                        type="text"
                        className="login-input"
                        name="username"
                        placeholder="username"
                        disableUnderline={true}
                    />
                    <Input
                        type="password"
                        className="login-input"
                        name="password"
                        placeholder="password"
                        disableUnderline={true}
                    />
                    <Button>Login</Button>
                </form>

                <p>
                    New to Sleep Tracker? <Link to="/signup">Sign up here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
