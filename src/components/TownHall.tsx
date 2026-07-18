import { Card, Title, Divider } from 'animal-island-ui';

export default function TownHall() {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title size="large" color="app-blue">
          About Me
        </Title>
      </div>
      <Card color="default">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>
            I'm a <strong>Software Engenieer</strong> with professional experience building
            web and mobile applications across the frontend and backend layers.
            Skilled in <strong>React</strong>, <strong>TypeScript</strong>,{' '}
            <strong>Python</strong>, <strong>FastAPI</strong>, REST APIs, SQL databases,
            and modern application architecture.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>
            Experienced in developing responsive user interfaces, designing backend
            services, implementing authentication systems, and integrating AI-powered
            features. I'm a Computer Engineering graduate with experience working in
            remote and collaborative development environments.
          </p>
          <Divider type="dashed-teal" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 16,
            }}
          >
            {[
             
              { label: 'Languages', value: 'Spanish (Native) · English B1' },
              { label: 'Degree', value: 'B.Sc. Computer Engineering' },
              { label: 'Focus', value: 'Full Stack · AI Integration' },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#9f927d',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#794f27' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}
