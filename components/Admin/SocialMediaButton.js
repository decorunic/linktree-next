import DynamicFaIcon from '../DynamicFAIcon';

export default function SocialMediaButton({ socialLinks, deleteHandler, editHandler, copyToClipboardHandler}) {
  
  return (
    <section className="w-full mt-10">
      <h2 className="text-center text-xl font-bold mt-12 mb-5">Social Media</h2>
      <div className="flex flex-wrap mt-5 gap-2 md:gap-3 justify-center">
        { 
          socialLinks.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(100%/3-12px)] lg:w-[calc(100%/4-12px)] text-lg px-5 py-3 border border-primary/40 rounded-full bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
            >
              <a 
                href={item.url.includes('http://') || item.url.includes('https://') ? item.url : '//' + item.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-secondary active:text-secondary/60"
                onClick={copyToClipboardHandler.bind(this, item.url)}
              >
                <DynamicFaIcon
                  name={item.icon}
                  className="text-2xl md:text-3xl"
                />
              </a>
              <h3 className="font-bold text-lg md:text-base">{item.name}</h3>
              <div className="flex gap-1">
                <button
                  onClick={editHandler.bind(this, item.id)}
                  className="bg-primary/30 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-primary/50"
                >
                  <DynamicFaIcon name="FaPen" />
                </button>
                <button
                  onClick={deleteHandler.bind(this, item.id)}
                  className="bg-red-100 text-xs md:text-sm p-2 rounded-full transition-all duration-100 hover:bg-red-200"
                >
                  <DynamicFaIcon name="FaTrash" />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}