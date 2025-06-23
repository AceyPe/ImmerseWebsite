import { Text } from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router";
// import { DataViewer } from "../components/dashboard/dataviewer";
import { getSessionById } from "../api/api";
import { ReturnButtons } from "../components/retrunButtons";
// import { Input } from "@chakra-ui/react";

export const SessionDetails = () => {
    const location = useLocation();
    const sessionId = location.pathname.split("/")[3];

    const [sessionData, setSessionData] = useState(null);
    // const [searchQuery, setSearchQuery] = useState('');

    const getSessionData = async () => {
        const sessionData = await getSessionById(sessionId);
        if (sessionData) {
            setSessionData(sessionData.sessionData);
        }
    };

    useEffect(() => {
        getSessionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const filteredSessions = useMemo(() => {
    //     if (!patientSessions) return [];
    //     return patientSessions.filter((form) => {
    //     const query = searchQuery.toLowerCase();
    //     return (
    //         form.id?.toString().includes(query)
    //     );
    //     });
    // }, [searchQuery, patientSessions]);
    
    return (
        <section className="flex flex-col m-40 h-[700px] gap-10">
            <ReturnButtons />
            <Text className="font-bold self-start">Details of Session with Id: <span className="text-secondary">{sessionId}</span></Text>
            {sessionData ? (
                <div className="flex flex-col gap-4 ">
                    <div className="flex gap-2"> 
                        <Text className="2xl font-bold">patientId:</Text>
                        <Text>{sessionData.patientid}</Text>
                        <Link to={`/dashboard/patients/${sessionData.patientid}`}><Text>(more info)</Text></Link>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex gap-2">
                            <Text className="2xl font-bold">MIN-Heartrate:</Text>
                            <Text>{sessionData.min_heart_rate}</Text>
                        </div>
                        <div className="flex gap-2">
                            <Text className="2xl font-bold">AVG-Heartrate:</Text>
                            <Text>{sessionData.avg_heart_rate}</Text>
                        </div>
                        <div className="flex gap-2">
                            <Text className="2xl font-bold">MAX-Heartrate:</Text>
                            <Text>{sessionData.max_heart_rate}</Text>
                        </div>    
                    </div>
                    <div className={`max-h-[700px] overflow-y-auto bg-[#141e46] h-[800px] ${
                        sessionData ? "" : "flex text-2xl justify-center items-center"
                        }`}
                    >
                        {/* {patientSessions ? (       
                            filteredSessions.length > 0 ? (
                                <DataViewer data={filteredSessions} />
                            ) : (
                                    <Text>No Sessions found matching your search.</Text>   
                                )
                        ) : (
                                <Text>No Sessions found for this Patient.</Text>
                        )} */}
                    </div> 
            </div>
            ) : (
                    <Text>Loading patient data...</Text>
            )}
            {/* <Input
                type="text"
                placeholder="Search Sessions Id..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            /> */}
            {/* <div className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
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
            </div> */}
        </section>
    )
}