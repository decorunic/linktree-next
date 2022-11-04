import Link from 'next/link';
import { useState, useEffect } from 'react';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import { FaChevronLeft } from 'react-icons/fa';
import Cookie from 'js-cookie';
import Router from 'next/router';

export default function Navbar(props) {

  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('#header-admin');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };
  }, []);

  const onClickHamburgerHandler = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };

  const logoutHandler = (e) => {
    e.preventDefault();

    if(confirm('Are you sure?')) {
      Cookie.remove('token');
      Router.push('/auth/login');
    }
    
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-white border-b-[1px] shadow-sm py-2 lg:p-0" id="header-admin">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="flex">
              <div className="px-4 flex items-center">
                <Link href={props.back}>
                  <div className="flex items-center cursor-pointer p-2 font-bold text-xl rounded-full transition-all duration-200 bg-primary/30 hover:bg-primary/40">
                    <FaChevronLeft />
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-center px-4 lg:flex-row-reverse">
                <HamburgerButton
                  isActiveHamburger={isActiveHamburger}
                  onClickHamburger={onClickHamburgerHandler}
                />
                <Nav
                  isActiveHamburger={isActiveHamburger}
                />
              </div>
            </div>
            <div className="mb-1 hidden lg:block">
              <button
                className=" text-base font-semibold mx-6 flex px-6 py-2 bg-transparent border-[1px] border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-red-600 dark:text-light lg:mx-4"
                type="button"
                onClick={logoutHandler.bind(this)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}