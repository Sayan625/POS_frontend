import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    // Check if a user is logged in by checking the "user" key in the local storage
    const loggedIn = JSON.parse(localStorage.getItem('user'));

    // Function to handle logout
    function HandleLogout() {
        // Set "user" in local storage to indicate the user is no longer logged in
        localStorage.clear();
        // Navigate to the login page after logging out
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light mb-3">
            <Link className="navbar-brand ms-2" to="/">{loggedIn? loggedIn.name: 'User'}</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" id='allsale' to="/">All Sales</Link >
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id='topsale' to="/top-sale">Daily Report</Link >
                    </li>
                    {!loggedIn && (
                        // Display login and register links if the user is not logged in
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" id='login' to="/login">Login</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='reg' to="/reg">Register</Link >
                            </li>
                        </>
                    )}
                    {loggedIn && (
                        // Display logout link if the user is logged in
                        <li className="nav-item" onClick={() => HandleLogout()}>
                            <Link className="nav-link" to="/login">Logout</Link >
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
