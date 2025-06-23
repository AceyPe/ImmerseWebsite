import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { SideMenu } from "../components/dashboard/sidemenu";
import { LoadingSpinnerOverLay } from "../components/loadingSpinnerOverlay";
import {
  Box,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import {
  getTherapistById,
  getPatientsByTherapistId,
  getPatientsFeedbackByTherapistId,
  getParentsFeedbackByTherapistId,
  getSessionsByTherapistId
} from "../api/api";
import { DataViewer } from "../components/dashboard/dataviewer";

export const DashboardPage = () => {
  const { user, authLoading } = useAuth();
  const [therapistData, setTherapistData] = useState();
  const [patientsData, setPatientsData] = useState();
  const [formsData, setFormsData] = useState();
  const [sessionsData, setSessionsData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const intialView = location.pathname.replace("/", "");
  const [view, setView] = useState(intialView);

  const handleSetView = (newView) => {
    setView(newView);
    navigate(`?view=${newView}`, { replace: true });
  }

  const getData = async () => {
    const data = await getTherapistById(user.id);
    if (data) {
      setTherapistData(data);
    }
  };

  const getPatientsData = async () => {
    const patientsData = await getPatientsByTherapistId(user.id);
    if (patientsData) {
      setPatientsData(patientsData.patients);
    }
  };

  const getFearForms = async () => {
    const fearFormsData = await getPatientsFeedbackByTherapistId(user.id);
    if (fearFormsData) setFormsData(fearFormsData.forms);
  };

  const getParentForms = async () => {
    const parentFormsData = await getParentsFeedbackByTherapistId(user.id);
    if (parentFormsData) setFormsData(parentFormsData.forms);
  };

  const getSessionsData = async () => {
    const sessionData = await getSessionsByTherapistId(user.id);
    if (sessionData) setSessionsData(sessionData.sessions);
  }

  useEffect(() => {
    setLoading(true);
    if (!authLoading) {
      if ((user && user.role !== "therapist") || !user) {
        navigate("/signin");
      }
      getData();

      if (view === "patients" && !patientsData) {
        getPatientsData();
      } else if (view === "fearform") {
        getFearForms();
      } else if (view === "parents") {
        getParentForms();
      } else if (view === "sessions") {
        getSessionsData();
      }

      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, view, authLoading]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentView = params.get("view");
    if (currentView) {
      setView(currentView);
    }
  }, [location.search]);

  const filteredPatients = useMemo(() => {
    if (!patientsData) return [];
  
    const patientsArray = Array.isArray(patientsData) ? patientsData : [patientsData];
    const query = searchQuery.toLowerCase();
  
    return patientsArray.filter((patient) =>
      patient.name.toLowerCase().includes(query) ||
      patient.id.toString().toLowerCase().includes(query)
    );
  }, [searchQuery, patientsData]);
  
  const filteredSessions = useMemo(() => {
    if (!sessionsData) return [];
  
    const sessionsArray = Array.isArray(sessionsData) ? sessionsData : [sessionsData];
    const query = searchQuery.toLowerCase();
  
    return sessionsArray.filter((session) =>
      session.id.toString().includes(query) ||
      session.patientid.toString().includes(query)
    );
  }, [searchQuery, sessionsData]);
  
  const filteredFearForms = useMemo(() => {
    if (!formsData || view !== "fearform") return [];
  
    const formsArray = Array.isArray(formsData) ? formsData : [formsData];
    const query = searchQuery.toLowerCase();
  
    return formsArray.filter((form) =>
      form.id?.toString().includes(query) || // Form ID
      form.patientId?.toString().includes(query) || // Patient ID
      form.patientName?.toLowerCase().includes(query) // Patient Name
    );
  }, [searchQuery, formsData, view]);
  
  const filteredParentForms = useMemo(() => {
    if (!formsData || view !== "parents") return [];
  
    const formsArray = Array.isArray(formsData) ? formsData : [formsData];
    const query = searchQuery.toLowerCase();
  
    return formsArray.filter((form) =>
      form.parentName?.toLowerCase().includes(query) ||
      form.patientName?.toLowerCase().includes(query) ||
      form.id?.toString().includes(query)
    );
  }, [searchQuery, formsData, view]);
  

  const renderContent = () => {
    switch (view) {
      case "fearform":
        return (
          <div className="flex flex-col gap-10 max-h-[840px]">
            <Text className="text-2xl font-bold">Patient's Feedback</Text>
            <Input
              type="text"
              placeholder="Search by patient name, id or session id..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            />
            <div
              className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
                formsData ? "" : "flex text-2xl justify-center items-center"
              }`}
            >
              {formsData ? (
                filteredFearForms.length > 0 ? (
                  <DataViewer data={filteredFearForms} type="patient feedback" />
                ) : (
                  <Text>No feedback found matching your search.</Text>
                )
              ) : (
                <Text>No fear analysis feedback found yet.</Text>
              )}
            </div>
          </div>
        );

      case "patients":
        return (
          <div className="flex flex-col gap-10 max-h-[840px]">
            <Text className="text-2xl font-bold">Patients related to you</Text>
            <Input
              type="text"
              placeholder="Search patients by name or Id..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            />
            <div
              className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
                patientsData
                  ? ""
                  : "flex text-2xl justify-center items-center"
              }`}
            >
              {patientsData ? (
                filteredPatients.length > 0 ? (
                  <DataViewer data={filteredPatients} type={"patients"} />
                ) : (
                  <Text>No patients found matching your search.</Text>
                )
              ) : (
                <Text>There are no patients related to you yet!</Text>
              )}
            </div>
          </div>
        );

      case "sessions":
        return (
          <div className="flex flex-col gap-10 max-h-[840px]">
            <Text className="text-2xl font-bold">Sessions related to you</Text>
            <Input
              type="text"
              placeholder="Search sessions by Id or patient's Id..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            />
            <div
              className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
                sessionsData
                  ? ""
                  : "flex text-2xl justify-center items-center"
              }`}
            >
              {sessionsData ? (
                filteredSessions.length > 0 ? (
                  <DataViewer data={filteredSessions} type={"sessions"} />
                ) : (
                  <Text>No sessions found matching your search.</Text>
                )
              ) : (
                <Text>There are no sessions related to you yet!</Text>
              )}
            </div>
          </div>
        );

      case "parents":
        return (
          <div className="flex flex-col gap-10 max-h-[840px]">
            <Text className="text-2xl font-bold">Parents' Feedback</Text>
            <Input
              type="text"
              placeholder="Search by parent or patient name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md !border-2 text-white w-full max-w-md"
            />
            <div
              className={`max-h-[800px] overflow-y-auto bg-[#141e46] h-[800px] ${
                formsData ? "" : "flex text-2xl justify-center items-center"
              }`}
            >
              {formsData ? (
                filteredParentForms.length > 0 ? (
                  <DataViewer data={filteredParentForms} type="parent feedback" />
                ) : (
                  <Text>No feedback found matching your search.</Text>
                )
              ) : (
                <Text>No parent feedback submitted yet.</Text>
              )}
            </div>
          </div>
        );
      default:
        return <Text>Select a section from the menu</Text>;
    }
  };

  return loading ? (
    <LoadingSpinnerOverLay loading={loading} />
  ) : (
    <Flex height="100vh" mt={4}>
      {/* Sidebar */}
      <Box width="80px" bg="#141e46" p={4} boxShadow="md">
        <SideMenu setView={handleSetView} />
      </Box>

      {/* Main content area */}
      <Box flex="1" pt={2}>
        <div className="flex items-center justify-center bg-[#141e46] h-14">
          {therapistData && (
            <Text className="font-bold text-2xl">
              Welcome {therapistData.therapist[0].name}
            </Text>
          )}
        </div>
        <div className="m-8">{renderContent()}</div>
      </Box>
    </Flex>
  );
};
