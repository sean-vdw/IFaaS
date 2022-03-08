import './App.css';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Overview from './components/Overview';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Route exact path='/'>
      <Header />
      <Overview />
      <Contact />
      <Footer />
    </Route>
  );
}

export default App;
