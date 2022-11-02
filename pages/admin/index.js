import DynamicFaIcon from '../../components/DynamicFAIcon';
import Layout from '../../components/Layout';
import Router from 'next/router';
import React, { useState } from 'react';
import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const linkReq = await fetch('http://localhost:3000/api/links');
  
  const links = await linkReq.json();

  return {
    props: {
      links: links.data,
      token,
    }
  }
}

export default function Admin(props) {
  const [links, setLinks] = useState(props.links);

  const socialLinks = links.filter(link => link.type === 'social');
  const generalLinks = links.filter(link => link.type === 'general');
  const marketplaceLinks = links.filter(link => link.type === 'marketplace');

  
  async function deleteHandler(id, e) {
    e.preventDefault();

    const msg = confirm('Are you sure?');

    if (msg) {
      const linksFiltered = links.filter(link => {
        return link.id !== id && link;
      });

      setLinks(linksFiltered);

      const deleteReq = await fetch('http://localhost:3000/api/links/delete?id=' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + props.token
        }
      });

      const res = await deleteReq.json();

      if (res.status === 'success') {
        Router.push('/admin');
      }
    }
  }

  function editHandler(id, e) {
    e.preventDefault();

    Router.push('/admin/edit?id=' + id);
  }

  return (
    <Layout 
      title="Linktree &#8211; Admin" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Admin</h1>
          <p className="text-lg">Welcome to admin page!</p>
        </div>

        {/* add new link button*/}
        <div className="flex flex-col items-center justify-center w-full h-full mt-10">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full"
            onClick={() => Router.push('/admin/create')}
          >
            Add New Link
          </button>
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">Social Media</h2>
        <div className="flex flex-wrap mt-5 gap-2 md:gap-3 justify-center">
          { 
            socialLinks.map((item, index) => (
              <div 
                key={index}
                className="w-1/2 md:w-[calc((100%/5)-2.5rem)] lg:w-[calc((100%/4)-3.5rem)] text-lg px-5 py-3 border border-primary/40 rounded-full bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
              >
                <div className="flex items-center justify-between gap-2">
                  <DynamicFaIcon
                    icon={item.icon}
                    className="text-2xl md:text-3xl"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={editHandler.bind(this, item.id)}
                      className="bg-primary/30 text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                    >
                      <DynamicFaIcon name="FaPen" />
                    </button>
                    <button
                      onClick={deleteHandler.bind(this, item.id)}
                      className="bg-red-100 text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                    >
                      <DynamicFaIcon name="FaTrash" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">General</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            generalLinks.map((item, index) => (
              <div 
                key={index}
                className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm">{item.url}</p>
                  </div>
                  <div className="flex items-end justify-center ml-auto gap-2">
                    <button
                      onClick={editHandler.bind(this, item.id)}
                      className="bg-primary/30 text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                    >
                      <DynamicFaIcon name="FaPen" />
                    </button>
                    <button
                      onClick={deleteHandler.bind(this, item.id)}
                      className="bg-red-100 text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                    >
                      <DynamicFaIcon name="FaTrash" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">Marketplace</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            marketplaceLinks.map((item, index) => (
              <div 
                key={index}
                className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
              >
                <div className="flex items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm">{item.url}</p>
                  </div>
                  <div className="flex items-end justify-center ml-auto gap-2">
                    <button
                      onClick={editHandler.bind(this, item.id)}
                      className="bg-primary/30 text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                    >
                      <DynamicFaIcon name="FaPen" />
                    </button>
                    <button
                      onClick={deleteHandler.bind(this, item.id)}
                      className="bg-red-100 text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                    >
                      <DynamicFaIcon name="FaTrash" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}