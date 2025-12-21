import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;
    font-family: sans-serif;
  }
`;

export const Hero = styled.section<{ background: string }>`
  height: 70vh;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  width: 100%;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

export const Row = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const Description = styled.p`

`;

export const ModalHero = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px 8px 0 0;

  /* Gradiente preto vindo de baixo para fundir com o texto */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to top, #141414 10%, transparent 100%);
  }
`;

// Conteúdo que fica "por cima" do Hero
export const ModalContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  margin-top: -150px; /* Puxa para cima */
  position: relative;
  z-index: 2;
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  }
`;

export const MetaData = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  font-weight: bold;

  .match { color: #46d369; } /* Verde estilo "98% relevante" */
  .year { color: #bcbcbc; }
  .genre {
    border: 1px solid #bcbcbc;
    padding: 2px 6px;
    font-size: 0.8rem;
    color: #e5e5e5;
  }
`;

export const SeasonSelect = styled.select`
  background: #333;
  color: white;
  padding: 10px 20px;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 1.1rem;
  margin: 20px 0;
  cursor: pointer;
  outline: none;
`;

export const EpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; /* Linha separadora sutil se o fundo for cinza */
  background: #2f2f2f;
  border-radius: 6px;
  overflow: hidden;
`;

export const EpisodeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #141414;
  border-bottom: 1px solid #333;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #222;
    .play-icon { color: white; }
  }

  .number {
    font-size: 1.5rem;
    color: #d2d2d2;
    width: 30px;
  }

  .thumb {
    width: 130px;
    height: 73px;
    object-fit: cover;
    border-radius: 4px;
    background: #333;
  }

  .info {
    flex: 1;
    h4 { margin: 0 0 5px 0; color: white; font-size: 1rem; }
    p { margin: 0; color: #a3a3a3; font-size: 0.85rem; line-height: 1.4; }
  }

  .play-icon {
    font-size: 1.5rem;
    color: transparent;
    border: 2px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 480px;
  background: black;
  display: flex;
  flex-direction: column;

  video {
    width: 100%;
    height: 100%;
  }

  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
    background: rgba(0,0,0,0.7);
    border: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
  }
`;
