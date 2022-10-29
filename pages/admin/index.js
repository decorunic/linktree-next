import DynamicFaIcon from '../../components/DynamicFAIcon';
import Layout from '../../components/Layout';
import Router from 'next/router';
import React, { useState } from 'react';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Navbar from '../../components/Partials/Navbar';

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
      <Navbar />
      <div className="container justify-center items-center my-10">
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
              <>
                <a
                  key={index} 
                  href={item.url} 
                  className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
                  <DynamicFaIcon name={item.icon} />
                </a>
                <button 
                  onClick={editHandler.bind(this, item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                >
                  <DynamicFaIcon name="FaEdit" />
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-
                  full mr-4"
                  onClick={deleteHandler.bind(this, item.id)}
                >
                  <DynamicFaIcon name="FaTrash" />
                </button>
              </>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">General</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            generalLinks.map((item, index) => (
              <>
                <a 
                  key={index}
                  href={item.url} 
                  className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30"
                >
                  {item.name}
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9">
                  <DynamicFaIcon name="FaEdit" />
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-9"
                  onClick={deleteHandler.bind(this, item.id)}
                >
                  <DynamicFaIcon name="FaTrash" />
                </button>
              </>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">Marketplace</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            marketplaceLinks.map((item, index) => (
              <>
                <a 
                  key={index}
                  href={item.url} 
                  className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30"
                >
                  {item.name}
                </a>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9">
                  <DynamicFaIcon name="FaEdit" />
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-9"
                  onClick={deleteHandler.bind(this, item.id)}
                >
                  <DynamicFaIcon name="FaTrash" />
                </button>
              </>

            ))
          }
        </div>
      </div>
    </Layout>
  )
}