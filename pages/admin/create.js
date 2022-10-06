import React, { useState } from 'react';
import Router from 'next/router';
import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  return {
    props: {
      token,
    }
  }
}

export default function Create(props) {
  const [fields, setFields] = useState({
    name: '',
    url: '',
    icon: '',
    type: ''
  });

  const [status, setStatus] = useState();

  async function createHandler(e) {
    e.preventDefault();

    setStatus('loading');

    const { token } = props;

    // console.log(fields);

    const create = await fetch('http://localhost:3000/api/links/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(fields)
    });

    const res = await create.json();

    if (res.status !== 'loading') {
      setStatus('success');
      Router.push('/admin');
    }
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
      <h1 className="text-4xl font-bold">Create Link</h1>
      <form 
        onSubmit={createHandler.bind(this)}
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