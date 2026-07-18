import { Title, Typewriter, Button } from 'animal-island-ui';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function WelcomeCenter() {
  return (
    <section
      id="welcome"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <Title size="large" color="app-teal">
          Rosanne Vázquez
        </Title>
      </div>

      <div style={{ fontSize: 22, margin: '16px 0 32px', minHeight: 50, maxWidth: 600 }}>
        <Typewriter speed={70}>
          <span style={{ color: '#794f27', fontWeight: 700 }}>
            Software Engineer · React · TypeScript · Python · AI
          </span>
        </Typewriter>
      </div>

      <p
        style={{
          maxWidth: 580,
          color: '#725d42',
          fontSize: 17,
          lineHeight: 1.7,
          marginBottom: 40,
          fontWeight: 500,
        }}
      >
        Building meaningful web and mobile applications across the full stack.
        From responsive interfaces to AI-powered backends — turning complex
        problems into elegant, user-friendly solutions.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Button type="primary" size="large" onClick={() => scrollTo('experience')}>
          Explore My Work
        </Button>
        <Button
          type="default"
          size="large"
          onClick={() => scrollTo('contact')}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
