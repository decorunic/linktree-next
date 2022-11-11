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

export default function Analytics() {
  return (
    <Layout 
      title="Linktree &#8211; Analytics" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
      back="/"
    >
      <div className="container justify-center items-center mt-20 mb-10 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center px-4">
          <section className="w-full">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">Analytics</h1>
          </section>
        </div>
      </div>
    </Layout>
  )
}