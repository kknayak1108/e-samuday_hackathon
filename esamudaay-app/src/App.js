import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Pie_Chart from './components/pieChart';
import Table from 'react-bootstrap/Table';

import { useEffect,useState } from 'react';
function App() {
  const [data, setData] = useState([])
  //var tableData
/*
  function setTableData(data) {
    tableData = data
  }
*/
  // function setTableData(data) {
  //   tableData = data;
  // }

  useEffect(() => {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/fec59a4b-5a06-4f17-be5b-758b2e284743/report')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  /*function changeData() {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/f104d365-a41f-40da-8d49-3379f94170d5/report')
    .then(res => res.json())
    .then(data => setData(data))
  }*/



  function getPass(data) {
    let pass = 0
    for(let i = 0; i < data.length; i++) {
      if(data[i].failure_reasons === null) {
        pass += 1
      }
    }
    return pass
  }

  let business_id = ['c1c031b1-b889-45dd-982b-09b8f25543a7', '5e67af50-4904-4975-90f0-1fcf6478d72f', 'f104d365-a41f-40da-8d49-3379f94170d5', '0635ecff-8fde-4185-8cd8-167efda42bbc', '006a7609-9dd7-4857-90e5-32cb99125a33', 'ca9a3040-3e99-4fa4-b978-acf5ad5dc1c2', '25ff2989-bcf1-4a29-96b5-6a790471bafc', 'fec59a4b-5a06-4f17-be5b-758b2e284743', '597c56c9-32f9-4610-b26e-d82b99015e6e', 'c1c031b1-b889-45dd-982b-09b8f25543a7']
  let business_data = []

 /*async function getBusinessData() {
    let business = []
    for(let i = 0; i < business_id.length; i++) {
     await fetch(`https://api.test.esamudaay.com/api/v1/businesses/${business_id[i]}/report`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(data => business.push(data))
    
   



  }
  console.log(business)
  return business
 }*/

 const fetchData = async () => {
  for(let i = 0; i < business_id.length; i++) {
  const response = await fetch(`https://api.test.esamudaay.com/api/v1/businesses/${business_id[i]}/report`)
  if (!response.ok) {
    throw new Error('Data coud not be fetched!');
  } else {
    console.log("resp")
    return response.json();
  }
}
}





 

  
//business_data = getBusinessData()
 // console.log(business_data)

  /*const bussinesses = business_data.map( (data) => {
    let pass = getPass(data)
   console.log("This data",pass);
    return (
      
      <Dashboard data={data} pass={pass}/>
      
    )

  }) */


  //console.log(bussinesses)

  // for(let i = 0; i < business_id.length; i++) {
  //   fetch(`https://api.test.esamudaay.com/api/v1/businesses/${business_id[i]}/report`)
  //   .then(res => res.json())
  //   .then(data => setTableData(data))
    
  // }

  return (
    <div className="App Container">
      <div className="row" style={{height:"380px"}}>
        <div className="col-md-5" style={{border:"1px solid black"}}>
          <div>
            <div className="container" style={{height:"100px",background:"gray"}}>
            <div className="my-5"><input type="text" placeholder="enter buisness id"></input></div>
            </div>
          


          <button className="my-4 mx-4" style={{width:"20px",height:"20px",background:"#008000"}}></button>
          <label>{getPass(data)}</label> 
          </div>
          
          <div>
          <button className="mx-4" style={{width:"20px",height:"20px",background:"#FF0000"}}></button>
          <label>{data.length - getPass(data)}</label> 
          </div>
           
        </div>
           
        <div className="col-md-7" style={{border:"1px solid black", textAlign:"center"}}>
          
          
          <Pie_Chart data={data}/></div>
      </div>

      <div className="row">
        <div className="container">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Business ID</th>
            <th>Business name</th>
            <th>Pass</th>
            <th>Fail</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {/* {bussinesses} */}
        </tbody>
      </Table>
        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
