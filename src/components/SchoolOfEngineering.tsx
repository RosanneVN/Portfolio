import { Title, Card, Divider, Icon } from 'animal-island-ui';

export default function SchoolOfEngineering() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title size="large" color="purple">
          Education
        </Title>
        <p
          style={{
            color: '#725d42',
            fontSize: 17,
            lineHeight: 1.6,
            margin: '12px 0 24px',
          }}
        >
          Where it all began.
        </p>
      </div>
      <Card color="default">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#889df0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 24,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            🎓
          </div>
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#794f27',
              }}
            >
              B.Sc. in Computer Engineering
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: '#725d42',
                marginTop: 4,
              }}
            >
              University of Informatic Science
            </div>
            <div
              style={{
                fontSize: 17,
                color: '#9f927d',
                marginTop: 2,
              }}
            >
              Havana, Cuba · Graduated July 2025
            </div>
            <Divider type="dashed-teal" />
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#725d42', margin: '8px 0 0' }}>
              A comprehensive engineering degree covering software development,
              algorithms, databases, networking, and computer architecture —
              with a focus on building practical, real-world applications.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
