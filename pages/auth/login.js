import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';

export async function getServerSideProps(context) {
  const allCookies = cookies(context);

  if (allCookies.token) {
      return context.res.writeHead(302, 
      { Location: '/admin' 
    }).end();
  }

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
    
    const loginReq =  await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(fields)
      });

      if(!loginReq.ok) return;

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
          <input type="email" name="email" id="email" className="border border-gray-300 p-2 rounded mb-4" onChange={fieldHandler.bind(this)}/>

          <label htmlFor="password" className="mb-2">Password</label>
          <input type="password" name="password" id="password" className="border border-gray-300 p-2 rounded mb-4" onChange={fieldHandler.bind(this)} />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </div>
      </form>
    </div>
  )
}