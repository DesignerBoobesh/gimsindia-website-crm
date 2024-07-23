// src/components/HomePage.js

import React, { useEffect, useState } from 'react';
import axios from '../axios';

const HomePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/users/');
            setUsers(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to GIMSINDIA</h1>
            <p>Product Showcase will be here</p>
            <h2>Users:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
