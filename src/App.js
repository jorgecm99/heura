import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import LandingOne from './Componentes/LandingOne/LandingOne';
import LandingTwo from './Componentes/LandingTwo/LandingTwo';
import LandingThree from './Componentes/LandingThree/LandingThree';
import Header from './Componentes/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <LandingOne />
      <LandingTwo />
      <LandingThree />
    </Router>
      
  );
}

export default App;
