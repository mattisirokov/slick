"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

import { containerStyle, mapOptions } from "./mapStyles";
import { RepairShop } from "@/types";
import getGeolocation from "@/services/geolocationService";

interface Location {
  name: string;
  lat: number;
  lng: number;
}

interface MapComponentProps {
  shops: RepairShop[];
}

function MapComponent({ shops }: MapComponentProps) {
  const [coordinates, setCoordinates] = useState<Location[]>([]);
  const [center, setCenter] = useState({ lat: 51.1657, lng: 10.4515 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  useEffect(() => {
    const fetchCoordinates = async () => {
      let coords = await getGeolocation(shops);
      const filteredCoords: Location[] = coords.filter(
        (coord): coord is Location => coord !== null
      );

      setCoordinates(filteredCoords);

      if (filteredCoords.length > 0) {
        setCenter(filteredCoords[0]);
      }
    };

    fetchCoordinates();
  }, [shops]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7.5}
      options={mapOptions}
    >
      {coordinates.map((location, index) => (
        <MarkerF
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
        >
          <InfoWindow position={{ lat: location.lat, lng: location.lng }}>
            <div>{location.name}</div>
          </InfoWindow>
        </MarkerF>
      ))}
    </GoogleMap>
  ) : null;
}

export default React.memo(MapComponent);