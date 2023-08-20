import styled from "@emotion/styled";
import {MapContainer} from "./js/components/MapContainer.tsx";
import {GoogleMap, Marker, Polyline} from "@react-google-maps/api";
import {OverlayReserveBarContent} from "./js/components/OverlayReserveBarContent.tsx";
import {useReserveStatusStore} from "./js/store/ReserveStatusStore.ts";
import {useEffect, useState} from "react";
import {OverlayRecommendBarShort} from "./js/components/OverlayRecommendBarShorten.tsx";
import {OverlayRecommendBarBig} from "./js/components/OverlayRecommendBarBig.tsx";

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
    minZoom: 15,
    maxZoom: 19,
    mapId: '56341e6217e09f25',
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
};

const markerOneCoordinates = {lat: 35.166945, lng: 129.1329868}
const markerTwoCoordinates = {lat: 35.1700826, lng:129.1328941}
const markerThreeCoordinates = {lat: 35.1639317, lng: 129.1324239}
const markerFourCoordinates = {lat: 35.1694593, lng: 129.1385963}

export const MapMain = () => {
    const [markerClickedOne, setMarkerClickedOne] = useState(false);
    const [markerClickedTwo, setMarkerClickedTwo] = useState(false);
    const [markerClickedThree, setMarkerClickedThree] = useState(false);
    const [markerClickedFour, setMarkerClickedFour] = useState(false);
    const [coordinateMarkers, setCoordinateMarkers] = useState<{lat:number, lng: number}[]>([]);

    const {setReserveStatus, reserveStatus, setReserveCount, reserveCount} = useReserveStatusStore();

    useEffect( () => {
        if(markerClickedOne || markerClickedTwo || markerClickedThree || markerClickedFour){
            setReserveStatus("RESERVE");
        } else {
            setReserveStatus("READY");
        }

        setReserveCount([markerClickedOne, markerClickedTwo, markerClickedThree, markerClickedFour].filter(Boolean).length);

    }, [markerClickedOne, markerClickedTwo, markerClickedThree, markerClickedFour]);

    const onMarkerOneClickHandle = () => {
        setMarkerClickedOne(!markerClickedOne);
        setCoordinateMarkers([...coordinateMarkers, markerOneCoordinates]);
    }

    const onMarkerTwoClickHandle = () => {
        setMarkerClickedTwo(!markerClickedTwo);
        setCoordinateMarkers([...coordinateMarkers, markerTwoCoordinates]);
    }

    const onMarkerThreeClickHandle = () => {
        setMarkerClickedThree(!markerClickedThree);
        setCoordinateMarkers([...coordinateMarkers, markerThreeCoordinates]);
    }

    const onMarkerFourClickHandle = () => {
        setMarkerClickedFour(!markerClickedFour);
        setCoordinateMarkers([...coordinateMarkers, markerFourCoordinates]);
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
                    {
                        ["READY","RESERVE"].includes(reserveStatus) ? <>
                            <Marker position={markerOneCoordinates}
                                    icon={{
                                        url: markerClickedOne ? redPinUrl : pinUrl
                                    }}
                                    cursor={'pointer'}
                                    onClick={onMarkerOneClickHandle}
                            />


                            {/*센텀시티 알라딘 중고서점*/}
                            <Marker position={markerTwoCoordinates}
                                    icon={{
                                        url: markerClickedTwo ? redPinUrl : pinUrl
                                    }}
                                    cursor={'pointer'}
                                    onClick={onMarkerTwoClickHandle}
                            />

                            {/*커피 프론트*/}
                            <Marker position={markerThreeCoordinates}
                                    icon={{
                                        url: markerClickedThree ? redPinUrl : pinUrl
                                    }}
                                    cursor={'pointer'}
                                    onClick={onMarkerThreeClickHandle}
                            />

                            {/*교촌 치킨 우동점*/}
                            <Marker position={markerFourCoordinates}
                                    icon={{
                                        url: markerClickedFour ? redPinUrl : pinUrl
                                    }}
                                    cursor={'pointer'}
                                    onClick={onMarkerFourClickHandle}
                            />
                        </> : <>
                            {
                                coordinateMarkers.map((coordinate, index) => {
                                    let url;
                                    if(index == 0) {
                                        url = "https://i.ibb.co/JdtSy1y/Group-110-1.png";
                                    } else if(index < coordinateMarkers.length - 1) {
                                        url = "https://i.ibb.co/hm846RK/Group-118.png"
                                    } else {
                                        url = "https://i.ibb.co/hyr4Bxj/Group-115-1.png"
                                    }
                                    return <Marker position={coordinate} icon={{
                                        url: url,
                                        scaledSize: new window.google.maps.Size(35, 35)
                                    }} ></Marker>
                                })
                            }
                        </>
                    }
                    {/*해운대 센텀 월드*/}

                    {
                        reserveStatus == "CONFIRM" && <Polyline
                            path={coordinateMarkers}
                            options={{
                                strokeColor: "#24A3FF",
                                strokeWeight: 6,
                                strokeOpacity: 1
                            }}
                        />
                    }
                </GoogleMap>
            </MapContainer>
            {
                reserveStatus != "CONFIRM" && (
                    reserveCount >= 2 ? <OverlayRecommendBarBig/> : <OverlayRecommendBarShort/>
                )
            }
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