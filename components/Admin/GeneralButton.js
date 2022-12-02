import DynamicFaIcon from '../DynamicFAIcon';

export default function GeneralButton({ generalLinks, deleteHandler, editHandler, copyToClipboardHandler}) {

  return (
    <section className="w-full mt-10">
      <h2 className="text-center text-xl font-bold mt-12 mb-5">General</h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-5 lg:gap-x-8">
        {
          generalLinks.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(50%-2rem)] text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out"
            >
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap w-48 md:w-56 lg:w-80">
                  <a 
                    href={`//${item.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm cursor-pointer hover:text-secondary active:text-secondary/60"
                    onClick={copyToClipboardHandler.bind(this, item.url)}
                  >
                    {item.url}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
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