import Hero from "./components/Hero.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Locations from "./components/Locations.jsx";
import SlidePage from "./components/SlidePage.jsx";
import TopPicks from "./components/TopPicks.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <SlidePage />
      <TopPicks />
      <HeroSection />
      <Locations />
    </div>
  );
}

export default App;
