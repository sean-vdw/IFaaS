import './App.css';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Overview from './components/Overview';
import Macro from './components/Macro';
import Screener from './components/Screener';
import Hedge from './components/Hedge';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Route exact path='/'>
      <Header />
      <Overview />
      <Macro />
      <Screener />
      <Hedge />
      <Contact />
      <Footer />
    </Route>
  );
}

export default App;
