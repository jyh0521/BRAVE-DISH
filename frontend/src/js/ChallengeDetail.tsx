import styled from '@emotion/styled';

export const ChallengeDetail = () => {
  return (
    <MainContainer>
      <Container>
        <BackButton>⬅️</BackButton>
        <ChallengeDetailImageContainer>
          <ChallengeDetailTitle>매주 3회 수거 챌린지</ChallengeDetailTitle>
        </ChallengeDetailImageContainer>
        <ChallengeDetailPeopleContainer>
          <ChallengeDetailPeopleImpactContainer>20명</ChallengeDetailPeopleImpactContainer>이 챌린지에 참여하고 있어요
        </ChallengeDetailPeopleContainer>
        <ChallengeDetailDateInfo>{`📅   30일 동안 진행`}</ChallengeDetailDateInfo>
        <ChallengeDetailRewardInfo>{`💵  성공 시 200P 지급`}</ChallengeDetailRewardInfo>
      </Container>
      <Divider />
      <Container>
        <ChallengeDetailInfo>챌린지 안내</ChallengeDetailInfo>
        <ChallengeDetailInfoMore>
          {`매주 3회 수거를 4주 동안 완료하면\n기존의 포인트보다 2배를 더 지급합니다`}
        </ChallengeDetailInfoMore>
      </Container>
      <ChallengeButton>챌린지 참여하기</ChallengeButton>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0 25px;
`;

const BackButton = styled.div`
  width: 27px;
  height: 27px;
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

const ChallengeDetailImageContainer = styled.div`
  border-radius: 5px;
  background: #f6f6f6;
  height: 210px;
  display: flex;
  align-items: end;
  margin-bottom: 21px;
`;

const ChallengeDetailTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  padding: 0 0 19px 19px;
`;

const ChallengeDetailPeopleContainer = styled.div`
  border-radius: 5px;
  background: #f6f6f6;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 18px;
  display: flex;
  margin-bottom: 31px;
`;

const ChallengeDetailPeopleImpactContainer = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const ChallengeDetailDateInfo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding-left: 19px;
  white-space: pre-wrap;
  margin-bottom: 18px;
`;

const ChallengeDetailRewardInfo = styled.div`
  white-space: pre-wrap;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding-left: 19px;
  margin-bottom: 18px;
`;

const Divider = styled.div`
  width: 100%;
  height: 16px;
  background: #f6f6f6;
  margin-bottom: 31px;
`;

const ChallengeDetailInfo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 29px;
`;

const ChallengeDetailInfoMore = styled.div`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-family: Pretendard;
  white-space: pre-wrap;
  margin-bottom: 54px;
`;

const ChallengeButton = styled.div`
  border-radius: 10px;
  background: #428eff;
  color: #efefef;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  height: 48px;
  position: fixed;
  bottom: 97px;
  width: calc(100% - 50px);
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
