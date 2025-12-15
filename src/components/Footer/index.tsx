// src/components/Footer/index.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Streaming-Next. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;