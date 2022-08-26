import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../charts.css"


function ReactBarChart() {
  const data = [
    {
      name: 'Official',
      uv: 4000,
      pv: 5000,
      amt: 3000,
    },
    {
      name: 'Unofficial',
      uv: 3000,
      pv: 5200,
      amt: 2210,
    },
    {
      name: 'Without Warranty',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Used',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className='bar-chart'>
    <p className='pie-chart-text'>Conditions</p>
     
     
     <ResponsiveContainer className="barChartStyle" width="100%" height="100%">
             <BarChart
             width={500}
             height={300}
             data={data}
             margin={{
                 top: 5,
                 right: 50,
                 left: 20,
                 bottom: 5,
             }}
             barSize={20}
             >
             <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
             <YAxis />
             <CartesianGrid strokeDasharray="3 3" />
             <Bar dataKey="pv" fill="darkcyan" background={{ fill: '#eee' }} />
             </BarChart>
     </ResponsiveContainer>
     
     
     
     
 </div>
  )
}

export default ReactBarChart