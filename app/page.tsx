import { SoundButton } from "@/components/SoundButton";

export default function Home() {
  return (
    <div className="landing-container" style={{ margin: '0 auto' }}>
      <div className="title-container">
        <h1 className="main-title">This is,<br /><strong>Christian Gleitzman</strong></h1>
        <h2 className="sub-title">Final Year CS Undergrad · Software Engineer</h2>
        <p className="personal-intro">Building reliable software, solving practical problems, and growing through experience.</p>
      </div>
      <div className="button-container">
        <SoundButton href="/about" text="Explore My Work" soundFile="btnHov" />
        <SoundButton href="/projects" text="See My Projects" soundFile="btnHov" />
        <a href="/Christian_Gleitzman.pdf" className="btn cv-button" download>
          Download CV
        </a>
      </div>
    </div>
  );
}