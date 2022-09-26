import SocialMediaButton from './SocialMediaButton';

export default function Header() {
  return (
    <header className="relative z-10">
      <div className="absolute -top-16 flex flex-col items-center w-full text-center md:-top-32">
        <picture>
          <img className="rounded-full shadow-lg shadow-black/20 max-w-[120px] md:max-w-[250px] object-cover" src="/img/logo.webp" alt="logo decorunic" />
        </picture>
        <h1 className="font-bold mt-5 text-2xl md:text-3xl">Decorunic</h1>
        <p className="mt-2 md:text-lg">Brand Furniture Hemat Ruang Minimalis Space Saving</p>
        <SocialMediaButton/>
      </div> 
    </header>
  );
}