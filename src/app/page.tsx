import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SplineBackground from "@/components/SplineBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      {/* Spline 3D background - limited to top section */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        <SplineBackground />
      </div>

      {/* Glass floating navbar */}
      <Navigation />

      {/* All content sections */}
      <HeroSection />
    </div>
  );
}
