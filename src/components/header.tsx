import FengShuiLogo from "../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";


const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-red-800 to-red-600 text-white">
      <a className="flex items-center justify-center" href="#">
        <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
        <span className="ml-2 text-lg font-bold text-white">Feng Shui Koi</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/consulting"
        >
          Consultation
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/blog"
        >
          Blog
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
