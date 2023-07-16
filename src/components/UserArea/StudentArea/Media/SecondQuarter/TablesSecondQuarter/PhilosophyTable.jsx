import React from 'react'
import { Table } from "react-bootstrap";

const PhilosophyTable = ({ filosofia }) => {
  console.log(filosofia.orale)
  return (
    <>
      <Table responsive className='mt-5'>
        <thead>
          <tr>
            <th>ORALE</th>
            <th>SCRITTO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {filosofia && filosofia.orale.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </td>
            <td>
              {filosofia && filosofia.scritto.map((item, index) => (
                <ul key={index}>{item}</ul>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </>)
}

export default PhilosophyTable


