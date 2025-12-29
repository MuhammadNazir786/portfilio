import Navbar from "./portfilio/Navbar";
import Hero from "./portfilio/Hero";
import profil from "./icons/mys1.png";
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
    name: "Nazir Zarifi",
    title: "Full stack Developer & UI/UX Designer",
    description:
      "Full-Stack Developer passionate about building scalable, responsive, and user-friendly web applications. Skilled in Node.js, React, Next.js, HTML, and CSS. Experienced in creating clean, maintainable frontend and backend solutions, delivering exceptional user experiences through best practices in full-stack development.",
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
