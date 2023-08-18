import styled from '@emotion/styled';

export const MainFooter = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={'/images/house_W_1.png'} />
      </ImageContainer>
      <ImageContainer>
        <img src={'/images/dungeon_W_1.png'} />
      </ImageContainer>
      <ImageContainer>
        <img src={'/images/shopping-bag_W_1.png'} />
      </ImageContainer>
      <ImageContainer>
        <img src={'/images/profile_W_1.png'} />
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
