import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from './component/loading';
// import Getstart from './component/Getstart';
// import Heroslide from './component/Heroslide';
import "./style/x_style.css";
import "./style/z_style.css";
import Getstart from "./component/Getstart";
import MobileLogin from "./component/MobileLogin";
import VerifyOtp from "./component/VerifyOtp";
import Layout from "./Layout";


function App() {
  return (
    <Router>
      <Routes>
        {/* No Header / Footer routes */}
        <Route path="/MobileLogin" element={<MobileLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/getstart" element={<Getstart />} />

        {/* All other routes */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}


export default App;
