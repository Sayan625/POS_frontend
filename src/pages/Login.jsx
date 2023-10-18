import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credential, setCredential] = useState({
        email: "",
        password: ""
    })
    // update the active element and highlight 'Login' in the Navbar
    useEffect(() => {
        // Remove 'active' className from all elements with the className 'active'
        const elements = document.querySelectorAll('.' + 'active');
        elements.forEach(element => {
            element.classList.remove('active');
        });

        // Add 'active' className to the element with the ID 'login'
        const element = document.getElementById('login');
        if (element) {
            element.classList.add('active');
        }
    }, []);

    const navigate = useNavigate();

    // Function to handle the login process
    async function HandleLogin(e) {
        e.preventDefault()
        try {
            const resp = await axios.post('https://sales-backend-fs9g.onrender.com/api/signin', credential)
            const { email, createdAt, updatedAt, ...data } = resp.data
            console.log(resp.data)
            if (data._id) {
                localStorage.setItem('user', JSON.stringify(data));
                // Navigate to the 'All Sales' page after successful login
                navigate('/');
    
            }
            
        } catch (error) {
            
        }

    }

    return (
        <div className="card p-2" style={{ maxWidth: "500px" }}>
            <form className='' onSubmit={(e) => HandleLogin(e)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={credential.email}
                        onChange={(e) => setCredential((prev) => ({ ...prev, email: e.target.value }))}
                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input value={credential.password}
                        onChange={(e) => setCredential((prev) => ({ ...prev, password: e.target.value }))}
                        type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default Login;
