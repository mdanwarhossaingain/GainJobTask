import React from 'react'
import "../Charts/charts.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import ReactBarChart from './ReactBarChart/ReactBarChart';
import ReactPieChart from './ReactPieChart/ReactPieChart';

const charts = () => {
  return (
   <>

    <div className="piChart">
        <div className="pichart-design">
       
           <ReactPieChart />
        </div>
    </div>

    <div className="barchart">
        <ReactBarChart />
    
    </div>
   
   
   </>
  )
}

export default charts