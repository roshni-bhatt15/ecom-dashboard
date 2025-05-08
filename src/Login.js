import Header from './Header'
import React,{ useState,useEffect } from "react";

import {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    async function login(){
        let user = {email,password}
        console.log(user);
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
            },
            body:JSON.stringify(user)
        });

        result = await result.json();
        console.log(result)
        if(result){
            localStorage.setItem('user-info',JSON.stringify(result))
            navigate('/add')
        }
    }
    return(
        <div>
            <Header />
            <h1>Login Page</h1>

            <div className="col-md-4 m-auto">
                <input type="text" placeholder="Enter email" className="form-control" value={email}  
                onChange={(e)=>setEmail(e.target.value)} />
                <br />

                <input type="password" placeholder="Enter password" className="form-control" value={password}
                onChange={(e)=>setPassword(e.target.value)}  />
                <br />

                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;
