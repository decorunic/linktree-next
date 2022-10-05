import { logout } from '../../middlewares/authorizationPage';

export async function getServerSideProps(context) {
  await logout(context);

  return { props: {} }
}

export default function Logout() {

  return <div></div>;
}