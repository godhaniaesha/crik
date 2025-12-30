import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loading from './component/loading';
// import Getstart from './component/Getstart';
// import Heroslide from './component/Heroslide';
import Header from './component/Header';
import Schedule from './pages/Schedule';


function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>

          {/* Loading Page */}
          {/* <Route path="/" element={<Loading />} /> */}
          {/* <Route path="/getstart" element={<Getstart />} />
        <Route path="/slide" element={<Heroslide />} /> */}
          <Route path="/schedule" element={<Schedule />} />

        <Route path="/MobileLogin" element={<MobileLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/LiveUpc" element={<LiveUpc />} />
        <Route path="/HighlightsSlider" element={<HighlightsSlider />} />
  



          {/* Future routes example */}
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

