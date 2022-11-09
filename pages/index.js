import Footer from '../components/Footer';
import Body from '../components/Home/Body';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import { AppContext } from '../context/app-context';

export async function getServerSideProps() {
  const id = 1;
  const profileReq = await fetch('http://localhost:3000/api/profile/detail?id=' + id);

  const linkReq = await fetch('http://localhost:3000/api/links');

  const profiles = await profileReq.json();
  const links = await linkReq.json();
  
  return {
    props: {
      profile: profiles.data,
      links: links.data
    } 
  }
}

export default function Home(props) {
  const socialLinks = props.links.filter(link => link.type === 'social');
  const generalLinks = props.links.filter(link => link.type === 'general');
  const marketplaceLinks = props.links.filter(link => link.type === 'marketplace');

  const appContextValue = {
    socialLinks,
    generalLinks,
    marketplaceLinks,
  };

  return (
    <Layout 
      title="Linktree &#8211; Decorunic Furniture Hemat Ruang Minimalis Space Saving" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <Hero profile={props.profile} />
      <AppContext.Provider value={appContextValue}>
        <Header />
        <main id="content">
          <Body />
        </main>
      </AppContext.Provider>
      <Footer />
    </Layout>
  );
}
