import { Card, Title, Divider, Button, Icon } from 'animal-island-ui';

interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  color: 'app-pink' | 'purple' | 'app-blue' | 'app-teal' | 'app-green' | 'app-orange' | 'app-yellow' | 'app-red' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink';
  pattern: 'app-pink' | 'purple' | 'app-blue' | 'app-teal' | 'app-green' | 'app-orange' | 'app-yellow' | 'app-red' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink';
}

const projects: Project[] = [
  {
    name: 'Pasos SOS',
    description:
      'Full-stack management platform for an animal rescue NGO. Features adoption management, donation processing, volunteer coordination, and a blog — all built with a modular architecture.',
    tech: ['Astro', 'TypeScript', 'SQLite', 'Astro DB', 'REST API'],
    link: 'https://proteccionanimalpasos.com/',
    linkLabel: 'Visit Site',
    color: 'app-green',
    pattern: 'lime-green',
  },
  {
    name: 'Bubble Skin',
    description:
      'AI-powered skincare assistant that creates personalized routines based on skin type and concerns. Uses the Gemini API for intelligent ingredient analysis and product recommendations.',
    tech: ['React', 'Node.js', 'Express', 'Gemini API', 'AI'],
    link: 'https://bubbleskinapp.com/',
    linkLabel: 'Visit Site',
    color: 'app-pink',
    pattern: 'warm-peach-pink',
  },
  {
    name: 'FloraMind',
    description:
      'Modular backend application for plant identification and care. Integrates a multimodal LLM for health assessment from images, with OAuth2 authentication, Redis caching, and geolocation-based recommendations.',
    tech: ['Python', 'FastAPI', 'SQLModel', 'SQLite', 'Redis', 'OAuth2/JWT'],
    link: 'https://github.com/RosanneVN/PlantsApp',
    linkLabel: 'View on GitHub',
    color: 'app-teal',
    pattern: 'app-green',
  },
  {
    name: 'Gaia',
    description:
      'Cross-platform web and mobile application built with React Native and Next.js. Features REST API integration, Redux Toolkit state management, and complex form workflows.',
    tech: ['React', 'React Native', 'Next.js', 'Redux Toolkit', 'TypeScript'],
    color: 'app-blue',
    pattern: 'purple',
  },
];

export default function ProjectPlaza() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title size="large" color="app-orange">
          Projects
        </Title>
        <p
          style={{
            color: '#725d42',
            fontSize: 17,
            lineHeight: 1.6,
            margin: '12px 0 24px',
          }}
        >
          Real-world applications I've designed, built, and shipped.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 24,
        }}
      >
        {projects.map((p) => (
          <Card key={p.name} color={p.color} pattern={p.pattern}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                height: '100%',
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#794f27',
                }}
              >
                {p.name}
              </div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: '#725d42',
                  margin: 0,
                  flex: 1,
                }}
              >
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: '#725d42',
                      background: 'rgba(114,93,66,0.1)',
                      padding: '5px 14px',
                      borderRadius: 50,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <div style={{ marginTop: 4 }}>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => window.open(p.link, '_blank')}
                  >
                    {p.linkLabel || 'Visit'}
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
