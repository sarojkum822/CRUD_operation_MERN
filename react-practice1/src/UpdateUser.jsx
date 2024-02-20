import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    }, []);


    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/" + id, { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            }).catch(err => {
                console.log(err);
            })
    }



    return (
        <>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <h2>Update Items</h2>
                    <form onSubmit={Update}>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Name">Name</label>
                            <input className='w-100' type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Email">Email</label>
                            <input className='w-100' type="text" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className='justify-content-center p-2'>
                            <label htmlFor="Age">Age</label>
                            <input className='w-100' type="text" placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <button className=' btn btn-dark'>Update now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateUser