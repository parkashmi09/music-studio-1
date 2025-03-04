import React from 'react';
import { BarChart, Bar, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { value: 0 },
  { value: 300 },
  { value: 200 },
  { value: 350 },
  { value: 500 },
  { value: 450 },
  { value: 300 },
  { value: 400 },
  { value: 300 },
  { value: 200 },
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 2;
  
  return (
    <g>
      <defs>
        <filter id="barGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
          />
        </filter>
      </defs>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
        filter="url(#barGlow)"
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

const BarChartComponent = () => {
  return (
    <div className="h-[222px] min-w-[698px] bg-dark-blue-gradient rounded-[20px] px-1 py-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          margin={{ top: 5, right: 15, left: 10, bottom: 5 }}
          barGap={0}
        >
          <YAxis 
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]} 
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: '#ffff', 
              fontSize: 10,
              fontFamily: 'monospace',
              dx: 0
            }}
            width={43}
            tickFormatter={(value) => `${value}`}
            allowDecimals={false}
            interval={0}
            scale="linear"
            padding={{ bottom: 0 }}
          />
          <Bar 
            dataKey="value" 
            fill="#FFFFFF"
            shape={<CustomBar />}
            barSize={8}
            minPointSize={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;