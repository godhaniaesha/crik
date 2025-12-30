import { Route, Routes } from "react-router-dom";
import "./App.css";
import MobileLogin from "./component/MobileLogin";
import VerifyOtp from "./component/VerifyOtp";
import LiveUpc from "./component/LiveUpc";
import HighlightsSlider from "./component/HighlightsSlider";

function App() {
  return (
      <Routes>
        <Route path="/MobileLogin" element={<MobileLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/LiveUpc" element={<LiveUpc />} />
        <Route path="/HighlightsSlider" element={<HighlightsSlider />} />
      </Routes>
  );
}

export default App;
