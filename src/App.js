import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './screens/Home'
import FixedNav from './components/FixedNav';
import OurStory from './screens/OurStory';
import Theme from './theme';
import AboutUs from './screens/AboutUs';
import ForWriters from './screens/ForWriters';
import ForReaders from './screens/ForReaders';

function App() {
  return (
    <Router>
    <Theme>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/for-writers" element={<ForWriters />} />
        <Route path="/for-readers" element={<ForReaders />} />
      </Routes>
      <FixedNav />
    </Theme>
    </Router>

  );
}

export default App;
