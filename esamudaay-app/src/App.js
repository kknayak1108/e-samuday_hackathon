import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Pie_Chart from './components/pieChart';

import { useEffect,useState } from 'react';
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/fec59a4b-5a06-4f17-be5b-758b2e284743/report')
    .then(res => res.json())
    .then(data => setData(data))
     console.log(data)
  }, [])

  function changeData() {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/f104d365-a41f-40da-8d49-3379f94170d5/report')
    .then(res => res.json())
    .then(data => setData(data))
  }

  let pass = 0

  for(let i = 0; i < data.length; i++) {
    if(data[i].failure_reasons === null) {
      pass += 1
    }
  }

  return (
    <div className="App Container">
      <div className="row" style={{height:"380px"}}>
        <div className="col-md-5" style={{border:"1px solid black"}}>
          <div>
          <button className="my-4 mx-4" style={{width:"20px",height:"20px",background:"#008000"}}></button>
          <label>{pass}</label> 
          </div>
          
          <div>
          <button className="mx-4" style={{width:"20px",height:"20px",background:"#FF0000"}}></button>
          <label>{data.length - pass}</label> 
          </div>
           
        </div>
        <div className="col-md-7" style={{border:"1px solid black", textAlign:"center"}}><Pie_Chart data={data}/></div>
      </div>

      <div className="row">
        <div className="container">
        <Dashboard data={data} pass={pass} change={changeData}/>
        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
