import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context';
import DynamicFaIcon from '../DynamicFAIcon';
import cookies from 'next-cookies';

export default function Hero() {
  const context = useContext(AppContext);
  const profile = context.profile;
  const allCookies = cookies(context);

  return (
    <section id="hero">
        <div className="w-full h-[30vh] relative md:h-[50vh]">
          {
            (allCookies.token) && (
              <Link href="./admin">
                <div className="cursor-pointer absolute top-3 right-3 z-[2] bg-white py-2 px-5 rounded-full shadow font-semibold hover:shadow-white transition-all duration-200 ease-out flex items-center gap-1">
                  Go to Admin <DynamicFaIcon name="FaChevronRight" /> 
                </div>
              </Link>
            )
          }
          <div className="bg-dark w-full h-full absolute z-[1] opacity-20"></div>
          <picture
            className="w-full h-full object-cover absolute top-0 left-0"
          >
            <img 
              src={`/linktree/img/${profile.hero}`} 
              alt="Hero"
              className="w-full h-full object-cover object-center" 
            />
          </picture>
        </div>
    </section>
  );
}