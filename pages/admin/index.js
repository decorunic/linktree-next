import { authorizationPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  await authorizationPage(context);

  return { props: {} }
}

export default function Admin () {
  return (
    <div className="container flex flex-wrap justify-center h-screen items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">Admin</h1>
    </div>
  )
}