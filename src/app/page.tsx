import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <PortfolioSection/>
      <AboutSection/>
      <ProjectSection/>
    </div>
  );
}
