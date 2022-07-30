import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Pie_Chart from './components/pieChart';
import Table from 'react-bootstrap/Table';

import { useEffect,useState } from 'react';
function App() {
  const [data, setData] = useState([])
  // const [businessData, setBusinessData] = useState([])
  const [pass, setPass] = useState(0)
  // var results = []
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
    getPass(data)
  }, [])

  /*function changeData() {
    fetch('https://api.test.esamudaay.com/api/v1/businesses/f104d365-a41f-40da-8d49-3379f94170d5/report')
    .then(res => res.json())
    .then(data => setData(data))
  }*/

  function getPass(data) {
    let temp = 0
    for(let i = 0; i < data.length; i++) {
      if(data[i].failure_reasons === null) {
        temp += 1
      }
    }
    setPass(temp)
  }

  let business_id = ['c1c031b1-b889-45dd-982b-09b8f25543a7', 
  '5e67af50-4904-4975-90f0-1fcf6478d72f', 
  'f104d365-a41f-40da-8d49-3379f94170d5', 
  '0635ecff-8fde-4185-8cd8-167efda42bbc', 
  '006a7609-9dd7-4857-90e5-32cb99125a33', 
  'ca9a3040-3e99-4fa4-b978-acf5ad5dc1c2', 
  '25ff2989-bcf1-4a29-96b5-6a790471bafc',
   'fec59a4b-5a06-4f17-be5b-758b2e284743',
    '597c56c9-32f9-4610-b26e-d82b99015e6e' 
    ]

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

//  async function init() {
//   try {
//     results = await Promise.all([
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/c1c031b1-b889-45dd-982b-09b8f25543a7/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/5e67af50-4904-4975-90f0-1fcf6478d72f/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/f104d365-a41f-40da-8d49-3379f94170d5/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/006a7609-9dd7-4857-90e5-32cb99125a33/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/ca9a3040-3e99-4fa4-b978-acf5ad5dc1c2/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/25ff2989-bcf1-4a29-96b5-6a790471bafc/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/fec59a4b-5a06-4f17-be5b-758b2e284743/report').then(res => res.json()),
//       fetch('https://api.test.esamudaay.com/api/v1/businesses/597c56c9-32f9-4610-b26e-d82b99015e6e/report').then(res => res.json())
//     ])
//     setBusinessData(results)
//   } catch(error) {
//     console.error(error)
//   }
  
//  }

//  business_data = init()
//  console.log(results)

//  console.log(business_data)

//  const fetchData = async () => {
//   for(let i = 0; i < business_id.length; i++) {
//   const response = await fetch(`https://api.test.esamudaay.com/api/v1/businesses/${business_id[i]}/report`)
//   if (!response.ok) {
//     throw new Error('Data coud not be fetched!');
//   } else {
//     console.log("resp")
//     return response.json();
//   }
// }
// }

// init()

// const businessTable = businessData.map((data) => {
//   console.log(data)
//   return (
//     <Dashboard business_name={data[0].business_name}/>
//   )
// })

// for(let i = 0; i < business_data.length; i++) {
//   console.log(business_data[i])
// }

// console.log(businessTable)
  
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

  function handleData(businessId) {
    fetch(`https://api.test.esamudaay.com/api/v1/businesses/${businessId}/report`)
    .then(res => res.json())
    .then(data => setData(data))
    getPass(data)
  }

  return (
    <div className="App Container">
      <div className="row" style={{height:"380px"}}>
        <div className="col-md-5" style={{border:"1px solid black"}}>
          <div>
            {/* <div className="container" style={{height:"100px",background:"gray"}}>
            <div className="my-5"><input type="text" placeholder="enter buisness id"></input></div>
            </div> */}

          <button className="my-4 mx-2" style={{width:"20px",height:"20px",background:"#008000"}}></button>
          <label>Pass </label>
          <label className='mx-2'>{pass}</label> 
          </div>
          
          <div>
          <button className="mx-2" style={{width:"20px",height:"20px",background:"#FF0000"}}></button>
          <label>Fail</label>
          <label className='mx-2'>{data.length - pass}</label> 
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
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>c1c031b1-b889-45dd-982b-09b8f25543a7</td>
            <td>Cream Bowl</td>
            <td><button onClick={(business_id) => handleData('c1c031b1-b889-45dd-982b-09b8f25543a7')}>View Report</button></td>
          </tr>
          <tr>
            <td>5e67af50-4904-4975-90f0-1fcf6478d72f</td>
            <td>A1 dairy</td>
            <td><button onClick={(business_id) => handleData('5e67af50-4904-4975-90f0-1fcf6478d72f')}>View Report</button></td>
          </tr>
          <tr>
            <td>f104d365-a41f-40da-8d49-3379f94170d5</td>
            <td>Marlin Artss</td>
            <td><button onClick={(business_id) => handleData('f104d365-a41f-40da-8d49-3379f94170d5')}>View Report</button></td>
          </tr>
          <tr>
            <td>0635ecff-8fde-4185-8cd8-167efda42bbc</td>
            <td>Ravada Stores</td>
            <td><button onClick={(business_id) => handleData('0635ecff-8fde-4185-8cd8-167efda42bbc')}>View Report</button></td>
          </tr>
          <tr>
            <td>006a7609-9dd7-4857-90e5-32cb99125a33</td>
            <td>test royal bakery</td>
            <td><button onClick={(business_id) => handleData('006a7609-9dd7-4857-90e5-32cb99125a33')}>View Report</button></td>
          </tr>
          <tr>
            <td>ca9a3040-3e99-4fa4-b978-acf5ad5dc1c2</td>
            <td>Bear Cafe</td>
            <td><button onClick={(business_id) => handleData('ca9a3040-3e99-4fa4-b978-acf5ad5dc1c2')}>View Report</button></td>
          </tr>
          <tr>
            <td>25ff2989-bcf1-4a29-96b5-6a790471bafc</td>
            <td>Kalpitha store</td>
            <td><button onClick={(business_id) => handleData('25ff2989-bcf1-4a29-96b5-6a790471bafc')}>View Report</button></td>
          </tr>
          <tr>
            <td>fec59a4b-5a06-4f17-be5b-758b2e284743</td>
            <td>Food Panda</td>
            <td><button onClick={(business_id) => handleData('fec59a4b-5a06-4f17-be5b-758b2e284743')}>View Report</button></td>
          </tr>
          <tr>
            <td>597c56c9-32f9-4610-b26e-d82b99015e6e</td>
            <td>New2 banashankari traders</td>
            <td><button onClick={(business_id) => handleData('597c56c9-32f9-4610-b26e-d82b99015e6e')}>View Report</button></td>
          </tr>
        </tbody>
      </Table>
        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
