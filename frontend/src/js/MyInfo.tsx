import styled from '@emotion/styled';

export const MyInfo = () => {
  return (
    <MainContainer>
      <Container>
        <MyInfoTitle>Profile</MyInfoTitle>
        <MyInfoMain>
          <ProfileImage />
          <NickNameContainer>
            <NickName>CoolDish</NickName>
            <UserRegion>📍 Mang-Won</UserRegion>
          </NickNameContainer>
        </MyInfoMain>
        <MoreInfo>
          <MoreInfoContainer>
            <MoreInfoTitle>Collected dishes</MoreInfoTitle>
            <MoreInfoValue>23</MoreInfoValue>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <MoreInfoTitle>Total steps</MoreInfoTitle>
            <MoreInfoValue>10,230</MoreInfoValue>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <MoreInfoTitle>My point</MoreInfoTitle>
            <MoreInfoValue>23,000P</MoreInfoValue>
          </MoreInfoContainer>
        </MoreInfo>
      </Container>
      <Divider />
      <Container>
        <MyInfoTitle>Challenge participated</MyInfoTitle>
        <MyChallengeContainer>
          <MyChallenge>
            <MyChallengeTitle>Daily Challenge in my town</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>Collected 3 dishes a day</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>6,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>7,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>8,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>9,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>10,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>11,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>12,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>13,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>14,000 steps challenge</MyChallengeTitle>
            <MyChallengeResult>🏆 Clear</MyChallengeResult>
          </MyChallenge>
        </MyChallengeContainer>
      </Container>
      <EmptyDiv />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0 30px;
`;

const MyInfoTitle = styled.div`
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 18px;

  margin-top: 38px;
`;

const MyInfoMain = styled.div`
  display: flex;
  align-items: center;

  margin: 32px 0;
`;

const ProfileImage = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 44px;
  background-color: #d9d9d9;
  margin-right: 22px;
`;

const NickNameContainer = styled.div``;

const NickName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  margin-bottom: 12px;
`;

const UserRegion = styled.div`
  color: #585858;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreInfoContainer = styled.div`
  margin: 0 20px;
  text-align: center;
  margin-bottom: 42px;

  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const MoreInfoTitle = styled.div`
  margin-bottom: 18px;
`;

const MoreInfoValue = styled.div``;

const Divider = styled.div`
  height: 8px;
  background: #f1f1f1;
`;

const MyChallengeContainer = styled.div`
  margin-top: 24px;
`;

const MyChallenge = styled.div`
  border-radius: 5px;
  background: #f6f6f6;
  padding: 18px 24px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const MyChallengeTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const MyChallengeResult = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const EmptyDiv = styled.div`
  width: 1px;
  height: 180px;
`;
