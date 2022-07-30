import Table from 'react-bootstrap/Table';
function Dashboard(props) {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>skuid</th>
            <th>Business name</th>
            <th>Product name</th>
            <th>Pass</th>
            <th>Fail</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1111</td>
            <td>Ravada Store</td>
            <td>Product</td>
            <td>BuinessID</td>
            <td>Buisness unit</td>
          </tr>
        </tbody>
      </Table>
    )
}

export default Dashboard