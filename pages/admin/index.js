import Layout from '../../components/Layout';
import Router from 'next/router';
import React, { useState } from 'react';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Swal from 'sweetalert2';
import SocialMediaButton from '../../components/Admin/SocialMediaButton';
import GeneralButton from '../../components/Admin/GeneralButton';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const linkReq = await fetch(`http://localhost:3000/linktree/api/links`);
  
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

      const deleteReq = await fetch(`http://localhost:3000/linktree/api/links/delete?id=${id}`, {
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

  const copyToClipboardHandler = (url, e) => {
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

          <SocialMediaButton 
            socialLinks={socialLinks} 
            deleteHandler={deleteHandler} 
            editHandler={editHandler} 
            copyToClipboardHandler={copyToClipboardHandler} 
          />

          <GeneralButton
            generalLinks={generalLinks}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            copyToClipboardHandler={copyToClipboardHandler}
          />

          
        </div>
      </div>
    </Layout>
  )
}