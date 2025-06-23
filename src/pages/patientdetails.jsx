import { Text } from "@chakra-ui/react";
import React, {useState, useEffect, useMemo} from "react";
import { useLocation } from "react-router";
import { DataViewer } from "../components/dashboard/dataviewer";
import { getPatientWithUserEmailById, getSessionsByPatientId } from "../api/api";
import { Input } from "@chakra-ui/react";
import { ReturnButtons } from "../components/retrunButtons";

export const PatientDetails = () => {
    const location = useLocation();
    const patientId = location.pathname.split("/")[3];

    const [patientData, setPatientData] = useState(null);
    const [patientSessions, setPatientSessions] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const getPatientData = async () => {
        const patientData = await getPatientWithUserEmailById(patientId);
        console.log(patientData);
        if (patientData) {
            setPatientData({ patient: patientData.patient, userEmail: patientData.userEmail });
        }
    };
    
    const getPatientSessions = async () => {
        const patientSessions = await getSessionsByPatientId(patientId);
        if (patientSessions)
        {
            setPatientSessions(patientSessions.sessions);
        }
    }

    useEffect(() => {
        getPatientData();
        getPatientSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredSessions = useMemo(() => {
        if (!patientSessions) return [];
    
        const sessionsArray = Array.isArray(patientSessions)
            ? patientSessions
            : [patientSessions]; // wrap in array if it's not already an array
    
        const query = searchQuery.toLowerCase();
    
        return sessionsArray.filter((form) =>
            form.id?.toString().includes(query)
        );
    }, [searchQuery, patientSessions]);
    
    return (
        <section className="flex flex-col m-40 h-[700px] gap-10">
            <ReturnButtons />
            <Text className="font-bold self-start">Details of Patient with Id: <span className="text-secondary">{patientId}</span></Text>
            {patientData ? (
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex gap-2">
                    <Text className="2xl font-bold">Name:</Text>
                    <Text>{patientData.patient.name}</Text>
                </div>
                <div className="flex gap-2">
                    <Text className="2xl font-bold">Age:</Text>
                    <Text>{patientData.patient.age}</Text>
                </div>
                <div className="flex gap-2">
                    <Text className="2xl font-bold">Phone:</Text>
                    <Text>{patientData.patient.phone}</Text>
                </div>
                <div className="flex gap-2">
                    <Text className="2xl font-bold">Email:</Text>
                    <Text>{patientData.userEmail}</Text>
                </div>
                </div>
) : (
    <Text>Loading patient data...</Text>
            )}
            
            <Input
                type="text"
                placeholder="Search Sessions Id..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            />
            <div className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
                patientSessions? "" : "flex text-2xl justify-center items-center"
                }`}
            >
                {patientSessions ? (
                filteredSessions.length > 0 ? (
                    <DataViewer data={filteredSessions} />
                ) : (
                    <Text>No Sessions found matching your search.</Text>
                )
                ) : (
                <Text>No Sessions found for this Patient.</Text>
                )}
            </div>
        </section>
    )
}