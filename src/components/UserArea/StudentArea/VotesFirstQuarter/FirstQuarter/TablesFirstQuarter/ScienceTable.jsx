import React from 'react'
import { Table } from "react-bootstrap"

const ScienceTable = ({scienze}) => {
    return (
        <>
            <Table striped="columns" bordered hover responsive variant="dark" className='m-0' size="sm">
                <thead>
                    <tr>
                        <th>ORALE</th>
                        <th>SCRITTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {scienze && scienze.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                            {scienze && scienze.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ScienceTable