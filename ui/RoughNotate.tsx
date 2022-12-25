import { useEffect, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';

export default function RoughNotate({
  type = 'underline',
  color = 'blue',
  children,
}: {
  type?: 'underline' | 'box' | 'circle' | 'highlight';
  color?: string;
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  if (width < 768) return <>{children}</>;

  return (
    <RoughNotation
      type={type}
      show
      color={color}
      animate
      animationDuration={3000}
    >
      {children}
    </RoughNotation>
  );
}
