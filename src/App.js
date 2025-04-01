
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import {NavBar} from './components/NavBar';
import {About} from './components/About';
import {Experience} from './components/Experience';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
      

    </div>
  );
}

export default App;
