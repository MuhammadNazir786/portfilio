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
    title: "Full Stack Developer & UI/UX Designer",
    description:
      "Designing intuitive and visually stunning user interfaces, I bring ideas to life with responsive and user-centered designs! Let's build digital solutions that captivate and inspire!",
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
