import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { unauthorizedPage } from '../../middlewares/authorizationPage';
import Swal from 'sweetalert2';

export async function getServerSideProps(context) {
  await unauthorizedPage(context);

  return { props: {} };
}

export default function Login() {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({
    message: ''
  });


  async function loginHandler(e) {
    e.preventDefault();
    
    const loginReq =  await fetch('https://decorunic.id/linktree/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(fields)
      });

      if(!loginReq.ok) {
        Swal.fire({
          title: 'Error',
          text: 'Email or password is incorrect',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return;
      }

      const loginRes = await loginReq.json();
      setStatus({
        message: loginRes.message
      });

      Cookies.set('token', loginRes.token);

      Router.push('/admin');
  }

  function fieldHandler(e) {
    const name = e.target.getAttribute('name');

    setFields({
      ...fields,
      [name]: e.target.value
    })
  }

  return (
    <div className="container flex flex-wrap justify-center h-screen items-center">
      <form onSubmit={loginHandler.bind(this)} className="w-full max-w-sm">
        <h1 className="text-4xl font-bold mb-10 text-center">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="border border-gray-300 p-2 rounded mb-4" 
            onChange={fieldHandler.bind(this)}
            required
          />
          
          <label htmlFor="password" className="mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="border border-gray-300 p-2 rounded mb-4" 
            onChange={fieldHandler.bind(this)}
            required
          />
          <button type="submit" className="bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out">Login</button>
        </div>
      </form>
    </div>
  )
}