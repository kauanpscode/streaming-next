import { FooterStyle } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p>&copy; {new Date().getFullYear()} Streaming-Next. Todos os direitos reservados.</p>
    </FooterStyle>
  );
};

export default Footer;
