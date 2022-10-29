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
  return (
    <Layout 
      title="Linktree &#8211; Admin" 
      desc="Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic"
    >
      <div className="container justify-center items-center my-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center">Appearance</h1>
          <p className="text-center">Coming soon...</p>
        </div>
      </div>
    </Layout>
  )
}