import LoadingWrapper from './LoadingWrapper';
import WelcomeCenter from './WelcomeCenter';
import TownHall from './TownHall';
import WorkHistoryMuseum from './WorkHistoryMuseum';
import ProjectPlaza from './ProjectPlaza';
import SchoolOfEngineering from './SchoolOfEngineering';
import ToolShop from './ToolShop';
import Contact from './Contact';

const sectionStyle: React.CSSProperties = {
  maxWidth: 960,
  margin: '0 auto',
  padding: '80px 24px',
};

export default function App() {
  return (
    <LoadingWrapper>
      <div style={{ minHeight: '100vh' }}>
        <WelcomeCenter />
        <div style={sectionStyle} id="about">
          <TownHall />
        </div>
        <div style={{ background: 'rgba(247,243,223,0.5)' }}>
          <div style={sectionStyle} id="experience">
            <WorkHistoryMuseum />
          </div>
        </div>
        <div style={sectionStyle} id="projects">
          <ProjectPlaza />
        </div>
        <div style={{ background: 'rgba(247,243,223,0.5)' }}>
          <div style={sectionStyle} id="education">
            <SchoolOfEngineering />
          </div>
        </div>
        <div style={sectionStyle} id="skills">
          <ToolShop />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </LoadingWrapper>
  );
}
