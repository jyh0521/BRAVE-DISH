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
        <img src={'https://i.ibb.co/LxYwQ7L/Group-116.png'} style={{ width: '30px', height: '42px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/challenge')}>
        <img src={'https://i.ibb.co/jr0qM6t/Group-117.png'} style={{ width: '50px', height: '42px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/feed')}>
        <img src={'https://i.ibb.co/16BpRDX/Group-118.png'} style={{ width: '30px', height: '42px' }} />
      </ImageContainer>
      <ImageContainer onClick={() => onClickMenu('/rank')}>
        <img src={'https://i.ibb.co/w0C9Drv/Group-119.png'} style={{ width: '30px', height: '42px' }} />
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
