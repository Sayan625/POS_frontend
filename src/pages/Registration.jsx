import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    // Update the active element and highlight 'Registration' in the Navbar
    useEffect(() => {
        // Remove 'active' class from all elements with the class 'active'
        const elements = document.querySelectorAll('.' + 'active');
        elements.forEach(element => {
            element.classList.remove('active');
        });

        // Add 'active' class to the element with the ID 'reg'
        const element = document.getElementById('reg');
        if (element) {
            element.classList.add('active');
        }
    }, []);

    async function HandleSubmit(e){
        e.preventDefault()
        try {
        await axios.post('https://sales-backend-fs9g.onrender.com/api/signup',user)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card p-2" style={{ maxWidth: "576px" }}>
            <form className='' onSubmit={(e)=>HandleSubmit(e)}>
                <div class="mb-3">
                    <label for="exampleInputFisrtName1" class="form-label">Name</label>
                    <input value={user.name} 
                    onChange={(e)=>setUser((prev)=>({...prev,name:e.target.value}))} type="text" class="form-control" id="exampleInputFisrtName1" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input value={user.email} 
                    onChange={(e)=>setUser((prev)=>({...prev,email:e.target.value}))} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input value={user.password} 
                    onChange={(e)=>setUser((prev)=>({...prev,password:e.target.value}))} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
