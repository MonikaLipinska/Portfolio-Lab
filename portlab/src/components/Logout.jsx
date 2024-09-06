import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {

        alert('Wylogowano!');
        navigate('/');
    }, [navigate]);

    return (
        <div>
            <h2>Wylogowano</h2>
        </div>
    );
};

export default Logout;