

export const DashboardCard = ({ title, value, change, icon, iconBgColor }) => {
    const isPositive = change.startsWith('+');
    return (
        <div className="p-6 transition-all duration-300 bg-white rounded-2xl shadow-lg dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                    <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
                    <p className={`mt-1 text-sm font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>{change}</p>
                </div>
                <div className={`p-3 rounded-lg ${iconBgColor}`}>
                    {icon}
                </div>
            </div>
        </div>
    );
};