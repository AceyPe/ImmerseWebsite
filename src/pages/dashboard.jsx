import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext";
import { SideMenu } from "../components/dashboard/sidemenu";
import {LoadingSpinnerOverLay} from "../components/loadingSpinnerOverlay"
import {  
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getPatientById, getTherapistById, getPatientsByTherapistId } from "../api/api";


export const DashboardPage = () => {
  const [view, setView] = useState("patients");
  const { user, authLoading } = useAuth();
  const [ therapistData, setTherapistData ] = useState();
  const [ patientsData, setPatientsData ] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async() => {
    const data = await getTherapistById(user.roleId);
    console.log(data.therapist[0].name);
    if (data)
    {
      setTherapistData(data);
    }
  }

  const getPatientsData = async() => {
    const patientsData = await getPatientsByTherapistId(user.roleId);
    console.log(patientsData.patients)
    if (patientsData) {
      setPatientsData(patientsData.patients)
    }
  }
  useEffect(() => {
    setLoading(true);
    if (!authLoading)
    {
        if ((user && user.role !== "therapist") || !user) {
            navigate('/signin');
        }
      getData();
      setLoading(false);
    }
    }, [user, navigate, authLoading]);

    const renderContent = () => {
      switch (view) {
        case "fearforms":
          return (
            <div><Text>"test"</Text></div>
          );
        case "patients":
            if(!patientsData)
              getPatientsData();
            return (
              <div className="max-h-[750px]">
                <Text>Patients' Feedback Forms</Text>
                <Table className="bg-[#141e46]">
                  <Thead>
                    <Tr>
                      <Th className="!text-secondary">userId</Th>
                      <Th className="!text-secondary">name</Th>
                      <Th className="!text-secondary">age</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        1
                      </Td>
                      <Td>
                        Yahya
                      </Td>
                      <Td>
                        23
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        2
                      </Td>
                      <Td>
                        Ahmed
                      </Td>
                      <Td>
                        22
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </div>
            );
        case "sessions":
            return <Text>Sessions Summary</Text>;
        case "parents":
            return <Text>Parents' Feedback</Text>;
        default:
            return <Text>Select a section</Text>;
        }
    };
    


  return loading? <LoadingSpinnerOverLay loading={loading} /> : (
    <>
      <Flex height="100vh">
        {/* Sidebar */}
        <Box
          width="80px"
          bg="#141e46"
          p={4}
          boxShadow="md"
        >
          <SideMenu setView={setView}/>
        </Box>

        {/* Main content area */}
        <Box flex="1" pt={2}>
          <div className="flex items-center justify-center bg-[#141e46] h-10">
            {therapistData && <Text className="font-bold text-2xl">
              Welcome {therapistData.therapist[0].name}
            </Text>}
          </div>
          <div className="m-8">
            {renderContent()}
          </div>
        </Box>
      </Flex>
    </>
  );
};