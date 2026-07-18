import { Title, Card, Button, Icon, Divider, Footer } from 'animal-island-ui';

export default function Contact() {
  return (
    <>
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 24px 0',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Title size="large" color="app-pink">
            Let's Connect
          </Title>
          <p
            style={{
              color: '#725d42',
              fontSize: 17,
              lineHeight: 1.6,
              margin: '12px 0 32px',
              maxWidth: 500,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            I'm always open to new opportunities, collaborations, and interesting
            conversations. Feel free to reach out!
          </p>
        </div>

        <Card color="default" style={{ marginBottom: 40 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => window.open('https://linkedin.com/in/rosanne-vazquez-dev', '_blank')}
              >
                LinkedIn
              </Button>
              <Button
                type="default"
                size="large"
                onClick={() => window.open('https://github.com/RosanneVN', '_blank')}
              >
                GitHub
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => window.location.href = 'mailto:annevazquez05@gmail.com'}
              >
                Email Me
              </Button>
            </div>

            <Divider type="dashed-teal" />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 24,
                justifyContent: 'center',
                fontSize: 17,
                color: '#725d42',
              }}
            >
             
              <div>
                <strong>Phone:</strong>{' '}
                <span style={{ color: '#794f27' }}>+53 56775234</span>
              </div>
              <div>
                <strong>Location:</strong>{' '}
                <span style={{ color: '#794f27' }}>Havana, Cuba</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Footer type="sea" seamless />
    </>
  );
}
