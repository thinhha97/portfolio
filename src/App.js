import Contact from './components/Contact'
import Heading from './components/Heading'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
      <Heading />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
