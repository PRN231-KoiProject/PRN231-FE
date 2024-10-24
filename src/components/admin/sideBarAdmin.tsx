import { Bell, Calendar, FileText, LogOut, Menu, Search, Settings, Users, X } from "lucide-react";
import { useState } from "react";
import FengShuiLogo from "../../assets/pikaso_texttoimage_Koi-Feng-Shui-Logo.png";

const SidebarLink = ({ icon: Icon, text, isActive }:any) => (
    <a href="#" className={`flex items-center py-3 px-6 text-white hover:bg-red-700 rounded-lg transition-colors duration-200 ${isActive ? 'bg-red-700' : ''}`}>
      <Icon className="h-5 w-5 mr-3" />
      <span>{text}</span>
    </a>
  );

const SideBarAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div>
        <aside className={`bg-gradient-to-b from-red-800 to-red-600 text-white h-screen w-64 fixed left-0 top-0 transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-30`}>
            <div className="p-5">
            <div className="flex items-center mb-8">
            <a className="flex items-center justify-center" href="#">
            <img src={FengShuiLogo} height={40} width={50} alt="FengShuiLogo" />
            <span className="ml-2 text-lg font-bold text-white">Feng Shui Koi</span>
            </a>
            </div>
            <nav className="space-y-2">
                <SidebarLink icon={Users} text="Customers" isActive={true} />
                <SidebarLink icon={FileText} text="Consultations" isActive={false} />
                <SidebarLink icon={Calendar} text="Appointments" isActive={false} />
                <SidebarLink icon={Settings} text="Settings" isActive={false} />
            </nav>
            </div>
            <div className="absolute bottom-0 w-full p-5">
            <button className="flex items-center text-white hover:text-red-200 transition-colors duration-200">
                <LogOut className="h-5 w-5 mr-2" />
                <span>Logout</span>
            </button>
            </div>
        </aside>
        <header className="bg-white shadow-md z-20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <button className="lg:hidden text-gray-600" onClick={toggleSidebar}>
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex-1 flex items-center justify-center sm:justify-start">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mr-4">
                <Bell className="h-6 w-6" />
                </button>
                <img 
                src="/placeholder.svg?height=40&width=40&text=Admin" 
                alt="Admin Avatar" 
                className="h-10 w-10 rounded-full border-2 border-red-500"
                />
            </div>
            </div>
        </header>
    </div>
  )
}

export default SideBarAdmin