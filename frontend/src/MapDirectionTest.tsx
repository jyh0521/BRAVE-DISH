import styled from '@emotion/styled';
import { MapContainer } from './js/components/MapContainer.tsx';
import { DirectionsRenderer, DirectionsService, GoogleMap } from '@react-google-maps/api';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DirectionsProps = {
  origin: any;
  destination: any;
};

const Directions = (props: DirectionsProps) => {
  const [directions, setDirections] = useState();
  const { origin, destination } = props;
  const count = useRef(0);

  const options = {
    polylineOptions: {
      strokeColor: 'red',
      strokeWeight: 6,
      strokeOpacity: 0.8,
    },
  };

  const directionsCallback = (result: any, status: any) => {
    console.log(result, status);
    if (status === 'OK' && count.current === 0) {
      count.current += 1;
      setDirections(result);
    }
  };

  // @ts-ignore
  return (
    <>
      <DirectionsService
        options={{ origin, destination, travelMode: google.maps.TravelMode['TRANSIT'] }}
        callback={directionsCallback}
      />
      <DirectionsRenderer directions={directions} options={options} />
    </>
  );
};

export const MapDirectionTest = () => {
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
  };

  const [state, setState] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <MapWrapper>
        <MapContainer>
          <GoogleMap id={'dish-raid-map-hi'} mapContainerStyle={mapStyle} options={mapOptions} zoom={6} center={center}>
            <Directions
              origin={{ lat: 35.169143, lng: 129.138449 }}
              destination={{ lat: 35.167195, lng: 129.123759 }}
            />
          </GoogleMap>
        </MapContainer>
        <OverlayReserveBar>
          {!state ? (
            <OverlayReserveBarSpaceBetweenContainer>
              <OverlayReserveBarText>
                <OverlayReserveBarTextBold>5,705 steps (15 mins)</OverlayReserveBarTextBold>
                <OverlayReserveBarTextNormal>2 dishes, 275kcal</OverlayReserveBarTextNormal>
              </OverlayReserveBarText>
              <OverlayReserveBarButtonWrapper onClick={() => setState(!state)}>
                <OverlayReserveBarButton>{'Left\nReserve'}</OverlayReserveBarButton>
              </OverlayReserveBarButtonWrapper>
            </OverlayReserveBarSpaceBetweenContainer>
          ) : (
            <OverlayReserveBarSpaceBetweenContainer>
              <OverlayReserveBarText>
                <OverlayReserveBarTextBold>First lift is in progress</OverlayReserveBarTextBold>
                <OverlayReserveBarTextNormal>Haeundae-gu, Centum 2-ro, 23, 103ho</OverlayReserveBarTextNormal>
              </OverlayReserveBarText>
              <OverlayReserveBarButtonWrapper>
                <OverlayReserveBarButton onClick={() => navigate('/camera')}>Lift Complete</OverlayReserveBarButton>
              </OverlayReserveBarButtonWrapper>
            </OverlayReserveBarSpaceBetweenContainer>
          )}
        </OverlayReserveBar>
        <TopMenu>
          <TopMenuContainer>
            <TopMenuTitle>Departure</TopMenuTitle>
            <TopMenuInput>55, APEC-ro, Haeundae-gu</TopMenuInput>
          </TopMenuContainer>
          <TopMenuContainer>
            <TopMenuTitle style={{ marginRight: '37px' }}>Arrival</TopMenuTitle>
            <TopMenuInput>769, Suyeong-ro, Suyeong-gu</TopMenuInput>
          </TopMenuContainer>
        </TopMenu>
      </MapWrapper>
    </>
  );
};

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;

const OverlayReserveBar = styled.div`
  width: 88%;
  height: 74px;
  bottom: 11%;
  left: 50%;
  transform: translate(-50%, 0%);

  border-radius: 10px;
  background: #fafafa;
  position: absolute;

  box-shadow: 0px 12px 24px 0 rgba(0, 0, 0, 0.16);
`;

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

  color: #428eff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const OverlayReserveBarTextNormal = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: #424242;
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
  background: #24a3ff;
  border-radius: 10px;
  line-height: 1.4;
  font-size: 14px;
  color: #fafafa;
  text-align: center;
  white-space: pre-wrap;
`;

const TopMenu = styled.div`
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  background: #fafafa;
  position: absolute;

  box-shadow: 0px 12px 24px 0 rgba(0, 0, 0, 0.16);
  background-color: #428eff;

  padding: 18px;
  padding-left: 70px;
`;

const TopMenuContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  column-count: 2;
`;

const TopMenuTitle = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;

  margin-right: 12px;
`;

const TopMenuInput = styled.div`
  width: 64%;
  height: 34px;
  border-radius: 9px;
  background: #f1f1f1;

  display: flex;
  align-items: center;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  
  padding-left: 12px;
`;
