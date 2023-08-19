import styled from "@emotion/styled";
import {MapContainer} from "./js/components/MapContainer.tsx";
import {GoogleMap} from "@react-google-maps/api";


const center = {
    lat: 35.1689766,
    lng: 129.1360411,
};

const mapStyle = {
    width: '100%',
    height: '100%',
};

const mapOptions = {
    minZoom: 13,
    maxZoom: 19,
    mapId: '56341e6217e09f25',
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
};

export const MapMain = () => {
    return(
        <MapWrapper>
            <MapContainer>
                <GoogleMap
                    id={'dish-raid-map-hi'}
                    mapContainerStyle={mapStyle}
                    options={mapOptions}
                    zoom={6}
                    center={center}>
                </GoogleMap>
            </MapContainer>
            <OverlayRecommendBar>
                <OverlayRecommendBarText>
                    맞춤 경로 추천 받기
                </OverlayRecommendBarText>
            </OverlayRecommendBar>
            <OverlayReserveBar>
                <OverlayReserveBarText>
                    현재 위치에서 320M, 5분 예상
                </OverlayReserveBarText>
                <OverlayReserveBarButtonWrapper>
                    <OverlayReserveBarButton>
                        {"수거\n예약하기"}
                    </OverlayReserveBarButton>
                </OverlayReserveBarButtonWrapper>
            </OverlayReserveBar>
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
`;

const OverlayRecommendBar = styled.div`
  width: 72%; 
  height: 41px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  
  border-radius: 12px;
  background: #FAFAFA;
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
  align-items: center;
`;

const OverlayReserveBar = styled.div`
  width: 88%;
  height: 74px;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0%);

  border-radius: 10px;
  background: #FAFAFA;
  position: absolute;

  box-shadow:0px 12px 24px 0 rgba(0,0,0,0.16);
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OverlayReserveBarText = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
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