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
        </Routes>
    </Router>
    );
}

export default App;