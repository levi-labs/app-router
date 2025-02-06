'use client';
import Alert from '@/components/alert';
import React, { useState } from 'react';

export default function AdminDashboard() {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const revalidate = async () => {
    setAlertMessage('');
    setAlert(false);
    const response = await fetch('/api/revalidate?tag=product&secret=abc123', {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('response', response.json);

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAlertMessage(data.message);
        setAlert(true);
      })
      .catch((error) => {
        console.error(error);
        setAlertMessage(error.message);
        setAlert(true);
      });
  };
  return (
    <div className='w-full flex flex-col items-center p-5 box-sizing-border-box'>
      <h1>Admin Dashboard</h1>
      {alert && <Alert message={alertMessage} />}
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={revalidate}
      >
        Revalidate
      </button>
    </div>
  );
}
