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
