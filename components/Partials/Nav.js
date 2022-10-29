import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ isActiveHamburger }) {
  const router = useRouter();

  return (
    <nav id="nav-menu" className={`${isActiveHamburger ? '' : 'hidden'} absolute py-2 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-black/70 lg:dark:bg-transparent`}>
      <ul className="block lg:flex">
        <li className="mb-1 grup">
          <Link
            href="/admin"
          >
            <span className={router.pathname === '/admin' ? 'cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active' : 'cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary'}>
              Links
            </span>
          </Link>
        </li>
        <li className="mb-1 grup">
          <Link
            href="/admin/appearance"
          >
            <span className={router.pathname === '/admin/appearance' ? 'cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active' : 'cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary'}>
              Appearance
            </span>
          </Link>
        </li>
        <li className="mb-1 grup">
          <Link
            href="/admin/analytics"
          >
            <span className={router.pathname === '/admin/analytics' ? 'cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active' : 'cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary'}>
              Analytics
            </span>
          </Link>
        </li>
        <li className="mb-1 lg:hidden">
          <Link
            href="/auth/logout"
          >
            <span className="cursor-pointer text-base font-semibold mx-6 flex justify-center px-6 py-2 bg-transparent border-[1px] border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-red-600 dark:text-light lg:mx-4">
              Logout
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
