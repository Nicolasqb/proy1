import { CustomNavbar } from "./components/CustomNavbar";
import './App.css';
import Section from "./components/Section";
import MyCarousel from "./components/Carousel";
import VideoComponent from "./components/VideoComponent";
import ContactForm from "./components/ContactForm";
import Credits from "./components/Credits";
import SecondSection from "./components/SecondSection";
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Section />
      <MyCarousel />
      <VideoComponent />
      <ContactForm />
      <SecondSection />
      <Credits />
      
    </div>
  );
}

export default App;
