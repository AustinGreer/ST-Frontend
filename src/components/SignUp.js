import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="signup-wrapper">
            <div className="content-container">
                <h1>Let's Get Started!</h1>
                <p>Sign up today, and let Sleep Tracker assist you in finding your ideal sleep schedule.</p>

                <form>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="first name"
                        disableUnderline={true}
                    />
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="last name"
                        disableUnderline={true}
                    />
                    <Input
                        type="text"
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
                    <Button>Sign Up</Button>
                </form>

                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
