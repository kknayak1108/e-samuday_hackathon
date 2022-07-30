import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Pie_Chart from './components/pieChart';

import { useEffect,useState } from 'react';
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report')
    .then(res => res.json())
    .then(data => setData(data))
     console.log(data)
  }, [])

  return (
    <div className="App Container">
      <div className="row" style={{height:"380px"}}>
        <div className="col-md-5" style={{border:"1px solid black"}}>
          <div>
          <button className="my-4 mx-4" style={{width:"20px",height:"20px",background:"#008000"}}></button>
          <label>Pass</label> 
          </div>
          
          <div>
          <button className="mx-4" style={{width:"20px",height:"20px",background:"#FF0000"}}></button>
          <label>Pass</label> 
          </div>
           
        </div>
        <div className="col-md-7" style={{border:"1px solid black", textAlign:"center"}}><Pie_Chart data={data}/></div>
      </div>

      <div className="row">
        <div className="container">
        <Dashboard/>
        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
