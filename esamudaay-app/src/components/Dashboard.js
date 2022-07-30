function Dashboard(props) {
  console.log(props);
  return (
    <tr>
      <td>ABCD</td>
      <td>{props.business_name}</td>
      <td>0</td>
      <td>0</td>
      <td><button>View report</button></td>
    </tr>
  )
}

export default Dashboard