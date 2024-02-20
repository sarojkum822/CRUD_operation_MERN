import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {

    // d-flex vh-100 bg-primary justify-content-center align-items-center
    // w-50 bg-white rounded p-3


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate= useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result);
                navigate("/");
            }).catch(err => {
                console.log(err);
            })

    }


    return (
        <>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <h2>Add Items </h2>
                    <form onSubmit={Submit}>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Name">Name</label>
                            <input className='w-100' type="text" placeholder='Enter your Name' required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Email">Email</label>
                            <input className='w-100' type="text" placeholder='Enter your Email' required onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Age">Age</label>
                            <input className='w-100' type="text" placeholder='Enter your Age' required onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <button className=' btn btn-dark'>Add now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUsers