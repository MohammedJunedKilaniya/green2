// src/App.jsx

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroSection";
import TrendingCard from "./components/TrendingCard";
import Topselling from "./components/Topselling";
import Review from "./components/Review";
import O2section from "./components/O2section";
import Footer from "./components/footer";

function App() {
  return (
    <main className="relative  min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroBanner />
<TrendingCard />
<Topselling/>
<Review/>
<O2section/>
<Footer/>
    </main>
  );
}

export default App;
