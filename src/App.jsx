import Hero from "./components/Hero.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SlidePage from "./components/SlidePage.jsx";
import TopPicks from "./components/TopPicks.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <SlidePage />
      <TopPicks />
      <HeroSection />
    </div>
  );
}

export default App;
