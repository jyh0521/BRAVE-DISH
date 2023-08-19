import styled from '@emotion/styled';

export const Challenges = () => {
  return (
    <Container>
      <Header>챌린지</Header>
      <FightTitleContainer>
        <FightTitle>🔥 진행 중인 대결</FightTitle>
        <FightPeriod>(08.19~08.26)</FightPeriod>
      </FightTitleContainer>
      <FightInfoContainer>
        <FightRegionContainer>
          <FightRegion>⚔️ 망원동 VS 성수동</FightRegion>
          <FightStatus>진행중</FightStatus>
        </FightRegionContainer>
        <FightDayInfoContainer>
          <DayContainer>월</DayContainer>
          <GraphContainer>
            <GraphBlackBar style={{ width: '86px' }} />
            <GraphBlueBar style={{ width: '65px' }} />
          </GraphContainer>
          <ResultContainer>🥹 패배</ResultContainer>
        </FightDayInfoContainer>
        <FightDayInfoContainer>
          <DayContainer>화</DayContainer>
          <GraphContainer>
            <GraphBlackBar style={{ width: '72px' }} />
            <GraphBlueBar style={{ width: '79px' }} />
          </GraphContainer>
          <ResultContainer>👍🏻 승리</ResultContainer>
        </FightDayInfoContainer>
        <FightDayInfoContainer>
          <DayContainer>수</DayContainer>
          <GraphContainer>
            <GraphBlackBar style={{ width: '81px' }} />
            <GraphBlueBar style={{ width: '81px' }} />
          </GraphContainer>
          <ResultContainer>무승부</ResultContainer>
        </FightDayInfoContainer>
        <FightDayInfoContainer>
          <DayContainer>목</DayContainer>
          <GraphContainer>
            <GraphGreyBar style={{ width: '86px' }} />
            <GraphGreyBar style={{ width: '86px' }} />
          </GraphContainer>
          <ResultContainer>예정</ResultContainer>
        </FightDayInfoContainer>
        <FightDayInfoContainer>
          <DayContainer>금</DayContainer>
          <GraphContainer>
            <GraphGreyBar style={{ width: '86px' }} />
            <GraphGreyBar style={{ width: '86px' }} />
          </GraphContainer>
          <ResultContainer>예정</ResultContainer>
        </FightDayInfoContainer>
      </FightInfoContainer>
      <GroupChallengeTitleContainer>👫 그룹 챌린지</GroupChallengeTitleContainer>
      <GroupChallengeContainer>
        <GroupChallenge>
          <SpecialMissionContainer>특별 미션</SpecialMissionContainer>
          <GroupChallengeInfoTitleContainer>
            <GroupChallengeInfoTitle>{`우리 동네\n일일 수거 100건 달성`}</GroupChallengeInfoTitle>
            <GroupChallengeInfoPoint>500P</GroupChallengeInfoPoint>
          </GroupChallengeInfoTitleContainer>
          <progress value="70" max="100" style={{ width: '100%', marginBottom: '12px' }} />
          <GroupChallengeInfoContainer>
            <GroupChallengeInfoText>🏃🏻‍♀️ 82건 완료</GroupChallengeInfoText>
            <GroupChallengeInfoText>남은 시간 05:10:12</GroupChallengeInfoText>
          </GroupChallengeInfoContainer>
          <GroupChallengeButton>챌린지 참여하기</GroupChallengeButton>
        </GroupChallenge>
      </GroupChallengeContainer>
      <EmptyDiv />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px;
  width: 100%;
`;

const Header = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 38px;
`;

const FightTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 22px;
`;

const FightTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const FightPeriod = styled.div`
  color: #8c8c8c;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;

const FightInfoContainer = styled.div`
  border-radius: 10px;
  background: #f8f8f8;
  padding: 18px;
`;

const FightRegionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const FightRegion = styled.div`
  color: #464646;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const FightStatus = styled.div`
  border-radius: 5px;
  background: #ffc226;
  padding: 2px 6px;
  color: #fefefe;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;

const FightDayInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const DayContainer = styled.div`
  border-radius: 15px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  color: #464646;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const GraphContainer = styled.div`
  margin-left: 8px;
`;

const GraphBlackBar = styled.div`
  height: 7px;
  background-color: #666666;
  margin-bottom: 1px;
`;

const GraphBlueBar = styled.div`
  height: 7px;
  background-color: #24a3ff;
`;

const GraphGreyBar = styled.div`
  height: 7px;
  margin-bottom: 1px;
  background-color: #a4a4a445;
`;

const ResultContainer = styled.div`
  color: #212121;
  text-align: right;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: end;
  width: 63%;
`;

const GroupChallengeTitleContainer = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin: 24px 0 20px 0;
`;

const GroupChallengeContainer = styled.div``;

const GroupChallenge = styled.div`
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  background: #f8f8f8;
  padding: 12px;
  margin-right: 12px;
`;

const SpecialMissionContainer = styled.div`
  border-radius: 5px;
  background: #ff1c45;
  color: #fefefe;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 0 6px;
  width: 38px;
  margin-bottom: 12px;
`;

const GroupChallengeInfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const GroupChallengeInfoTitle = styled.div`
  color: #292929;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  white-space: pre-wrap;
`;

const GroupChallengeInfoPoint = styled.div`
  color: #292929;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const GroupChallengeInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const GroupChallengeInfoText = styled.div`
  color: #292929;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const GroupChallengeButton = styled.div`
  border-radius: 10px;
  background: #428eff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efefef;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding: 8px;
`;

const EmptyDiv = styled.div`
  width: 1px;
  height: 100px;
`;
