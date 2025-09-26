
import   { MenuIcon,SearchIcon,MoonIcon,BellIcon,SunIcon} from './Icons'


export const Navbar = ({ setIsSidebarOpen, isDarkMode, toggleDarkMode }) => {
    return (
        <header className="fixed top-0 right-0 z-30 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md md:w-[calc(100%-16rem)] transition-all duration-300">
            <div className="flex items-center justify-between h-20 px-6">
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-gray-600 dark:text-gray-300">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                    <div className="relative">
                        <SearchIcon className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-transparent rounded-lg dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
                        {isDarkMode ? <SunIcon className="w-6 h-6 cursor-pointer" /> : <MoonIcon className="w-6 h-6 cursor-pointer" />}
                    </button>
                    <div className="relative">
                        <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </div>
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://placehold.co/40x40/6366F1/FFFFFF?text=MK"
                        alt="User Avatar"
                    />
                </div>
            </div>
        </header>
    );
};