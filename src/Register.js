import React,{ useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Header from './Header'


function Register(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])

    async function register(){
        let user = {name,email,password};
        console.log(user)

        let result = await fetch('http://127.0.0.1:8000/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
            },
            body :JSON.stringify(user)
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info',JSON.stringify(result));
        navigate('/add')
    }
    return(
        <div>
            <Header />
            <h1>Register Page</h1>
            <div className="col-md-4 m-auto">
                <input type="text" placeholder="Enter name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                <br />

                <input type="text" placeholder="Enter email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                <br />

                <input type="password" placeholder="Enter password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                <br />

                <button className="btn btn-primary" onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Register;
