import React, { useState } from 'react';

import'./signup.css';

function App() {


    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        uname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: formData.fname + " " + formData.lname,
                    username: formData.uname,
                    email: formData.email,
                    password: formData.password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                // Handle successful registration (e.g., show a success message, redirect to login page)
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData.error);
                // Handle registration error (e.g., show error message to user)
            }
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            // Handle network errors or other exceptions
        }
    };

    return (
<>
            <form id = "Signup" onSubmit={handleSubmit}>

                <label for="fname"> First Name: </label> <br></br>
                <input type="text" id="fname"  name='fname'  value={formData.fname} onChange={handleChange} ></input><br></br>
                <label for ="lname"> Last Name: </label><br></br>
                <input type= "text" id ="lname" name ='lname'  value={formData.lname} onChange={handleChange} ></input><br></br>

                <label for ="uname"> Username: </label><br></br>
                <input type= "text" id ="uname" name ='uname'  value={formData.uname} onChange={handleChange} ></input><br></br>

                <label for ="email"> Email: </label><br></br>
                <input type= "email" id ="email" name ='email'  value={formData.email} onChange={handleChange} ></input><br></br>

                <label for ="password"> Password: </label><br></br>
                <input type= "password" id ="password" name ='password'  value={formData.password} onChange={handleChange} ></input><br></br>

                <input type="submit" value="Submit"></input>
            </form>

</>
    );
}

export default App