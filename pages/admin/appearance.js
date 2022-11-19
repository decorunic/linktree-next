import Layout from '../../components/Layout';
import { authorizationPage } from '../../middlewares/authorizationPage';
import Router from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  const id = 1;

  const profileReq = await fetch('https://decorunic.id/linktree/api/profile/detail?id=' + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const res = await profileReq.json();

  return {
    props: {
      token,
      profile: res.data
    }
  }
}

export default function Appearance(props) {
  const { profile } = props;
  // const [logo, setLogo] = useState(null);
  // const [createObjectURL, setCreateObjectURL] = useState(null);

  const [fields, setFields] = useState({
    title: profile.title,
    bio: profile.bio,
    logo: profile.logo,
    hero: profile.hero
  });

  async function updateHandler(e) {
    e.preventDefault();

    const { token } = props;

    const update = await fetch('https://decorunic.id/linktree/api/profile/update?id=' + profile.id, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    });

    if (!update.ok) return;

    const res = await update.json();

    Swal.fire({
      title: 'Success',
      text: 'Profile successfully updated',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Router.replace('/admin/appearance');
      }
    });
  }

  function fieldHandler(e) {
    const name = e.target.getAttribute('name');

    
    if (e.target.files && e.target.files[0]) {
      previewImage(e);
    }

    setFields({
      ...fields,
      [name]: e.target.value
    });
  }

  function previewImage(e) {
    const i = e.target.files[0];

    setLogo(i);
    setCreateObjectURL(URL.createObjectURL(i));
  }

  return (
    <Layout 
      title="Linktree &#8211; Appearance" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full  md:w-[70%] lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">Profile</h1>
            <form
              onSubmit={updateHandler.bind(this)}
              className="flex flex-col mt-10 gap-x-5 gap-y-1"
            >
              <label
                htmlFor="hero"
                className="group relative overflow-hidden w-full h-[30vh] md:h-[40vh] rounded"
              >
                <div className="bg-dark w-full h-full absolute z-[1] opacity-20"></div>
                <picture
                  className="w-full h-full object-cover absolute top-0 left-0"
                >
                  <img 
                    src={`/img/${profile.hero}`} 
                    alt={`Hero ${profile.title}`}
                    className="w-full h-full object-cover object-center" 
                  />
                </picture>
              </label>
              <input
                id="old_hero"
                name="old_hero"
                type="hidden"
                defaultValue={profile.hero}
              />
              <input
                id="hero"
                onChange={fieldHandler.bind(this)}
                name="hero"
                type="file"
                className="hidden"
                accept="image/*"
                disabled
              />
              <div className="relative z-10 mb-20 lg:mb-24">
                <div className="absolute -top-16 flex flex-col items-center w-full text-center md:-top-24 lg:-top-28">
                  <div className="flex justify-center mb-5">
                    <label
                      htmlFor="logo"
                      className="group rounded-full relative overflow-hidden shadow-lg shadow-black/20 bg-white"
                    >
                      {/* <div className="absolute inset-0 bg-primary/75 flex items-center justify-center text-dark text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                        Change
                      </div> */}
                      <picture>
                        <img 
                          className="rounded-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] aspect-square object-cover" 
                          // src={(logo ? createObjectURL : `/img/${profile.logo}`)}
                          src={`/img/${profile.logo}`}
                          alt={`Logo ${profile.title}`} />
                      </picture>
                    </label>
                    <input
                      id="old_logo"
                      name="old_logo"
                      type="hidden"
                      defaultValue={profile.logo}
                    />
                    <input
                      id="logo"
                      onChange={fieldHandler.bind(this)}
                      name="logo"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <label 
                htmlFor="title"
                >
                  Title
                </label>
                <input
                  id="title"
                  onChange={fieldHandler.bind(this)}
                  type="text" 
                  placeholder="e.g. Decorunic Linktree"
                  name="title"
                  className="border border-gray-300 p-2 rounded mb-4"
                  defaultValue={profile.title}
                  required
                />

              <label 
                htmlFor="bio"
                >
                  Bio
              </label>
              <input
                id="bio"
                onChange={fieldHandler.bind(this)}
                type="text"
                placeholder="e.g. Brand Furniture Hemat Ruang Minimalis Space Saving"
                name="bio"
                className="border border-gray-300 p-2 rounded mb-4"
                defaultValue={profile.bio}
                required
              />
              <button type="submit" className="bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out mb-1 font-semibold">Save Changes</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}