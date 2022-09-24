import Headers from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout 
      title="Linktree" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <Hero />
      <Headers />
    </Layout>
  );
}
