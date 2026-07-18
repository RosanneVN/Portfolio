import { Tabs } from 'animal-island-ui/es/components/Tabs/Tabs.js';
import { Card } from 'animal-island-ui/es/components/Card/Card.js';
import { Title } from 'animal-island-ui/es/components/Title/Title.js';
import { Divider } from 'animal-island-ui/es/components/Divider/Divider.js';
import { Button } from 'animal-island-ui/es/components/Button/Button.js';
import type { TabItem } from 'animal-island-ui';

function JobCard({
  role,
  company,
  location,
  period,
  details,
}: {
  role: string;
  company: string;
  location: string;
  
  period: string;
  details: string[];
}) {
  return (
    <Card color="default">
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#794f27',
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: '#725d42',
            marginTop: 4,
          }}
        >
          {company} · {location}
        </div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: '#9f927d',
            marginTop: 2,
          }}
        >
          {period}
        </div>
      </div>
      <Divider type="dashed-teal" />
      <ul style={{ margin: '12px 0 0', paddingLeft: 20, lineHeight: 1.8 }}>
        {details.map((d, i) => (
          <li key={i} style={{ fontSize: 17, color: '#725d42' }}>
            {d}
          </li>
        ))}
      </ul>
    </Card>
  );
}

const jobs: TabItem[] = [
  {
    key: 'pasos',
    label: 'Pasos SOS',
    children: (
      <JobCard
        role="Full Stack Developer"
        company="Pasos SOS"
        location="Havana, Cuba"
        period="Feb 2025 – Present"
        details={[
          'Designed and developed a modular full-stack management platform for an animal rescue NGO, working across frontend, backend, and database architecture.',
          'Designed and implemented 21 REST API endpoints supporting authentication, business workflows, and platform operations.',
          'Developed business logic, database models, and application workflows using Astro DB, SQLite, and TypeScript.',
          'Built responsive interfaces and administrative tools focused on usability, maintainability, and efficient user workflows.',
          'Collaborated in a remote development environment, incorporating feedback through code reviews and iterative improvements.',
        ]}
      />
    ),
  },
  {
    key: 'gaia',
    label: 'Gaia',
    children: (
      <JobCard
        role="Frontend & Mobile Developer"
        company="Gaia"
        location="Madrid, Spain"
        period="Oct 2025 – May 2026"
        details={[
          'Developed responsive web and mobile applications using React, React Native, Next.js, and TypeScript.',
          'Integrated REST APIs and implemented authentication workflows across web and mobile applications.',
          'Managed application state using Redux Toolkit and developed reusable UI components and complex forms.',
        ]}
      />
    ),
  },
  {
    key: 'floramind',
    label: 'FloraMind',
    children: (
      <JobCard
        role="Backend Developer"
        company="FloraMind (Open Source)"
        location="Personal Project"
        period="May 2026 – Present"
        details={[
          'Designed and developed a modular backend application using Python, FastAPI, SQLModel, SQLite, and Redis.',
          'Integrated a multimodal LLM for plant identification, health assessment, and personalized care recommendations based on images and text.',
          'Implemented OAuth2 authentication with JWT, geolocation-aware recommendations, and REST APIs for plant management and historical tracking.',
          'Developed automated unit and integration tests using Pytest.',
        ]}
      />
    ),
  },
  {
    key: 'bubble',
    label: 'Bubble Skin',
    children: (
      <JobCard
        role="Frontend Developer"
        company="Bubble Skin (Personal Project)"
        location="Personal Project"
        period="Oct 2025 – May 2026"
        details={[
          'Developed a personalized skincare assistant using React, Node.js, Express, and the Gemini API.',
          'Built responsive interfaces and integrated AI-powered workflows for personalized skincare recommendations.',
          'Designed and deployed a production-grade web app at bubbleskinapp.com.',
        ]}
      />
    ),
  },
];

export default function WorkHistoryMuseum() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title size="large" color="app-yellow">
          Work History
        </Title>
        <p
          style={{
            color: '#725d42',
            fontSize: 17,
            lineHeight: 1.6,
            margin: '12px 0 24px',
          }}
        >
          A tour through the places I've built, contributed to, and grown with.
        </p>
      </div>
      <Tabs items={jobs} defaultActiveKey="pasos" leafAnimation />
    </>
  );
}
