import React from 'react'
import { Chart as ChartJS, ArcElement,CategoryScale,LinearScale, Tooltip, Title,BarElement,Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../charts.css";

const ReactPieChart = () => {

    ChartJS.register(ArcElement,CategoryScale,LinearScale, Title,Tooltip,BarElement, Legend);

    const data = {
        labels: ['Daraz : 35%', 'Bikroy : 30%','Picabox : 35%'],
        datasets: [
          {
            label: '# of Votes',
            data: [35, 30, 35],
            backgroundColor: [
              'rgba(19, 220, 13, 0.8)',
              'rgba(239, 237, 19, 0.87)',
              'rgba(13, 15, 220, 0.8)'
            ],
            borderColor: [
                'rgba(19, 220, 13, 0.8)',
                'rgba(239, 237, 19, 0.87)',
                'rgba(13, 15, 220, 0.8)'
            ],
            borderWidth: 1,
          },
        ],
    };


  return (
    <>
    
     <div className='pie-chart'>
            <p className="sourceDesign">Sources</p>
            <Pie data={data} className="chartDesign" />
        </div>

    </>
  )
}

export default ReactPieChart