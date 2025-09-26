import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import   { HomeIcon, BarChart2Icon, FolderKanbanIcon, SettingsIcon,UserIcon,LogOutIcon} from './Icons'


export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navItems = [
        { icon: HomeIcon, label: "Home" },
        { icon: BarChart2Icon, label: "Analytics" },
        { icon: FolderKanbanIcon, label: "Projects" },
        { icon: SettingsIcon, label: "Settings" },
        { icon: UserIcon, label: "Profile" },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-center h-20 border-b dark:border-gray-700">
                <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Dashboard</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                    <a key={index} href="#" className={`flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${index === 0 ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`}>
                        <item.icon className="w-5 h-5" />
                        <span className="ml-4">{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="absolute bottom-0 w-full px-4 py-6 border-t dark:border-gray-700">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                    <LogOutIcon className="w-5 h-5" />
                    <span className="ml-4">Logout</span>
                </a>
            </div>
        </aside>
    );
};