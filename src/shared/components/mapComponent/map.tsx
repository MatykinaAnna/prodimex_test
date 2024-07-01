import React, { useEffect, useRef } from 'react';
import { TileLayer, MapContainer, useMap, Polygon } from 'react-leaflet';
import styles from './map.module.scss';
import { statesData } from './data';
import { useAppSelector } from '../../../app/hooks';

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

const MyMapComponent = () => {
  const mapRef = useRef(null);
  const center = useAppSelector((state) => state.mapReducer.center);

  useEffect(() => {
    //@ts-ignore
    mapRef.current?.setView(center);
  }, [center]);

  return (
    <div className={styles.wrapper_MapContainer}>
      <MapContainer
        ref={mapRef}
        center={[center[0], center[1]]}
        zoom={13}
        style={{ height: '90vh', width: '100wh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=KJKs6jlc1X4N2M8JUpd4"
        />
      </MapContainer>
    </div>
  );
};
export default MyMapComponent;
