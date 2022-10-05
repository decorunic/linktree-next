import DynamicFaIcon from '../../components/DynamicFAIcon';
import Layout from '../../components/Layout';
import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  await authorizationPage(context);

  const linkReq = await fetch('http://localhost:3000/api/links');
  
  const links = await linkReq.json();

  return {
    props: {
      links: links.data
    }
  }
}

export default function Admin(props) {
  const socialLinks = props.links.filter(link => link.type === 'social');
  const generalLinks = props.links.filter(link => link.type === 'general');
  const marketplaceLinks = props.links.filter(link => link.type === 'marketplace');

  return (
    <Layout 
      title="Linktree &#8211; Admin" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <div className="container justify-center items-center my-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Admin</h1>
          <p className="text-lg">Welcome to admin page</p>
        </div>

        {/* add new link button*/}
        <div className="flex flex-col items-center justify-center w-full h-full mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full">
            Add New Link
          </button>
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">Social Media</h2>
        <div className="flex flex-wrap mt-5 gap-2 md:gap-3 justify-center">
          { 
            socialLinks.map((item, index) => (
              <a
                key={index} 
                href={item.url} 
                className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
                <DynamicFaIcon name={item.icon} />
              </a>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">General</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            generalLinks.map((item, index) => (
              <a 
                key={index}
                href={item.url} 
                className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30">
                {item.name}
                </a>
            ))
          }
        </div>
        <h2 className="text-center text-xl font-bold mt-12 mb-5">Marketplace</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
          {
            marketplaceLinks.map((item, index) => (
              <a 
                key={index}
                href={item.url} 
                className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30">
                {item.name}
                </a>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}