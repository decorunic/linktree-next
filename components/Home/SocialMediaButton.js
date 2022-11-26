import { useContext } from 'react';
import { AppContext } from '../../context/app-context';
import DynamicFaIcon from '../DynamicFAIcon';

export default function SocialMediaButton() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap mt-5 gap-2 md:gap-3">
      { 
        context.socialLinks.map((item, index) => (
          <a
            key={index} 
            href={item.url}
            target={item.new_tab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
            <DynamicFaIcon name={item.icon} />
          </a>
        ))
      }

    </div>
  );
}