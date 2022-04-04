import Nav from './components/Nav';
import Hero from './components/Hero';
import Block from './components/Block';
import Work from './components/Work';
import Tech from './components/Tech';
// import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skull from './components/Skull';

const App = () => {
    return (
        <div className='App'>
            <Skull />
            <Nav />
            <Hero />
            <Block />
            <Work />
            <Tech />
            {/* <Skills /> */}
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
