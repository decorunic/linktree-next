import Link from 'next/link';
import { useState, useEffect } from 'react';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import { FaChevronLeft } from 'react-icons/fa';
import Cookie from 'js-cookie';
import Router from 'next/router';
import Swal from 'sweetalert2';
import LogoutButton from '../LogoutButton';

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

    Swal.fire({
      title: 'Are you sure want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookie.remove('token');
        Router.push('/login');
      }
    });
    
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
                  logoutHandler={logoutHandler}
                />
              </div>
            </div>
            <div className="mb-1 hidden lg:block">
              <LogoutButton logoutHandler={logoutHandler} />
            </div>
          </div>
        </div>
      </header>
  );
}