import { SoundButton } from "@/components/SoundButton";
import { HeroSigil } from "@/components/HeroSigil";
import { CredibilityPanel } from "@/components/CredibilityPanel";

export default function Home() {
  return (
    <div className="hero-shell">
      <HeroSigil />

      <div className="hero-copy">
        <h1 className="main-title"><strong>Christian Gleitzman</strong></h1>
        <p className="sub-title">Final-Year CS Student &middot; Programmer RA / Technical Lead</p>
        <p className="personal-intro">
          Final-year Computer Science student at the University of Southampton, currently Technical
          Lead on a cloud platform for teleagriculture sensor data.
        </p>
        <div className="button-container">
          <SoundButton href="/projects" text="View Projects" soundFile="btnHov" />
          <a href="/Christian_Gleitzman.pdf" className="btn btn-secondary" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <CredibilityPanel />
      </div>
    </div>
  );
}
