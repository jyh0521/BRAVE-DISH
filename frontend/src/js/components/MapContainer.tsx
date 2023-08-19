import {LoadScript} from "@react-google-maps/api";
import {ReactNode} from "react";

type MapContainerProps = {
    children: ReactNode
}

export const MapContainer = ({children}: MapContainerProps) => {

    return (
        <LoadScript googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`} libraries={['visualization']}>
            {children}
        </LoadScript>
    )

}