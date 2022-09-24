import { 
  FaInstagram, 
  FaTiktok, 
  FaFacebook,
  FaYoutube,
  FaPinterest 
} from 'react-icons/fa';

export default function SocialMediaButton() {
  return (
    <div className="flex flex-wrap mt-5 gap-2 md:gap-3">
      <a href="https://www.instagram.com/decorunic.official/" className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
        <FaInstagram />
      </a>
      <a href="https://tiktok.com/@decorunic.official" className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
        <FaTiktok />
      </a>
      {/* facebook */}
      <a href="https://www.facebook.com/decorunic.official/" className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
        <FaFacebook />
      </a>
      <a href="https://www.youtube.com/c/DecorunicChannel" className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
        <FaYoutube />
      </a>
      <a href="https://id.pinterest.com/decorunic/" className="text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50">
        <FaPinterest />
      </a>

    </div>
  );
}