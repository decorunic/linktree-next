import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function Hero() {
  const context = useContext(AppContext);
  const profile = context.profile;

  return (
    <section id="hero">
        <div className="w-full h-[30vh] relative md:h-[50vh]">
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