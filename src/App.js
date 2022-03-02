import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';

import Contact from './components/Contact';

const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Hero />
            <Work />
            <Skills />
            <About />
            <Contact />
        </div>
    );
};

export default App;
