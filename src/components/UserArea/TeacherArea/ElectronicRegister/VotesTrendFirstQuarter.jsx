import React, { useEffect, useState } from 'react'
import { Button, Table } from "react-bootstrap"

const VotesTrendFirstQuarter = ({ Student, decodeSubject }) => {
    const idStudent = Student._id // è id dello studente
    const quad = "primo_quadrimestre"                                 
    const mat = decodeSubject.school_subject //è la materia del docente
    const [singleSubject, setSingleSubject] = useState(null)
    
    const getSubject = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${idStudent}/subject?quad=${quad}&mat=${mat}`);
            const data = await response.json();
            setSingleSubject(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSubject()
    },[quad, mat])
    console.log(singleSubject)
    return (
        <>
            <Button>Primo Quadrimestre</Button>
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
                            {singleSubject && singleSubject.subject.orale.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                        <td>
                        {singleSubject && singleSubject.subject.scritto.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default VotesTrendFirstQuarter