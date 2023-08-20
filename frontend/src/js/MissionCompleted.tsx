import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const MissionCompleted = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header>
        <CloseButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={'/images/x_vector_white.png'} width={'20px'} />
        </CloseButton>
      </Header>
      <Title>Completed!</Title>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Polar%20Bear.png"
          alt="Polar Bear"
          width="200"
          height="200"
        />
      </ImageContainer>
      <Content>{`You save the polar bear\nfrom the plastic pollution!`}</Content>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #002b5a;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  padding-left: 32px;
  margin: 20px 0 64px 0;
`;

const CloseButton = styled.div`
  margin-right: 110px;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Content = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-wrap;
  margin-top: 40px;
`;
