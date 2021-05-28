import React, { useState } from 'react';
import userData from '../../fakeData/user/userData';
import styles from './LoginUser.module.css'
const Login = () => {


    console.log(userData);
   
    const [loggedInInfo, setLoggedInInfo] = useState({
        email: '',
        password: '',
        role: ''
    })
    const handleBlur = (e) => {
        if(e.target.name === 'email'){
            const userNew = {...loggedInInfo}
            userNew['email'] = e.target.value
            setLoggedInInfo(userNew)
            
        }
        if(e.target.name === 'password'){
            const userNew = {...loggedInInfo}
            userNew['password'] = e.target.value
            setLoggedInInfo(userNew)
        }

        
    }
    const handleSubmit = (e) => {
        userData.map(user => {
            if (user.email === loggedInInfo.email){
                console.log(`userNameVerified`);
                if(user.password === loggedInInfo.password){
                    console.log(`password Verified`);
                    loggedInInfo.role = user.type
                }
            }
        })
        console.log(loggedInInfo);
        e.preventDefault()
    }
    
    
    return (
       
        
            <div className={styles.container}>
               
               <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="email" name="email" id="" placeholder="Enter Your Email" required/>
                    <br /><br />
                    <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Enter Your Password" required/>
                    <br /> <br />
                    <button>Login</button>
               </form>
            </div>
       
    );
};

export default Login;