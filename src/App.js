import './App.css';
import * as React from 'react'
import { NavBar } from './components/navbar';
import { HomePage } from './pages/homepage';
import { ParentFeedBackPage } from './pages/parentfeedbackPage';
import { FearAnalysisPage } from './pages/fearanalysispage';
import { SigninPage } from './pages/signinpage';
import { SignupPage } from './pages/signuppage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//DEFAULT SPAGATTI CODE!
function App() {
  return (
    <Router>
      {/* NabBar */}
      <NavBar />
      <div className="min-h-screen content">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/parentfeedback' element={<ParentFeedBackPage /> } />
          <Route path='/fearanalysis' element={<FearAnalysisPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
      </Routes>
       </div >
    </Router>
    );
}

export default App;