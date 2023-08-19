import {MapContainer} from "./js/components/MapContainer.tsx";
import {GoogleMap} from "@react-google-maps/api";
import styled from "@emotion/styled";

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
};
export const MapTest = () => {

    return (
        <MapWrapper>
            <MapContainer>
                <GoogleMap
                    id={'dish-raid-map'}
                    mapContainerStyle={mapStyle}
                    options={mapOptions}
                    zoom={6}
                    center={center}
                >

                </GoogleMap>
            </MapContainer>
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;