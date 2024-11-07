import { Link } from "react-router-dom";
import FengShuiLogo from "../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gradient-to-r from-red-800 to-red-600 text-white">
      {/* Logo */}
      <Link className="flex items-center" to="/">
        <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
        <span className="ml-2 text-lg font-bold text-white">Feng Shui Koi</span>
      </Link>

      {/* Centered Navigation */}
      <nav className="flex-grow flex justify-center gap-6 sm:gap-7">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/category">
          Category
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/consulting">
          Consultation
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/blog">
          Blog
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
          Contact
        </Link>
      </nav>

      {/* Sign In/Sign Up Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/signUp">
          <Button variant="ghost" className="bg-white text-black hover:text-red-600">
            Sign up
          </Button>
        </Link>
        <Link to="/signIn">
          <Button variant="ghost" className="bg-white text-black hover:text-red-600">
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
