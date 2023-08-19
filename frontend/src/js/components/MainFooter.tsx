import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const MainFooter = () => {
  const navigate = useNavigate();
  const onClickMenu = (url: string) => {
    navigate(url);
  };

  return (
    <Container>
      <ImageContainer onClick={() => onClickMenu('/')}>
        <img src={'/images/house_W_1.png'} style={{ width: '30px', height: '30px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/challenge')}>
        <img src={'/images/challenge_W_1.png'} style={{ width: '30px', height: '30px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/feed')}>
        <img src={'/images/feed_W_1.png'} style={{ width: '30px', height: '30px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/rank')}>
        <img src={'/images/rank_W_1.png'} style={{ width: '30px', height: '30px' }} />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  background-color: #24a3ff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ImageContainer = styled.div`
  padding: 0 31px;
`;
