function Dashboard(props) {
  console.log(props);
  return (
    <tr>
      <td>0635ecff-8fde-4185-8cd8-167efda42bbc</td>
      {/* <td>{props.data[0].business_name}</td> */}
      <td>{props.pass}</td>
      <td>{props.data.length - props.pass}</td>
      <td><button onClick={props.change}>View report</button></td>
    </tr>
  )
}

export default Dashboard