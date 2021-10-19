import React, { useEffect, useState } from 'react';

const GetServiceDetail = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/isratbiswas/json-file/main/_redirects')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return users;
};

export default GetServiceDetail;