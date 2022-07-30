import Table from 'react-bootstrap/Table';
function Dashboard(props) {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>skuid</th> */}
            <th>Business ID</th>
            <th>Business name</th>
            <th>Pass</th>
            <th>Fail</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0635ecff-8fde-4185-8cd8-167efda42bbc</td>
            <td>{props.data[0].business_name}</td>
            <td>{props.pass}</td>
            <td>{props.data.length - props.pass}</td>
            <td><button onClick={props.change}>View report</button></td>
          </tr>
        </tbody>
      </Table>
    )
}

export default Dashboard