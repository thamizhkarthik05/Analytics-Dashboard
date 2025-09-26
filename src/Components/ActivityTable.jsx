import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

export const ActivityTable = () => {

    const recentActivity = [
        { id: 1, user: 'Kaarthik M', action: 'Updated Task Status', timestamp: '2 minutes ago', avatar: 'https://placehold.co/40x40/E4E4E7/71717A?text=K' },
        { id: 2, user: 'Rekha', action: 'Pushed new commit to "WebApp"', timestamp: '15 minutes ago', avatar: 'https://placehold.co/40x40/E4E4E7/71717A?text=R' },
        { id: 3, user: 'Harshith', action: 'Deployed new version v1.2.0', timestamp: '1 hour ago', avatar: 'https://placehold.co/40x40/E4E4E7/71717A?text=H' },
        { id: 4, user: 'Keerthiswaran', action: 'Completed task "UI Design"', timestamp: '3 hours ago', avatar: 'https://placehold.co/40x40/E4E4E7/71717A?text=K' },
        { id: 5, user: 'Sinduja', action: 'Added new project "Mobile App"', timestamp: '1 day ago', avatar: 'https://placehold.co/40x40/E4E4E7/71717A?text=S' },
    ];

  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-lg dark:bg-gray-800">
            <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">User</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                            <th scope="col" className="px-6 py-3">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentActivity.map((activity) => (
                            <tr key={activity.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src={activity.avatar} alt={`${activity.user} image`} />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">{activity.user}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">{activity.action}</td>
                                <td className="px-6 py-4">{activity.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}



















