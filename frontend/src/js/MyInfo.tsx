import styled from '@emotion/styled';

export const MyInfo = () => {
    return (
      <Container>
        <MyInfoTitle>내 정보</MyInfoTitle>
        <MyInfoMain> 
            <ProfileImage>
                ㄴ
            </ProfileImage>
            <NickNameContainer>
                <Column>
                너무추운그릇
                </Column>
                <Column>
                망원동
                </Column>
            </NickNameContainer>
        </MyInfoMain>
        <MoreInfo>
            <MoreInfoItem>수거한 용기</MoreInfoItem>
            <MoreInfoItem>누적 걸음 수</MoreInfoItem>
            <MoreInfoItem>보유 포인트</MoreInfoItem>
        </MoreInfo>
      </Container>
      
    );
};

const Container = styled.div`
  padding: 0 30px;
  width: 100%;
  margin-top: 38px;
`;

const MyInfoTitle = styled.div`
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 18px;
`;

const MyInfoMain = styled.div`
    display: flex;
    column-count: 2;
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
`

const NickNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px;
`

const Column = styled.div`
    margin: 10px;
`

const MoreInfo = styled.div`
    display: flex
`

const MoreInfoItem = styled.div`
    display:flex;
    margin: 0 20px;
`


