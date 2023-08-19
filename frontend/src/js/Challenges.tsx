import styled from '@emotion/styled';

export const Challenges = () => {
  return (
    <Container>
      <ChallengeTitle>진행중인 챌린지</ChallengeTitle>
      <ChallengeContainer>
        <ChallengeContainerTitle>[도전 중] 매주 3회 수거 챌린지</ChallengeContainerTitle>
        <ChallengeProgressBar />
        <ChallengeProgressStep>8회 완료</ChallengeProgressStep>
      </ChallengeContainer>
      <ChallengeListTitle>챌린지 목록</ChallengeListTitle>
      <ChallengeListContainer>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
        <ChallengeListItem>
          <ChallengeListItemTitle>실내 적정 온도 유지 챌린지</ChallengeListItemTitle>
          <ChallengeListItemInfo>
            <ChallengeListPoint>500P</ChallengeListPoint>
            <ChallengeListItemLimit>3일 후 마감</ChallengeListItemLimit>
          </ChallengeListItemInfo>
        </ChallengeListItem>
      </ChallengeListContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px;
  width: 100%;
  margin-top: 38px;
`;

const ChallengeTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 18px;
`;

const ChallengeContainer = styled.div`
  border-radius: 10px;
  background: #f8f8f8;
  padding: 18px 20px;
`;

const ChallengeContainerTitle = styled.div`
  color: #ff4768;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 16px;
`;

const ChallengeProgressBar = styled.div`
  width: 203px;
  height: 23px;
  background-color: #24a3ff;
  margin-bottom: 16px;
`;

const ChallengeProgressStep = styled.div`
  color: #3f3f3f;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

const ChallengeListTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 58px;
  margin-bottom: 18px;
`;

const ChallengeListContainer = styled.div`
  height: 500px;
  overflow: scroll;
`;

const ChallengeListItem = styled.div`
  border-radius: 10px;
  background: #f8f8f8;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ChallengeListItemTitle = styled.div`
  color: #292929;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  width: 95px;
`;

const ChallengeListItemInfo = styled.div``;

const ChallengeListPoint = styled.div`
  color: #292929;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
`;

const ChallengeListItemLimit = styled.div`
  color: #292929;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;
