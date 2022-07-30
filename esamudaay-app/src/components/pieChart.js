import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend,LabelList } from 'recharts';
import './pieChart.css'

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Pie_Chart(props){

  // console.log(props.data)

  let dict = {}
  let name_arr=[]
  let data = [] 
  let COLORS = []
  // console.log(data.length)
  for(let i = 0; i < props.data.length; i++) {
    if(props.data[i].failure_reasons !== null) {
      for(let j = 0; j < props.data[i].failure_reasons.length; j++) {
        if(dict[props.data[i].failure_reasons[j]] === undefined) {
          dict[props.data[i].failure_reasons[j]] = 0
          name_arr.push(props.data[i].failure_reasons[j])
        }
        dict[props.data[i].failure_reasons[j]] += 1
        // console.log(props.data[i].failure_reasons[j],':',dict[props.data[i].failure_reasons[j]]) 
      }
    }
  }
  // console.log('printing dictionary:\n')
  // console.log(dict)
  // console.log(name_arr)
  var randomColor = require('randomcolor');
  for(let i=0;i<name_arr.length;i++)
  {
    data.push({name:name_arr[i],value:dict[name_arr[i]]})
    let color = randomColor()
    COLORS[i] = color
  }

return (
    <div>
    
    <div className="pieContainer" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <PieChart width={800} height={400}>
            <Pie
            data={data}
            cx={350}
            cy={100}
            innerRadius={60}
            outerRadius={100}
            fill="#black"
            paddingAngle={5}
            dataKey="value"
            nameKey='name'
            >
            <LabelList dataKey="value" position="top" />
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Legend margin={{ left: 100 }} />
        </PieChart>
        </ResponsiveContainer>
      </div>
      </div>
  );
}
