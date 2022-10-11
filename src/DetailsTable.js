import React from 'react';
export default function DetailsTable(props) {
    
    
  return (
    <div className='table'>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Year</th>
          <th>Department</th>
          <th>Event</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{props.data.name}</td>
          <td>{props.data.phone}</td>
          <td>{props.data.email}</td>
          <td>{props.data.year}</td>
          <td>{props.data.dept}</td>
          <td>{props.data.event}</td>
        </tr>
        </tbody>
      </table>

    </div>
  )

}
