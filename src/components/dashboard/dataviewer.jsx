import React from "react";
import { useNavigate } from "react-router";
import {
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td
} from '@chakra-ui/react'

export const DataViewer = ({ data, type }) => {

    console.log(type);
    console.log(data);
    
    const navigate = useNavigate();

    return type === "patients"? (
        <>
            <Table>
                <Thead>
                    <Tr>
                    <Th className="!text-secondary">userId</Th>
                    <Th className="!text-secondary">name</Th>
                    <Th className="!text-secondary">age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((patient) => (
                    <Tr className="hover:cursor-pointer hover:bg-yellow-600 hover:text-xl hover:font-bold hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/patients/${patient.id}`)}>
                        <Td>{patient.id}</Td>
                        <Td>{patient.name}</Td>
                        <Td>{patient.age}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    ) : type === "patient feedback" ?(
        <>
            <Table>
                <Thead>
                    <Tr>
                    <Th className="!text-secondary">Id</Th>
                    <Th className="!text-secondary">Patient Name</Th>
                    <Th className="!text-secondary">rating</Th>
                    <Th className="!text-secondary">rating reason</Th>
                    <Th className="!text-secondary">feeling</Th>
                    <Th className="!text-secondary">stress level</Th>
                    <Th className="!text-secondary">struggle</Th>
                    <Th className="!text-secondary">session feedback</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((patientFeedback) => (
                    <Tr className="hover:cursor-pointer hover:bg-yellow-600 hover:text-xl hover:font-bold hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/fearforms/${patientFeedback.id}`)}>
                        <Td>{patientFeedback.id}</Td>
                        <Td>{patientFeedback.patientname}</Td>
                        <Td>{patientFeedback.rating}</Td>
                        <Td>{patientFeedback.ratingreason? patientFeedback.ratingreason : "none"}</Td>
                        <Td>{patientFeedback.feeling}</Td>
                        <Td>{patientFeedback.stresslevel}</Td>
                        <Td>{patientFeedback.struggle}</Td>
                        <Td>{patientFeedback.sessionFeedback}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </> 
        ) : type === "parent feedback" ? (
                <>
                    <Table> 
                        <Thead>
                            <Tr>
                            <Th className="!text-secondary">Form ID</Th>
                            <Th className="!text-secondary">Parent Name</Th>
                            <Th className="!text-secondary">Parent ID</Th>
                            <Th className="!text-secondary">Patient Name</Th>
                            <Th className="!text-secondary">Patient ID</Th>
                            <Th className="!text-secondary">Rating of treatment</Th>
                            <Th className="!text-secondary">Behaviour OF Patient</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((parentFeedback) => (
                            <Tr className="hover:cursor-pointer hover:bg-yellow-600 hover:text-xl hover:font-bold hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/parentforms/${parentFeedback.id}`)}>
                                <Td>{parentFeedback.id}</Td>
                                <Td>{parentFeedback.parentname}</Td>
                                <Td>{parentFeedback.parentid}</Td>
                                <Td>{parentFeedback.patientname}</Td>
                                <Td>{parentFeedback.patientid}</Td>
                                <Td>{parentFeedback.rating}</Td>
                                <Td>{parentFeedback.behaviourofchild}</Td>
                            </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </>
            ) : (
                    <>
                        <Table> 
                            <Thead>
                                <Tr>
                                <Th className="!text-secondary">Session Id</Th>
                                <Th className="!text-secondary">patientId</Th>
                                <Th className="!text-secondary">Max Heart rate</Th>
                                <Th className="!text-secondary">AVG Heart rate</Th>
                                <Th className="!text-secondary">min Heart rate</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((session) => (
                                <Tr className="hover:cursor-pointer hover:bg-yellow-600 hover:text-xl hover:font-bold hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/sessions/${session.id}`)}>
                                    <Td>{session.id}</Td>
                                    <Td>{session.patientid}</Td>
                                    <Td>{session.max_heart_rate}</Td>
                                    <Td>{session.avg_heart_rate}</Td>
                                    <Td>{session.min_heart_rate}</Td>
                                </Tr>
                                ))}
                            </Tbody>
                        </Table> 
                    </>
    )
}