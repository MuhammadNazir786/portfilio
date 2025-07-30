import Hero from "./portfilio/Hero";
import Navbar from "./portfilio/Navbar";
import profil from "./icons/mys2.png";
import Cards from "./portfilio/Cards";
import AboutSection from "./portfilio/AboutSection";
import OurProjects from "./portfilio/OurProjects";
import Services from "./portfilio/Services";
import ContactUs from "./portfilio/ContactUs";
import SkillParent from "./portfilio/SkillParent";
import "./App.css"
import Footer from "./portfilio/Footer";


const App = () => {
  const data = {
    name: "Mohammad Nazir Zarifi",
    title: "Front End Developer & UI/UX Designer",
    description:
      "Front-End Developer passionate about crafting responsive and intuitive user interfaces. Skilled in HTML, CSS, JavaScript, and modern frameworks like React. Experienced in building pixel-perfect Committed to delivering exceptional user experiences through innovative solutions and best practices in web development.",
    imageUrl: profil, // Replace with your image URL
  };

 

// Then use it like this


  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Cards />
      <AboutSection />
      <OurProjects />
      <SkillParent/>
      <Services />
      <ContactUs />
      <Footer/>
    </>
  );
};

export default App;
