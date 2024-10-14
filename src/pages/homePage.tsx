import {
  CircleDollarSign,
  Droplets,
  Fish,
  Flame,
  LayoutDashboard,
  Leaf,
  Mountain,
  Newspaper,
  Search,
  ShoppingBag,
  Users,
} from "lucide-react";

import Koi, { default as BlogPost } from "../assets/KoiFishes.jpg";
import FengShuiLogo from "../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-20 lg:px-200 h-16 flex items-center bg-gradient-to-r from-red-800 to-red-600 text-white">
        <a className="flex items-center justify-center" href="#">
          <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
          <span className="ml-2 text-lg font-bold text-white">
            Feng Shui Koi
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            Consultation
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            Blog
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-white"
            href="#"
          >
            Advertise
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-10 px-40 bg-gradient-to-b from-red-50 to-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="px-40 py-5">
              <img
                className="rounded-xl shadow-md"
                src={Koi}
                height={40}
                width={850}
              />
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-red-800">
                  Feng Shui Koi Consulting System
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Discover the harmony between Koi fish and Feng Shui. Learn how
                  to choose Koi and design ponds that align with your life
                  element.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-red-700 hover:bg-red-600 text-white">
                  Start Consultation
                </Button>
                <Button
                  variant="outline"
                  className="text-red-700 border-red-700 hover:bg-red-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-40 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 text-gray-800">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Koi Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  Receive advice on Koi species and quantities suitable for your
                  life element.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <LayoutDashboard className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Pond Design</h3>
                <p className="text-sm text-gray-600">
                  Get guidance on pond shape, location, and orientation
                  according to Feng Shui principles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Life Element Calculation
                </h3>
                <p className="text-sm text-gray-600">
                  Determine your life element based on your gender and birth
                  year.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <ShoppingBag className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Advertising</h3>
                <p className="text-sm text-gray-600">
                  Post ads for Koi fish and Feng Shui pond decorations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <Newspaper className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Blog and News
                </h3>
                <p className="text-sm text-gray-600">
                  Stay updated with information and experiences about Koi and
                  Feng Shui.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Fish className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Compatibility Check
                </h3>
                <p className="text-sm text-gray-600">
                  Evaluate the compatibility of your life element with your
                  current pond and Koi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b px-40 from-blue-50 to-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 text-gray-800">
              The Five Elements in Feng Shui
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Water</h3>
                <p className="text-sm text-gray-600">Wisdom and flexibility</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <Flame className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Fire</h3>
                <p className="text-sm text-gray-600">Energy and passion</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Wood</h3>
                <p className="text-sm text-gray-600">Growth and creativity</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Mountain className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-yellow-700">Earth</h3>
                <p className="text-sm text-gray-600">
                  Stability and nourishment
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-gray-100 p-3 rounded-full">
                  <CircleDollarSign className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Metal</h3>
                <p className="text-sm text-gray-600">
                  Precision and determination
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b px-40 from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 text-gray-800">
              Latest Articles
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-3 p-3 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <img
                    src={BlogPost}
                    alt={`Blog post cover ${i}`}
                    className="aspect-video object-cover rounded-3xl"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Koi and Feng Shui Article #{i}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Learn more about selecting and caring for Koi fish
                      according to Feng Shui principles to bring luck and
                      prosperity.
                    </p>
                    <a
                      className="text-blue-600 hover:underline mt-4 inline-block"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b px-40 from-yellow-50 to-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                  Sign Up Now
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Receive free consultation on Feng Shui Koi that aligns with
                  your life element.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-500 text-white"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-40 bg-gray-100 flex-1">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3 px-10">
              <h4 className="text-sm font-medium text-gray-800">About Us</h4>
              <ul className="space-y-1">
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Introduction
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-800">Services</h4>
              <ul className="space-y-1">
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Feng Shui Consultation
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Pond Design
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Koi Sales
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-800">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Guides
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-800">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:underline" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              © 2023 Feng Shui Koi Consulting System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
