import Footer from '../components/Footer';
import Body from '../components/Home/Body';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import { AppContext } from '../context/app-context';

export async function getServerSideProps() {
  const id = 1;
  const profileReq = await fetch('/api/profile/detail?id=' + id);

  const linkReq = await fetch('/api/links');

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
  const { profile, links } = props;

  const socialLinks = links.filter(link => link.type === 'social');
  const generalLinks = links.filter(link => link.type === 'general');
  const marketplaceLinks = links.filter(link => link.type === 'marketplace');

  const appContextValue = {
    profile,
    socialLinks,
    generalLinks,
    marketplaceLinks,
  };

  return (
    <Layout 
      title="Linktree &#8211; Decorunic Furniture Hemat Ruang Minimalis Space Saving" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <AppContext.Provider value={appContextValue}>
        <Hero />
        <Header />
        <main id="content">
          <Body />
        </main>
      </AppContext.Provider>
      <Footer />
    </Layout>
  );
}
