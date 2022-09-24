import Body from '../components/Home/Body';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout 
      title="Linktree" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <Hero />
      <Header />
      <main id="content">
        <Body />
      </main>
    </Layout>
  );
}
