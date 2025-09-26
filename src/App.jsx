import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import {Sidebar} from './Components/Sidebar';
import {Navbar} from './Components/Navbar';
import {GrowthChart} from './Components/GrowthChart';
import {DashboardCard} from './Components/DashboardCard';
import {ActivityTable} from './Components/ActivityTable';
import { UserDistributionChart } from './Components/UserDistributionChart';
import {SettingsIcon,UserIcon,LogOutIcon,SearchIcon,BellIcon,MenuIcon,SunIcon,MoonIcon,FolderKanbanIcon ,BarChart2Icon} from './Components/Icons';


// --- MOCK DATA ---



export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);










    useEffect(() => {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && userPrefersDark)) {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    const cardData = [
        { title: "Total Users", value: "12,450", change: "+12.5%", icon: <UserIcon className="w-6 h-6 text-white"/>, iconBgColor: "bg-blue-500" },
        { title: "Revenue", value: "$45,890", change: "+8.2%", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, iconBgColor: "bg-emerald-500" },
        { title: "Active Projects", value: "24", change: "-2.1%", icon: <FolderKanbanIcon className="w-6 h-6 text-white"/>, iconBgColor: "bg-indigo-500" },
        { title: "Growth", value: "+15.6%", change: "vs. last month", icon: <BarChart2Icon className="w-6 h-6 text-white"/>, iconBgColor: "bg-amber-500" },
    ]

    return (
        <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300`}>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            

            {isSidebarOpen && (
                <div 
                    onClick={() => setIsSidebarOpen(false)} 
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                ></div>
            )}
            
            <div className="md:ml-64 transition-all duration-300">
                
                <Navbar setIsSidebarOpen={setIsSidebarOpen} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                
                <main className="p-6 pt-24 min-h-screen">
                    {/* Fade-in animation for the main content */}
                    <div className="animate-fade-in-up">
                        {/* Dashboard Cards */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                           {cardData.map((card, index) => (
                               <DashboardCard key={index} {...card} />
                           ))}
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <GrowthChart isDarkMode={isDarkMode}/>
                            </div>
                            <div className="lg:col-span-2">
                                <UserDistributionChart />
                            </div>
                        </div>

                        {/* Recent Activity Table */}
                        <div className="mt-8">
                            <ActivityTable />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
