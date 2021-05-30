import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import './LoginUser.css';
import { userLogin } from '../../store/actions/UserActions';
import { useHistory, useLocation } from 'react-router-dom';

const LoginUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = async (data) => {
        dispatch(userLogin(data));
    }

    return (
        <div className="full">
            <div className="Logincontainer">
                <div className="logincard">
                    <h1 className="card-title">Sign In Here!</h1>
                    <small className="card-subtitle">Enter your credentials and get access</small>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-form">
                        <label htmlFor="username">Email</label>
                        <div className="card-input-container username">
                            <input {...register("email", { required: true })} type="email" placeholder="Enter your email" id="email" />
                            {errors.email && <span className="text-danger">Email is required</span>}
                        </div>
                        <label htmlFor="password">Password</label>
                        <div className="card-input-container password">
                            <input {...register("password", { required: true })} type="password" placeholder="Enter your password" id="password" />
                            {errors.password && <span className="text-danger">Password is required</span>}
                        </div>
                        <button className="card-button">Sign In</button>
                        {/* <small className="card-forgot-password">Forgot your passwrod</small> */}
                    </form>
                </div>
            </div>
        </div>


    );
};

export default LoginUser;