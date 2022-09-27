import Footer from '../components/Footer';
import Body from '../components/Home/Body';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import { AppContext } from '../context/app-context';

import { socialMediaData, generalData, marketplaceData } from './api/data';

const appContextValue = {
  socialMediaData,
  generalData,
  marketplaceData,
};

export default function Home() {
  return (
    <Layout 
      title="Linktree &#8211; Decorunic Furniture Hemat Ruang Minimalis Space Saving" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <Hero />
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
