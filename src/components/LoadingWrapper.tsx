import { useState, useEffect, type ReactNode } from 'react';
import { Loading, Cursor } from 'animal-island-ui';

interface Props {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Cursor>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Loading active={loading} />
        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
          {children}
        </div>
      </div>
    </Cursor>
  );
}
