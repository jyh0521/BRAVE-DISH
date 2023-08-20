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
            <MoreInfoTitle>수거한 용기</MoreInfoTitle>
            <MoreInfoValue>23개</MoreInfoValue>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <MoreInfoTitle>누적 걸음 수</MoreInfoTitle>
            <MoreInfoValue>10,230보</MoreInfoValue>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <MoreInfoTitle>보유 포인트</MoreInfoTitle>
            <MoreInfoValue>23,000P</MoreInfoValue>
          </MoreInfoContainer>
        </MoreInfo>
      </Container>
      <Divider />
      <Container>
        <MyInfoTitle>달성한 챌린지</MyInfoTitle>
        <MyChallengeContainer>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
          </MyChallenge>
          <MyChallenge>
            <MyChallengeTitle>우리 동네 일일 수거 챌린지</MyChallengeTitle>
            <MyChallengeResult>🏆 달성</MyChallengeResult>
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
