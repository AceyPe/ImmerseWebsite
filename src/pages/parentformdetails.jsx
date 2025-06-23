import { Text } from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router";
// import { DataViewer } from "../components/dashboard/dataviewer";
import { getPatientById, getParentFormById, getParentById } from "../api/api";
import { ReturnButtons } from "../components/retrunButtons";
// import { Input } from "@chakra-ui/react";

export const ParentFormsDetails = () => {
    const location = useLocation();
    const formId = location.pathname.split("/")[3];

    const [formData, setFormData] = useState(null);
    const [patientData, setPatientData] = useState(null);
    const [parentData, setParentData] = useState(null);

    const getFormData = async () => {
        const formData = await getParentFormById(formId);
        console.log(formData)
        if (formData) {
            
            setFormData(formData.form);
            const patientData = await getPatientById(formData.form.patientid);
            console.log(patientData.patient)
            if (patientData) {
                setPatientData(patientData.patient);
            }
            const parentData = await getParentById(formData.form.parentid);
            console.log(parentData);
            if (parentData) {
                setParentData(parentData.parent);
            }
            
        }
    };

    useEffect(() => {
        getFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <section className="flex flex-col m-40 h-[700px] gap-20">
            <ReturnButtons />
            <Text className="font-bold self-start text-2xl">Details of fear form with Id: <span className="text-secondary">{formId}</span></Text>
            {formData ? (
                <div className="flex flex-col gap-4 w-[1200px]">
                    <div className="grid grid-cols-3">
                        <div className="flex gap-2"> 
                            <Text className="font-bold ">patient ID:</Text>
                            <Text>{formData.patientid}</Text>
                            <Link to={`/dashboard/patients/${formData.patientid}`}><Text>(more info)</Text></Link>
                        </div>
                        <div className="flex gap-2"> 
                            <Text className="font-bold ">parent ID:</Text>
                            <Text>{parentData.id}</Text>
                        </div>
                    </div>
                    <Text className="font-bold self-start text-2xl">Patient details:</Text>
                    {patientData &&
                        <div className="grid grid-cols-3">        
                            <div className="flex gap-2"> 
                                <Text className="font-bold">Patient Name:</Text>
                                <Text>{patientData.name}</Text> 
                            </div>
                            <div className="flex gap-2"> 
                                <Text className="font-bold">Patient Age:</Text>
                                <Text>{patientData.age}</Text> 
                            </div>
                        </div>
                    }

                    <Text className="font-bold self-start text-2xl">Parent details:</Text>
                    {parentData &&
                        <div className="grid grid-cols-3">        
                            <div className="flex gap-2"> 
                                <Text className="font-bold">Parent Name:</Text>
                                <Text>{parentData.name}</Text> 
                            </div>
                            <div className="flex gap-2"> 
                                <Text className="font-bold">Parent Age:</Text>
                                <Text>{parentData.age}</Text> 
                            </div>
                        </div>
                    }
                    <Text className="font-bold self-start text-2xl">Form answers:</Text>
                    <div className="grid grid-cols-3 ">   
                        <div className="flex gap-2">
                            <Text className="font-bold">Rating:</Text>
                            <Text>{formData.rating}</Text>
                        </div>
                        <div className="flex gap-2">
                            <Text className="font-bold">Behaviour of Patient:</Text>
                            <Text>{formData.behaviourofchild}</Text>
                        </div>
                    </div>
                </div>
            ) : (
                    <Text>Loading form data...</Text>
            )}
        </section>
    )
}