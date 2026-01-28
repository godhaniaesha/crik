import React from 'react'
import { Route, Routes, useLocation } from 'react-router';
import LiveUpc from "./component/LiveUpc";
import HighlightsSlider from "./component/HighlightsSlider";
import Main from "./container/Main";
import MatchDetails from "./component/MatchDetails";
import Search from "./component/Search";
import Series from "./component/Series";
import MySpace from "./pages/MySpace";
import AccountSettings from "./pages/AccountSettings";
import SeariesDetail from "./component/SeariesDetail";
import Footer from "./component/Footer";
import Heroslide from "./component/Heroslide";
import BrowseSeries from "./component/BrowseSeries";
import Header from "./component/Header";
import Schedule from "./pages/Schedule";
import Loading from "./component/loading";

export default function Layout() {
  const location = useLocation();

  // Routes where Header & Footer should be hidden
  const hideHeaderFooter = [
    "/MobileLogin",
    "/verify-otp",
    "/getstart",
  ].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/main" element={<Main />} />
          <Route path="/LiveUpc" element={<LiveUpc />} />
          <Route path="/HighlightsSlider" element={<HighlightsSlider />} />
          <Route path="/slide" element={<Heroslide />} />
          <Route path="/browse" element={<BrowseSeries />} />
          <Route path="/matchdetail" element={<MatchDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
          <Route path="/seariesdetail" element={<SeariesDetail />} />
          <Route path="/profile" element={<MySpace />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}
