import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value1: 500000, value2: 400000 },
  { name: 'Feb', value1: 200000, value2: 300000 },
  { name: 'Mar', value1: 150000, value2: 200000 },
  { name: 'Apr', value1: 280000, value2: 250000 },
  { name: 'May', value1: 350000, value2: 300000 },
  { name: 'Jun', value1: 400000, value2: 350000 },
  { name: 'Jul', value1: 450000, value2: 400000 },
  { name: 'Aug', value1: 420000, value2: 380000 },
  { name: 'Sep', value1: 380000, value2: 350000 },
  { name: 'Oct', value1: 400000, value2: 380000 },
  { name: 'Nov', value1: 450000, value2: 400000 },
  { name: 'Dec', value1: 500000, value2: 450000 }
];

const AreaChartComponent = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            vertical={false}
            stroke="#374151"
            strokeDasharray="3 3"
          />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickFormatter={(value) => `$${value/1000}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="value1" 
            stroke="#2563EB"
            strokeWidth={2}
            fill="url(#colorGradient1)"
          />
          <Area 
            type="monotone" 
            dataKey="value2" 
            stroke="#60A5FA"
            strokeWidth={2}
            fill="url(#colorGradient2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;