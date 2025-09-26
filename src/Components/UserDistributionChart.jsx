import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

export const UserDistributionChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const pieChartData = [
    { name: 'USA', value: 400 },
    { name: 'Europe', value: 300 },
    { name: 'Asia', value: 300 },
    { name: 'Africa', value: 200 },
    ];
    
    const renderActiveShape = (props) => {
      const RADIAN = Math.PI / 180;
      const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';

      return (
        <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-bold text-lg dark:fill-white">
            {payload.name}
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="dark:fill-gray-300">{`Users ${value}`}</text>
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="dark:fill-gray-500">
            {`(Rate ${(percent * 100).toFixed(2)}%)`}
          </text>
        </g>
      );
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">User Distribution</h3>
            <div className="w-full h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};