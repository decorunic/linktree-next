import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function SocialMediaButton() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap mt-5 gap-2 md:gap-3">
      { 
        context.socialMediaData.map((item, index) => (
          <a
            key={index} 
            href={item.url} 
            className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
            {item.icon}
          </a>
        ))
      }

    </div>
  );
}