import { Title } from 'animal-island-ui/es/components/Title/Title.js';
import { Card } from 'animal-island-ui/es/components/Card/Card.js';

const skillGroups = [
  {
    category: 'Backend',
    color: 'app-blue' as const,
    pattern: 'none' as const,
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'SQLModel', 'OAuth2 / JWT'],
  },
  {
    category: 'Frontend',
    color: 'app-yellow' as const,
    pattern: 'none' as const,
    skills: ['React', 'React Native', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    color: 'app-teal' as const,
    pattern: 'none' as const,
    skills: ['SQLite', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase'],
  },
  {
    category: 'AI / ML',
    color: 'purple' as const,
    pattern: 'none' as const,
    skills: ['Multimodal LLM Integration', 'Prompt Engineering', 'Gemini API', 'OpenAI API'],
  },
  {
    category: 'Tools & DevOps',
    color: 'app-orange' as const,
    pattern: 'none' as const,
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'OpenCode', 'Claude Code'],
  },
];

export default function ToolShop() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title size="large" color="app-pink">
          Skills & Tools
        </Title>
        <p
          style={{
            color: '#725d42',
            fontSize: 17,
            lineHeight: 1.6,
            margin: '12px 0 24px',
          }}
        >
          The technologies I work with every day.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {skillGroups.map((group) => (
          <Card key={group.category} color={group.color}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#794f27',
                marginBottom: 12,
                letterSpacing: '0.02em',
              }}
            >
              {group.category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#725d42',
                    background: 'rgba(255,255,255,0.55)',
                    padding: '5px 14px',
                    borderRadius: 50,
                    border: '1.5px solid rgba(114,93,66,0.12)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
