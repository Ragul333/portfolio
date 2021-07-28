import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Timeline } from './components/Timeline';

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth={true} />
    {/*   <Navbar/> */}
      <Home/>
      <About/>
      <Timeline/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
