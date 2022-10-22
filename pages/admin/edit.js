import React, { useState } from 'react';
import Router from 'next/router';
import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const { id } = context.query;

  // console.log(id);
  const linkReq = await fetch('http://localhost:3000/api/links/detail?id=' + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const res = await linkReq.json();

  console.log(res);

  return {
    props: {
      token,
    }
  }
}

export default function Edit(props) {
  const [fields, setFields] = useState({
    name: '',
    url: '',
    icon: '',
    type: ''
  });

  const [status, setStatus] = useState();

  async function updateHandler(e) {
    e.preventDefault();

    setStatus('loading');

    const { token } = props;

    const update = await fetch('http://localhost:3000/api/links/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(fields)
    });

    if(!update.ok) return setStatus('error');
      
    const res = await update.json();

    setStatus('success');

    Router.push('/admin');

  }

  function fieldHandler(e) {
    const name = e.target.getAttribute('name');

    setFields({
      ...fields,
      [name]: e.target.value
    });
  }

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Edit Link</h1>
      <form 
        onSubmit={updateHandler.bind(this)}
        className="flex flex-col gap-5"
      >
        <input
          onChange={fieldHandler.bind(this)}
          type="text"
          placeholder="Link Name"
          name="name"
        />
        <input
          onChange={fieldHandler.bind(this)}
          type="text"
          placeholder="Link URL"
          name="url"
        />
        <input
          onChange={fieldHandler.bind(this)}
          type="text"
          placeholder="Link Icon"
          name="icon"
        />
        <select 
          name="type"
          onChange={fieldHandler.bind(this)}
        >
          <option>- Select Type -</option>
          <option value="general">General</option>
          <option value="social">Social Media</option>
          <option value="marketplace">Marketplace</option>
        </select>
        <button type="submit">Submit</button>
        {status}
      </form>
    </div>
  );
}