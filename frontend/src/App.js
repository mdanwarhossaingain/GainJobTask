
import './App.css';

import Navbar from "./Component/Header/Header";
import Chart from "./Component/Charts/charts";
import Product from "./Component/Products/products"

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Chart />
      <Product />

    </div>
  );
}

export default App;
