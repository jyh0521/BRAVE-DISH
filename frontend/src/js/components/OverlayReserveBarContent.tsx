
import styled from "@emotion/styled";
import {useReserveStatusStore} from "../store/ReserveStatusStore.ts";

export const OverlayReserveBarContent = () => {

    const {reserveStatus,} = useReserveStatusStore();

    return (
        <>
            {
                reserveStatus == "READY" && <>
                    <OverlayReserveBarReadyText>
                        {"수거를 위해 방문할 장소를 선택해주세요\n" +
                            "선택한 장소로 경로를 만들어 드릴게요"}
                    </OverlayReserveBarReadyText>
                </>
            }
            {
                reserveStatus == "RESERVE" && <OverlayReserveBarSpaceBetweenContainer>
                    <OverlayReserveBarText>
                        현재 위치에서 320M, 5분 예상
                    </OverlayReserveBarText>
                    <OverlayReserveBarButtonWrapper>
                        <OverlayReserveBarButton>
                            {"수거\n예약하기"}
                        </OverlayReserveBarButton>
                    </OverlayReserveBarButtonWrapper>
                </OverlayReserveBarSpaceBetweenContainer>
            }
        </>
    )
}

const OverlayReserveBarText = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayReserveBarReadyText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
`;

const OverlayReserveBarSpaceBetweenContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OverlayReserveBarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  padding-right: 10px;
`;

const OverlayReserveBarButton = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #24A3FF;
  border-radius: 10px;
  color: #FAFAFA;
  text-align: center;
  white-space: pre-wrap;
`;