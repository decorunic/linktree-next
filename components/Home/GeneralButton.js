import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function GeneralButton() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-wrap justify-center pt-3 gap-5 md:pt-0 md:gap-y-5 md:gap-x-10 lg:gap-x-14">
      {
        context.generalLinks.map((item, index) => (
          <a 
            key={index} 
            href={item.url.includes('http://') || item.url.includes('https://') ? item.url : '//' + item.url} 
            target={item.new_tab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30 umami--click--${item.name.replace(/\s/g, '-')}-button-${item.id}`}>
            {item.name}
          </a>
        ))
      }
    </div>
  );
}