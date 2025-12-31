import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from './component/loading';
// import Getstart from './component/Getstart';
// import Heroslide from './component/Heroslide';
import Header from "./component/Header";
import Schedule from "./pages/Schedule";
import Loading from "./component/loading";
import Getstart from "./component/Getstart";
import Heroslide from "./component/Heroslide";
import BrowseSeries from "./component/BrowseSeries";
import MobileLogin from "./component/MobileLogin";
import VerifyOtp from "./component/VerifyOtp";
import LiveUpc from "./component/LiveUpc";
import HighlightsSlider from "./component/HighlightsSlider";
import Main from "./container/Main";
import MatchDetails from "./component/MatchDetails";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/MobileLogin" element={<MobileLogin />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />        
          <Route path="/getstart" element={<Getstart />} />

          <Route path="/main" element={<Main />} />
          <Route path="/LiveUpc" element={<LiveUpc />} />
          <Route path="/HighlightsSlider" element={<HighlightsSlider />} />
          <Route path="/slide" element={<Heroslide />} />
          <Route path="/browse" element={<BrowseSeries />} />
          <Route path="/matchdetail" element={<MatchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
