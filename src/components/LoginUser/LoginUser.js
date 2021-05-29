import React, { useState } from 'react';
import userData from '../../fakeData/user/userData';

import './LoginUser.css';

const LoginUser = () => {


    console.log(userData);

    const [loggedInInfo, setLoggedInInfo] = useState({
        email: '',
        password: '',
        role: ''
    })
    const handleBlur = (e) => {
        if (e.target.id === 'email') {
            const userNew = { ...loggedInInfo }
            userNew['email'] = e.target.value
            setLoggedInInfo(userNew)

        }
        if (e.target.id === 'password') {
            const userNew = { ...loggedInInfo }
            userNew['password'] = e.target.value
            setLoggedInInfo(userNew)
        }


    }
    const handleSubmit = (e) => {
        userData.map(user => {
            if (user.email === loggedInInfo.email) {
                console.log(`userNameVerified`);
                if (user.password === loggedInInfo.password) {
                    console.log(`password Verified`);
                    loggedInInfo.role = user.type
                }
            }
        })
        console.log(loggedInInfo);
        e.preventDefault()
    }


    return (


        <div class="Logincontainer">
            <div class="logincard">
                <h1 class="card-title">Hello Again!</h1>
                <small class="card-subtitle">Enter your credentials and get access</small>
                <form onSubmit={handleSubmit} class="card-form">
                    <label for="username">Username</label>
                    <div class="card-input-container username">
                        <input onBlur={handleBlur} type="text" placeholder="Enter your username" id="email" />

                    </div>
                    <label for="password">Password</label>
                    <div class="card-input-container password">
                        <input onBlur={handleBlur} type="password" placeholder="Enter your password" id="password" />
                    </div>
                    <button class="card-button">Sign In</button>
                    <small class="card-forgot-password">Forgot your passwrod ? <a>Reset Password</a></small>
                </form>
            </div>
        </div>


    );
};

export default LoginUser;