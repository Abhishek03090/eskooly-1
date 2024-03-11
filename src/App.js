import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admissionletter from './Componants/Admission-letter/Admission-letter';
import Header from './Componants/Header/Header';
import More from './Componants/Header/More/More';
import Report from './Componants/Report/Report';
import TimeTable from './Componants/Time-Table/TimeTable';
import OnlineStore from './Componants/OnlineStore/OnlineStore';
import TestResult from './Componants/TestResult/TestResult';
import ExamResult from './Componants/ExamResult/ExamResult';
import Message from './Componants/Message/Message';
import AccountSetting from './Componants/AccountSetting/AccountSetting';
import Login from './Componants/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const isSmallScreen = window.innerWidth <= 760;

  const handleMoreClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login setIsLoggedIn={handleLoginSuccess} />
      </div>
    );
  } else {
    return (
      <div className="App">
       
          <Header onMoreClick={handleMoreClick} />
          {showMoreContent && <More />}
          {!isSmallScreen && <More />}

          <Routes>
            <Route path="/Admission-letter" element={<Admissionletter />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/report" element={<Report />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/onlinestore" element={<OnlineStore />} />
            <Route path="/Exam-letter" element={<ExamResult />} />
            <Route path="/message" element={<Message />} />
            <Route path="/accountsettings" element={<AccountSetting />} />
          </Routes>
      
        <div className="slide-in"></div>
      </div>
    );
  }
}

export default App;