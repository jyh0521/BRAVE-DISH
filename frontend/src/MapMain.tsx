import styled from "@emotion/styled";
import {MapContainer} from "./js/components/MapContainer.tsx";
import {GoogleMap, Marker} from "@react-google-maps/api";
import {OverlayReserveBarContent} from "./js/components/OverlayReserveBarContent.tsx";
import {useReserveStatusStore} from "./js/store/ReserveStatusStore.ts";
import {useEffect, useState} from "react";

const pinUrl = "https://i.ibb.co/R38h3gB/location-pin-r-line-1.png"
const redPinUrl = "https://i.ibb.co/98WzZjn/location-pin-r-1.png"


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
    const [markerClickedOne, setMarkerClickedOne] = useState(false);
    const [markerClickedTwo, setMarkerClickedTwo] = useState(false);
    const [markerClickedThree, setMarkerClickedThree] = useState(false);
    const [markerClickedFour, setMarkerClickedFour] = useState(false);

    const {setReserveStatus} = useReserveStatusStore();

    const onClickHandler = () => {
        setReserveStatus("RESERVE");
    }

    useEffect( () => {
        if(markerClickedOne || markerClickedTwo || markerClickedThree || markerClickedFour){
            setReserveStatus("RESERVE")
        } else {
            setReserveStatus("READY")
        }
    }, [markerClickedOne, markerClickedTwo, markerClickedThree, markerClickedFour]);

    const onMarkerOneClickHandle = () => {
        setMarkerClickedOne(!markerClickedOne);
    }

    const onMarkerTwoClickHandle = () => {
        setMarkerClickedTwo(!markerClickedTwo);
    }

    const onMarkerThreeClickHandle = () => {
        setMarkerClickedThree(!markerClickedThree);
    }

    const onMarkerFourClickHandle = () => {
        setMarkerClickedFour(!markerClickedFour);
    }

    return(
        <MapWrapper>
            <MapContainer>
                <GoogleMap
                    id={'dish-raid-map-hi'}
                    mapContainerStyle={mapStyle}
                    options={mapOptions}
                    zoom={6}
                    center={center}
                >
                    {/*해운대 센텀 월드*/}
                    {
                        <Marker position={{lat: 35.166945, lng: 129.1329868}}
                                     icon={{
                                         url: markerClickedOne ? redPinUrl : pinUrl
                                     }}
                                     cursor={'pointer'}
                                     onClick={onMarkerOneClickHandle}
                        />
                    }

                    {/*센텀시티 알라딘 중고서점*/}
                    <Marker position={{lat: 35.1700826, lng:129.1328941}}
                            icon={{
                                url: markerClickedTwo ? redPinUrl : pinUrl
                            }}
                            cursor={'pointer'}
                            onClick={onMarkerTwoClickHandle}
                    />

                    {/*커피 프론트*/}
                    <Marker position={{lat: 35.1659317, lng: 129.1324239}}
                            icon={{
                                url: markerClickedThree ? redPinUrl : pinUrl
                            }}
                            cursor={'pointer'}
                            onClick={onMarkerThreeClickHandle}
                    />

                    {/*교촌 치킨 우동점*/}
                    <Marker position={{lat: 35.1694593, lng: 129.1385963}}
                            icon={{
                                url: markerClickedFour ? redPinUrl : pinUrl
                            }}
                            cursor={'pointer'}
                            onClick={onMarkerFourClickHandle}
                    />
                </GoogleMap>
            </MapContainer>
            <OverlayRecommendBar>
                <OverlayRecommendBarText>
                    <div>👍🏻</div>
                    <div onClick={onClickHandler}>{"맞춤 경로 추천"}</div>
                    <div style={{color:"#000000"}}>{"받기"}</div>
                </OverlayRecommendBarText>
            </OverlayRecommendBar>
            <OverlayReserveBar>
                <OverlayReserveBarContent />
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
  width: 52%; 
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
  cursor: pointer;
  gap: 3px;
`;

const OverlayReserveBar = styled.div`
  width: 88%;
  height: 74px;
  bottom: 11%;
  left: 50%;
  transform: translate(-50%, 0%);

  border-radius: 10px;
  background: #FAFAFA;
  position: absolute;

  box-shadow:0px 12px 24px 0 rgba(0,0,0,0.16);
`;