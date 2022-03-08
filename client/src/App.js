import './App.css';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Route exact path='/'>
        <Header />
      </Route>
      <Route exact path='/'>
        <Contact />
      </Route>
      <Route path='/'>
        <Footer />
      </Route>
    </>
  );
}

export default App;
