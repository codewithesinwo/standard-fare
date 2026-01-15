import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Locations from "./components/Locations.jsx";
import Partnerwithus from "./components/Partnerwithus.jsx";
import SlidePage from "./components/SlidePage.jsx";
import TopPicks from "./components/TopPicks.jsx";
import Login from "./components/Login.jsx";
import WebLayout from "./components/WebLayout.jsx";

function App() {
  return (
    <>
      {/* <div className="App">
        <Header />
        <Hero />
        <SlidePage />
        <TopPicks />
        <HeroSection />
        <Locations />
        <Partnerwithus />
        <Footer />
        <Login/>
      </div> */}
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <SlidePage />
                <TopPicks />
                <HeroSection />
                <Locations />
                <Partnerwithus />
                <Footer />{" "}
              </>
            }
          />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
