import './App.css';
import * as React from 'react'
import { Layout } from './components/layout.jsx'
import { HomePage } from './pages/homepage';
import { ParentFeedBackPage } from './pages/parentfeedbackPage';
import { FearAnalysisPage } from './pages/fearanalysispage';
import { SigninPage } from './pages/signinpage';
import { SignupPage } from './pages/signuppage';
import { DashboardPage } from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about.jsx';
import { Contact } from './pages/contact.jsx';
import { PatientDetails } from './pages/patientdetails.jsx';
import { SessionDetails } from './pages/sessiondetails.jsx';
import { FearFormsDetails } from './pages/fearanalysisdetails.jsx';
import { ParentFormsDetails } from './pages/parentformdetails.jsx';

//DEFAULT SPAGATTI CODE!
function App() {

  return (
    <Router>
      <Routes>
          {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/parentfeedback' element={<ParentFeedBackPage />} />
          <Route path='/fearanalysis' element={<FearAnalysisPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
          {/* Routes without layout (no navbar or footer) */}
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='dashboard/patients/:id' element={ <PatientDetails />} />
        <Route path='dashboard/sessions/:id' element={ <SessionDetails />} />
        <Route path='dashboard/fearforms/:id' element={ <FearFormsDetails />} />
        <Route path='dashboard/parentforms/:id' element={ <ParentFormsDetails />} />
      </Routes>
    </Router>
    );
}

export default App;