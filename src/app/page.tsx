import Preloader from "@/components/Preloader";
import HeroScene from "@/components/HeroScene";
import AboutScene from "@/components/AboutScene";
import ExpertiseScene from "@/components/ExpertiseScene";
import TrajectoryScene from "@/components/TrajectoryScene";
import WorkScene from "@/components/WorkScene";
import CertificationsScene from "@/components/CertificationsScene";
import LabScene from "@/components/LabScene";
import ContactScene from "@/components/ContactScene";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main style={{ width: "100%", minHeight: "100vh" }}>
        <HeroScene />
        <AboutScene />
        <ExpertiseScene />
        <TrajectoryScene />
        <WorkScene />
        <CertificationsScene />
        <LabScene />
        <ContactScene />
      </main>
      <div className="noise-overlay" />
    </>
  );
}
