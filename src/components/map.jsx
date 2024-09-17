// Map.jsx
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vh',
  height: '50vh',
};
const center = {
  lat: 51.585635922613584, // default latitude
  lng: 0.4889066751383914, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
