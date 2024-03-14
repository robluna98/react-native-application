import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import ProjectExperience from './components/Project/Project';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

const App = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <ProjectExperience />
        <WorkExperience />
        <Contact />
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default App;
