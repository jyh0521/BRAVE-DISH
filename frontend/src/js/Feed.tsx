import styled from '@emotion/styled';

export const Feed = () => {
  return (
    <MainContainer>
      <Container>
        <Header>Town Feed</Header>
        <RankContainer>
          <Rank>7th</Rank>
          <Region>Mang-Won</Region>
          <Tag>My Town</Tag>
          <CountTextContaier>31,213 times</CountTextContaier>
        </RankContainer>
      </Container>
      <Divider />
      <FeedContainer>
        <FeedHeader>
          <FeedProfile />
          <FeedUserName>Nicky</FeedUserName>
          <Tag>King of Collenction</Tag>
          <FeedCreatedAt>3 minutes ago</FeedCreatedAt>
        </FeedHeader>
        <FeedBodyContainer>I achieved my goal!!</FeedBodyContainer>
        <FeedAchievementContainer>
          <img src={'/images/medal.png'} width={24} />
          <FeedAchievementText>Acquired the title of King of Collectors</FeedAchievementText>
        </FeedAchievementContainer>
      </FeedContainer>
      <LikeContainer>
        <LikeDiv>👍🏻 Like 12</LikeDiv>
        <LikeDiv>💬 Comment 3</LikeDiv>
      </LikeContainer>
      <CommentContainer>
        <CommentHeader>
          <CommentUserName>Jayd</CommentUserName>
          <CommentTime>1 minute ago</CommentTime>
        </CommentHeader>
        <CommentBody>Congratulations!!</CommentBody>
      </CommentContainer>
      <Divider />
      <FeedContainer>
        <FeedHeader>
          <FeedProfile />
          <FeedUserName>Henry</FeedUserName>
          <Tag>King of Collenction</Tag>
          <FeedCreatedAt>5 minutes ago</FeedCreatedAt>
        </FeedHeader>
        <FeedChallengeContainer>
          <FeedChallengeContainer>
            <FeedChallengeTitle>Participated in the "Daily Collection Challenge in my town"</FeedChallengeTitle>
            <FeedChallengeButton>Join</FeedChallengeButton>
          </FeedChallengeContainer>
        </FeedChallengeContainer>
      </FeedContainer>
      <LikeContainer>
        <LikeDiv>👍🏻 Like 15</LikeDiv>
        <LikeDiv>💬 Comment 0</LikeDiv>
      </LikeContainer>
      <EmptyDiv />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 0 24px;
`;

const Header = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 24px;
`;

const RankContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #f9f9f9;
  padding: 12px 21px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Rank = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
`;

const Region = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-left: 21px;
`;

const Tag = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  border-radius: 5px;
  background: #428eff;
  padding: 0 6px;
  margin-left: 6px;
`;

const CountTextContaier = styled.div`
  display: flex;
  margin-left: 16px;

  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const Divider = styled.div`
  height: 8px;
  background: #f1f1f1;
`;

const FeedContainer = styled.div`
  margin-top: 18px;
  padding: 0 18px;
`;

const FeedHeader = styled.div`
  display: flex;
  align-items: center;
`;

const FeedProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #e4e4e4;
`;

const FeedUserName = styled.div`
  margin-left: 8px;

  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const FeedCreatedAt = styled.div`
  color: #bdb6b6;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  margin-left: 36px;
`;

const FeedBodyContainer = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  padding: 24px;
`;

const FeedAchievementContainer = styled.div`
  border-radius: 10px;
  background: #b7e1ff;
  padding: 20px;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FeedAchievementText = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  margin-left: 18px;
`;

const LikeContainer = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;

  display: flex;
  justify-content: space-between;

  padding: 16px 56px;
  margin-bottom: 14px;
`;

const LikeDiv = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const CommentContainer = styled.div`
  border-radius: 10px;
  background: #f8f8f8;

  width: calc(100% - 48px);
  margin-left: 24px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px 0 16px;
`;

const CommentUserName = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const CommentTime = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const CommentBody = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  padding: 10px 16px;
  margin-bottom: 24px;
`;

const FeedChallengeContainer = styled.div`
  border-radius: 10px;
  background: #f8f8f8;

  padding: 12px 24px;
  margin: 24px 0;
`;

const FeedChallengeTitle = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  margin-bottom: 18px;
`;

const FeedChallengeButton = styled.div`
  border-radius: 10px;
  background: #428eff;

  color: #efefef;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

const EmptyDiv = styled.div`
  width: 1px;
  height: 180px;
`;
