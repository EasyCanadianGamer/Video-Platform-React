import'./Login.css';
import React, { useState } from 'react';

function Login() {

    const [credentials, setCredentials] = useState({
        uname: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: credentials.uname,
                    password: credentials.password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                // Store the token in localStorage
                localStorage.setItem('token', data.token);
                // Redirect to a protected route or update app state
                // For example: window.location.href = '/dashboard';
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Login failed');
            }
        } catch (error) {
            console.error('There was an error logging in:', error);
            setError('An unexpected error occurred');
        }
    };
    return (
<>
<h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form id="Login" onSubmit={handleSubmit}>
                <label htmlFor="uname">Username:</label><br />
                <input 
                    type="text" 
                    id="uname" 
                    name="uname" 
                    value={credentials.uname}
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={credentials.password}
                    onChange={handleChange}
                    required
                /><br />

                <input type="submit" value="Submit" />
            </form>

</>
    );
}

export default Login