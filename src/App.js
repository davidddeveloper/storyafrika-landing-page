import logo from './logo.svg';
import Navigation from './components/Navigation';
import Home from './screens/Home'
import FixedNav from './components/FixedNav';
import OurStory from './screens/OurStory';
import Theme from './theme';
import AboutUs from './screens/AboutUs';
import ForWriters from './screens/ForWriters';

function App() {
  return (
    <Theme>
      <Navigation />
      <OurStory />
      <FixedNav />
    </Theme>
  );
}

export default App;
