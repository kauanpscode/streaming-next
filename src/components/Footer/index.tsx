import { FooterStyle } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p>&copy; {new Date().getFullYear()} kauanps. Todos os direitos reservados.</p>
    </FooterStyle>
  );
};

export default Footer;
