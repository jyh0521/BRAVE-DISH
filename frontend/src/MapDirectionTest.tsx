import styled from '@emotion/styled';
import {MapContainer} from "./js/components/MapContainer.tsx";
import {GoogleMap, DirectionsService, DirectionsRenderer} from "@react-google-maps/api";
import {useRef, useState} from "react";

type DirectionsProps = {
    origin: any;
    destination: any;
}

const Directions = (props: DirectionsProps) => {
    const [directions, setDirections] = useState();
    const {origin, destination} = props;
    const count = useRef(0);

    const options = {
        polylineOptions: {
            strokeColor: "red",
            strokeWeight: 6,
            strokeOpacity: 0.8
        }
    }

    const directionsCallback = (result: any , status: any) => {
        console.log(result, status);
        if(status === 'OK' && count.current === 0  ){
            count.current += 1;
            setDirections(result);
        }
    }

    return (
        <>
            <DirectionsService options={{origin, destination, travelMode: 'TRANSIT' }} callback={directionsCallback} />
            <DirectionsRenderer directions={directions} options={options} />
        </>
    )

}

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

    return (
        <MapWrapper>
            <MapContainer>
                <GoogleMap
                    id={'dish-raid-map-hi'}
                    mapContainerStyle={mapStyle}
                    options={mapOptions}
                    zoom={6}
                    center={center}>
                    <Directions origin={{lat: 35.169143, lng: 129.138449}} destination={{lat: 35.167195,lng: 129.123759}} />
                </GoogleMap>
            </MapContainer>
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;