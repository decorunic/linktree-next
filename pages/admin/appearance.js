import Layout from '../../components/Layout';
import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  const { token } = await authorizationPage(context);

  return {
    props: {
      token,
    }
  }
}

export default function Appearance() {

  async function updateHandler(e) {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/profile/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        logo: e.target.logo.value,
        favicon: e.target.favicon.value,
        footer: e.target.footer.value,
      })
    });

    const data = await res.json();

    if (data.status === 'success') {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: data.message,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message,
      });
    }
  }

  return (
    <Layout 
      title="Linktree &#8211; Admin" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full  md:w-[70%] lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">Profile</h1>
            {/* <p className="text-lg">Coming soon...</p> */}
            <form
              onSubmit={updateHandler.bind(this)}
              className="flex flex-col mt-10 gap-x-5 gap-y-1"
            >
              <label
                htmlFor="hero"
                className="cursor-pointer group relative overflow-hidden w-full h-[30vh] md:h-[40vh] rounded"
              >
                <div className="bg-dark w-full h-full absolute z-[1] opacity-20"></div>
                <video
                  className="w-full h-full object-cover object-center absolute top-0 left-0"
                  autoPlay
                  loop
                  muted
                >
                  <source src="/video/hero.mp4" type="video/mp4" />
                </video>
              </label>
              <input
                id="hero"
                name="hero"
                type="file"
                className="hidden"
              />
              <div className="relative z-10 mb-20 lg:mb-24">
                <div className="absolute -top-16 flex flex-col items-center w-full text-center md:-top-24 lg:-top-28">
                  <div className="flex justify-center mb-5">
                    <label
                      htmlFor="logo"
                      className="cursor-pointer group rounded-full relative overflow-hidden shadow-lg shadow-black/20"
                    >
                      <div className="absolute inset-0 bg-primary/75 flex items-center justify-center text-dark text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                        Change
                      </div>
                      <picture>
                        <img className="rounded-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] object-cover" src="/img/logo.webp" alt="logo decorunic" />
                      </picture>
                    </label>
                    <input
                      id="logo"
                      name="logo"
                      type="file"
                      className="hidden"
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
                  type="text" 
                  placeholder="e.g. Decorunic Linktree"
                  name="title"
                  className="border border-gray-300 p-2 rounded mb-4"
                />

              <label 
                htmlFor="bio"
                >
                  Bio
              </label>
              <input
                id="bio"
                type="text"
                placeholder="e.g. Brand Furniture Hemat Ruang Minimalis Space Saving"
                name="bio"
                className="border border-gray-300 p-2 rounded mb-4"
              />
              <button type="submit" className="bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out mb-1 font-semibold">Save Changes</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}