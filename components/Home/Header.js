import SocialMediaButton from './SocialMediaButton';

export default function Header() {
  return (
    <header className="relative">
      <div className="absolute -top-32 flex flex-col items-center w-full">
        <img className="rounded-full shadow-lg shadow-black/20 max-w-[250px] object-cover" src="/img/logo.webp" />
        <h1 className="font-bold text-3xl mt-5">Decorunic</h1>
        <p className="text-lg mt-2">Brand Furniture Hemat Ruang Minimalis Space Saving</p>
        <SocialMediaButton/>
      </div> 
    </header>
  );
}