import React, { useState } from 'react';
import Router from 'next/router';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Layout from '../../components/Layout';
import DynamicFaIcon from '../../components/DynamicFAIcon';
import Swal from 'sweetalert2';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const { id } = context.query;

  const linkReq = await fetch(`https://decorunic.id/linktree/api/links/detail?id=${id}`, {
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
  const typeOptions = [
    {
      value: 'social',
      label: 'Social Media'
    },
    {
      value: 'general',
      label: 'General'
    },
    {
      value: 'marketplace',
      label: 'Marketplace'
    }
  ];

  const socialIconOptions = [
    {
      value: 'FaFacebook',
      label: 'Facebook'
    },
    {
      value: 'FaTwitter',
      label: 'Twitter'
    },
    {
      value: 'FaInstagram',
      label: 'Instagram'
    },
    {
      value: 'FaYoutube',
      label: 'Youtube'
    },
    {
      value: 'FaLinkedin',
      label: 'Linkedin'
    },
    {
      value: 'FaGithub',
      label: 'Github'
    },
    {
      value: 'FaWhatsapp',
      label: 'Whatsapp'
    },
    {
      value: 'FaTelegram',
      label: 'Telegram'
    },
    {
      value: 'FaDiscord',
      label: 'Discord'
    },
    {
      value: 'FaTiktok',
      label: 'Tiktok'
    },
    {
      value: 'FaPinterest',
      label: 'Pinterest'
    },
    {
      value: 'FaReddit',
      label: 'Reddit'
    },
    {
      value: 'FaSpotify',
      label: 'Spotify'
    },
    {
      value: 'FaTwitch',
      label: 'Twitch'
    },
    {
      value: 'FaMedium',
      label: 'Medium'
    },
    {
      value: 'FaSnapchat',
      label: 'Snapchat'
    },
    {
      value: 'FaEtsy',
      label: 'Etsy'
    },
    {
      value: 'FaLink',
      label: 'Lainnya'
    },
  ];

  const { link } = props;

  const [fields, setFields] = useState({
    name: link.name,
    url: link.url,
    icon: link.icon,
    type: link.type,
    new_tab: link.new_tab
  });

  const [status, setStatus] = useState();

  async function updateHandler(e) {
    e.preventDefault();

    setStatus('loading');

    const { token } = props;

    const update = await fetch(`https://decorunic.id/linktree/api/links/update?id=${link.id}`, {
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

    Swal.fire({
      title: 'Success',
      text: 'Link successfully updated',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if(result.isConfirmed) {
        Router.push('/admin');
      }
    });
  }

  function fieldHandler(e) {
    const name = e.target.getAttribute('name');

    if(name === 'new_tab') {
      setFields({
        ...fields,
        [name]: e.target.checked
      });
    } else {
      setFields({
        ...fields,
        [name]: e.target.value
      });
    }
  }

  return (
    <Layout
      title="Edit Link &lsaquo; Decorunic Linktree"
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/admin"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full md:w-[70%] lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">Edit Link</h1>
            <form
              onSubmit={updateHandler.bind(this)}
              className="flex flex-col mt-10 gap-x-5 gap-y-1"
            >
              <label 
                htmlFor="name"
                >
                  Name
              </label>
              <input
                id="name"
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="Link Name"
                name="name"
                className="border border-gray-300 p-2 rounded mb-4"
                defaultValue={link.name}
                required
              />

              <label 
                htmlFor="url"
                >
                  URL
              </label>
              <input
                id="url"
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="Link URL"
                name="url"
                className="border border-gray-300 p-2 rounded mb-4"
                defaultValue={link.url}
                required
              />

              <label 
                htmlFor="type"
                >
                  Type
              </label>
              <select 
                id="type"
                name="type"
                onChange={fieldHandler.bind(this)}
                className="border border-gray-300 p-2 rounded mb-4"
                required
                defaultValue={link.type}
              >
                {typeOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-x-2 mb-4">
                <input
                  id="new_tab"
                  onChange={fieldHandler.bind(this)}
                  type="checkbox"
                  name="new_tab"
                  className="border border-gray-300 p-2 rounded"
                  defaultChecked={link.new_tab}
                />

                <label
                  htmlFor="new_tab"
                >
                  Open in New Tab
                </label>
              </div>

              <div className={(fields.type !== 'social') ? 'hidden' : 'block' }>
                <label
                  htmlFor="icon"
                  >
                    Icon
                </label>
                <div className="flex flex-wrap gap-2 p-2 mb-4 border-[1px] rounded justify-between">
                  {socialIconOptions.map((option, index) => (
                    <div
                      key={index}
                      className="w-[calc(100%/6-0.5rem)]"
                    >
                      <input
                        onChange={fieldHandler.bind(this)}
                        type="radio"
                        name="icon"
                        id={option.value}
                        value={option.value}
                        className="opacity-0 absolute peer"
                        defaultChecked={option.value === link.icon}
                        required={(fields.type === 'social') ? true : false}
                      />
                      <label
                        htmlFor={option.value}
                        className="flex items-center justify-center cursor-pointer border-2 p-2 rounded text-2xl md:text-3xl peer-checked:border-dark peer-checked:bg-dark peer-checked:text-white hover:bg-dark/80 hover:text-white transition-all duration-150"
                        title={option.label}
                      >
                        <DynamicFaIcon
                          name={option.value}
                        />
                      </label>
                  </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out mb-1 font-semibold">Save Changes</button>
              <button type="button" className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-all duration-200 ease-in-out mb-1" onClick={() => Router.push('/admin')}>Cancel</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}