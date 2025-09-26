import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';


export const GrowthChart = ({isDarkMode}) => {
    const lineChartData = [
            { name: 'Jan', revenue: 4000, users: 2400 },
            { name: 'Feb', revenue: 3000, users: 1398 },
            { name: 'Mar', revenue: 2000, users: 9800 },
            { name: 'Apr', revenue: 2780, users: 3908 },
            { name: 'May', revenue: 1890, users: 4800 },
            { name: 'Jun', revenue: 2390, users: 3800 },
            { name: 'Jul', revenue: 3490, users: 4300 },
            ];
    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Growth Trends</h3>
            <div className="w-full h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#4A5568" : "#E2E8F0"} />
                        <XAxis dataKey="name" stroke={isDarkMode ? "#A0AEC0" : "#718096"} />
                        <YAxis stroke={isDarkMode ? "#A0AEC0" : "#718096"} />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: isDarkMode ? '#2D3748' : '#FFFFFF', 
                                border: '1px solid',
                                borderColor: isDarkMode ? '#4A5568' : '#E2E8F0',
                                borderRadius: '0.75rem'
                            }}
                            labelStyle={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}
                        />
                        <Legend wrapperStyle={{color: isDarkMode ? "#A0AEC0" : "#718096"}}/>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};