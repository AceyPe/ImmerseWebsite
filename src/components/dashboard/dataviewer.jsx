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

    return type === "patients" ? (
        <>
            <Table>
                <Thead>
                    <Tr className="w-full">
                    <Th className="!text-secondary">userId</Th>
                    <Th className="!text-secondary">name</Th>
                    <Th className="!text-secondary">age</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((patient) => (
                    <Tr className="hover:cursor-pointer group" onClick={() => navigate(`/dashboard/patients/${patient.id}`)}>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patient.id}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patient.name}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patient.age}</Td>
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
                    <Tr className="hover:cursor-pointer group" onClick={() => navigate(`/dashboard/fearforms/${patientFeedback.id}`)}>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.id}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.patientname}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.rating}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.ratingreason? patientFeedback.ratingreason : "none"}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.feeling}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.stresslevel}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.struggle}</Td>
                        <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{patientFeedback.sessionFeedback}</Td>
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
                            <Tr className="hover:cursor-pointer hover:text-xl hover:scale-[1.02] hover:text-secondary hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/parentforms/${parentFeedback.id}`)}>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.id}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.parentname}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.parentid}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.patientname}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.patientid}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.rating}</Td>
                                <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{parentFeedback.behaviourofchild}</Td>
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
                                <Tr className="hover:cursor-pointer hover:text-xl hover:scale-[1.02] hover:text-secondary hover:ease-in-out hover:duration-300 hover:transition" onClick={() => navigate(`/dashboard/sessions/${session.id}`)}>
                                    <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{session.id}</Td>
                                    <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{session.patientid}</Td>
                                    <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{session.max_heart_rate}</Td>
                                    <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{session.avg_heart_rate}</Td>
                                    <Td className="group-hover:text-xl group-hover:font-bold group-hover:scale-[1.02] group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 group-hover:transition">{session.min_heart_rate}</Td>
                                </Tr>
                                ))}
                            </Tbody>
                        </Table> 
                    </>
    )
}