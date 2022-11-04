import React, { useState } from 'react';
import Router from 'next/router';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Layout from '../../components/Layout';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const { id } = context.query;

  const linkReq = await fetch('http://localhost:3000/api/links/detail?id=' + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const res = await linkReq.json();

  // console.log(res);

  return {
    props: {
      token,
      link: res.data
    }
  }
}

export default function Edit(props) {
  const { link } = props;

  const [fields, setFields] = useState({
    name: link.name,
    url: link.url,
    icon: link.icon,
    type: link.type
  });

  const [status, setStatus] = useState();

  async function updateHandler(e) {
    e.preventDefault();

    // return console.log(fields);
    setStatus('loading');

    const { token } = props;

    const update = await fetch('http://localhost:3000/api/links/update?id=' + link.id, {
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
    <Layout
      title="Linktree &#8211; Edit Link"
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/admin"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full">
            <h1 className="text-2xl lg:text-4xl font-bold">Edit Link</h1>
            <form 
              onSubmit={updateHandler.bind(this)}
              className="flex flex-col gap-5"
            >
              <input
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="Link Name"
                name="name"
                defaultValue={link.name}
              />
              <input
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="Link URL"
                name="url"
                defaultValue={link.url}
              />
              <input
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="Link Icon"
                name="icon"
                defaultValue={link.icon}
              />
              <select 
                name="type"
                onChange={fieldHandler.bind(this)}
                defaultValue={link.type}
              >
                <option>- Select Type -</option>
                <option value="general" defaultValue={link.type === 'general' ? true : false}>General</option>
                <option value="social" defaultValue={link.type === 'social' ? true : false}>Social</option>
                <option value="marketplace " defaultValue={link.type === 'marketplace' ? true : false}>Marketplace</option>
              </select>
              <button type="submit">Submit</button>
              {status}
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}