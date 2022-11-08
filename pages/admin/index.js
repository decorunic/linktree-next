import DynamicFaIcon from '../../components/DynamicFAIcon';
import Layout from '../../components/Layout';
import Router from 'next/router';
import React, { useState } from 'react';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Swal from 'sweetalert2';

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

    const msg = await Swal.fire({
      title: 'Are you sure you want to delete this link?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (msg.isConfirmed) {
      const linksFiltered = links.filter(link => {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
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
    } else {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      );
      return;
    }
  }

  const editHandler = (id, e) => {
    e.preventDefault();

    Router.push('/admin/edit?id=' + id);
  }

  const copyToClipboard = (url, e) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
  
    Swal.fire({
      icon: 'success',
      title: 'URL Copied to clipboard!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <Layout 
      title="Linktree &#8211; Admin" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full text-center">
            <h1 className="text-2xl lg:text-3xl font-bold">Admin</h1>
            <p className="text-lg">Welcome to admin page!</p>
            <button 
              className="mt-5 bg-dark hover:bg-dark/50 text-white font-bold py-4 px-24 rounded-full transition-all duration-200 ease-in-out"
              onClick={() => Router.push('/admin/create')}
            >
              Add New Link
            </button>
          </section>

          <section className="w-full mt-10">
            <h2 className="text-center text-xl font-bold mt-12 mb-5">Social Media</h2>
            <div className="flex flex-wrap mt-5 gap-2 md:gap-3 justify-center">
              { 
                socialLinks.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(100%/3-12px)] lg:w-[calc(100%/4-12px)] text-lg px-5 py-3 border border-primary/40 rounded-full bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
                  >
                    <a 
                      href={item.url}
                      className="cursor-pointer hover:text-secondary active:text-secondary/60"
                      onClick={copyToClipboard.bind(this, item.url)}
                    >
                      <DynamicFaIcon
                        name={item.icon}
                        className="text-2xl md:text-3xl"
                      />
                    </a>
                    <h3 className="font-bold text-lg md:text-base">{item.name}</h3>
                    <div className="flex gap-1">
                      <button
                        onClick={editHandler.bind(this, item.id)}
                        className="bg-primary/30 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                      >
                        <DynamicFaIcon name="FaPen" />
                      </button>
                      <button
                        onClick={deleteHandler.bind(this, item.id)}
                        className="bg-red-100 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                      >
                        <DynamicFaIcon name="FaTrash" />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>

          <section className="w-full mt-10">
            <h2 className="text-center text-xl font-bold mt-12 mb-5">General</h2>
            <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-5 lg:gap-x-8">
              {
                generalLinks.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(50%-2rem)] text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap w-48 md:w-56 lg:w-80">
                        <a 
                          href={item.url}
                          className="text-sm cursor-pointer hover:text-secondary active:text-secondary/60"
                          onClick={copyToClipboard.bind(this, item.url)}
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={editHandler.bind(this, item.id)}
                        className="bg-primary/30 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                      >
                        <DynamicFaIcon name="FaPen" />
                      </button>
                      <button
                        onClick={deleteHandler.bind(this, item.id)}
                        className="bg-red-100 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                      >
                        <DynamicFaIcon name="FaTrash" />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>

          <section className="w-full mt-10">
            <h2 className="text-center text-xl font-bold mt-12 mb-5">Marketplace</h2>
            <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-5 lg:gap-x-8">
              {
                marketplaceLinks.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(50%-2rem)] text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap w-48 md:w-56 lg:w-80">
                        <a 
                          href={item.url}
                          className="text-sm cursor-pointer hover:text-secondary active:text-secondary/60"
                          onClick={copyToClipboard.bind(this, item.url)}
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={editHandler.bind(this, item.id)}
                        className="bg-primary/30 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                      >
                        <DynamicFaIcon name="FaPen" />
                      </button>
                      <button
                        onClick={deleteHandler.bind(this, item.id)}
                        className="bg-red-100 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                      >
                        <DynamicFaIcon name="FaTrash" />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}