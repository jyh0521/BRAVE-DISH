import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const OverlayRecommendBarShort = () => {
  const navigate = useNavigate();

  return (
    <>
      <OverlayRecommendBarShorten onClick={() => navigate('/map_direction_test')}>
        <OverlayRecommendBarText>
          <div>👍🏻</div>
          {/*<div>{"맞춤 경로 추천"}</div>*/}
          <div>{'For auto route'}</div>
          <div style={{ color: '#000000' }}>{'click here!'}</div>
        </OverlayRecommendBarText>
      </OverlayRecommendBarShorten>
    </>
  );
};

const OverlayRecommendBarShorten = styled.div`
  width: 73%;
  height: 41px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);

  border-radius: 12px;
  background: #fafafa;
  position: absolute;

  //box-shadow:
  //  inset 0 0 0 12px white,
  //  0 3px 12px black;

  box-shadow: 0px 12px 24px 0 rgba(0, 0, 0, 0.16);
`;

const OverlayRecommendBarText = styled.div`
  color: #24a3ff;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 3px;
`;
