import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './component/loading';
import Getstart from './component/Getstart';
import Heroslide from './component/Heroslide';
import BrowseSeries from './component/BrowseSeries';


function App() {
  return (
    <Router>
      <Routes>
        {/* Loading Page */}
        <Route path="/" element={<Loading />} />
        <Route path="/getstart" element={<Getstart />} />
        <Route path="/slide" element={<Heroslide />} />
        <Route path="/browse" element={<BrowseSeries />} />


        {/* Future routes example */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
