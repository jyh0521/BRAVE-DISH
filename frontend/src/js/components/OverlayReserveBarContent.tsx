
import styled from "@emotion/styled";
import {useReserveStatusStore} from "../store/ReserveStatusStore.ts";
import {useNavigate} from "react-router-dom";

export const OverlayReserveBarContent = () => {

    const {reserveStatus, setReserveStatus} = useReserveStatusStore();

    const navigate = useNavigate();

    return (
        <>
            {
                reserveStatus == "READY" && <>
                    <OverlayReserveBarReadyText>
                        {/*{"수거를 위해 방문할 장소를 선택해주세요\n" +*/}
                        {/*    "선택한 장소로 경로를 만들어 드릴게요"}*/}
                        {"For lift, choose a waypoint\n" +
                            "we will make a route for you"}
                    </OverlayReserveBarReadyText>
                </>
            }
            {
                reserveStatus == "RESERVE" && <OverlayReserveBarSpaceBetweenContainer>
                    <OverlayReserveBarText>
                        <OverlayReserveBarTextBold>
                            Haeundae-gu, Centum 2-ro, 25
                        </OverlayReserveBarTextBold>
                        <OverlayReserveBarTextNormal>
                             200m from here, 5 min
                        </OverlayReserveBarTextNormal>
                    </OverlayReserveBarText>
                    <OverlayReserveBarButtonWrapper>
                        <OverlayReserveBarButton onClick={() => setReserveStatus("CONFIRM")}>
                            {"Left\nReserve"}
                        </OverlayReserveBarButton>
                    </OverlayReserveBarButtonWrapper>
                </OverlayReserveBarSpaceBetweenContainer>
            }

            {
                reserveStatus == "CONFIRM" && <OverlayReserveBarSpaceBetweenContainer>
                    <OverlayReserveBarText>
                        <OverlayReserveBarTextBold>
                            First lift is in progress
                        </OverlayReserveBarTextBold>
                        <OverlayReserveBarTextNormal>
                            Haeundae-gu, Centum 2-ro, 23, 103ho
                        </OverlayReserveBarTextNormal>
                    </OverlayReserveBarText>
                    <OverlayReserveBarButtonWrapper>
                        <OverlayReserveBarButton onClick={() => navigate("/camera")}>
                            Lift Complete
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
  text-align: left;
  flex-direction: column;
  margin-left: 15px;
`;

const OverlayReserveBarTextBold = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  color: #424242;
`;

const OverlayReserveBarTextNormal = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: #424242;
`;

const OverlayReserveBarReadyText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
  font-size: 17px;
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
  line-height: 1.4;
  font-size: 14px;
  color: #FAFAFA;
  text-align: center;
  white-space: pre-wrap;
`;