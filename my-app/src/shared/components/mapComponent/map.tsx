import React from 'react';
import { TileLayer, MapContainer, useMap } from 'react-leaflet';
import styles from './map.module.scss';

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

const MyMapComponent = () => {
  return (
    <div className={styles.wrapper_MapContainer}>
      <MapContainer center={[55.7, 37.5]} zoom={13}>
        <div style={{ height: '90vh' }}></div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      </MapContainer>
    </div>
  );
};
export default MyMapComponent;
