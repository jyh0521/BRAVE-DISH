import styled from "@emotion/styled";
import {useReserveStatusStore} from "../store/ReserveStatusStore.ts";

export const OverlayRecommendBarBig = () => {
    const {reserveCount} = useReserveStatusStore();
    return (
        <>
            <OverlayRecommendBarWrapper>
                <OverlayRecommendBarText>
                    {/*<div>총 {reserveCount}건의 수거를 예약했어요</div>*/}
                    <div>Total {reserveCount} lifts are reserved</div>
                    {/*<div>묶음 경로가 필요하면 눌러 주세요</div>*/}
                    <div>If you want to add a lift click the marker</div>
                </OverlayRecommendBarText>
            </OverlayRecommendBarWrapper>
        </>
    )
}

const OverlayRecommendBarWrapper = styled.div`
  width: 89%; 
  height: 62px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  
  border-radius: 10px;
  background: #E8F3FF;
  opacity: 0.95;
  position: absolute;

  //box-shadow:
  //  inset 0 0 0 12px white,
  //  0 3px 12px black;

  box-shadow:0px 12px 24px 0 rgba(0,0,0,0.16);
`;

const OverlayRecommendBarText = styled.div`
  color: #24A3FF;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  gap: 3px;
  text-align: center;
`;