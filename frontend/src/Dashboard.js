
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/dashboard', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setContent(res.data.message);
      } catch (err) {
        alert('Access denied');
      }
    };
    fetchData();
  }, []);

  return <h1>{content}</h1>;
};

export default Dashboard;
