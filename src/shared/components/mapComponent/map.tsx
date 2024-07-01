import React, { useEffect, useRef } from 'react';
import { TileLayer, MapContainer, useMap, Polygon } from 'react-leaflet';
import styles from './map.module.scss';
import { statesData } from './data';
import { data1 } from './data1';
import { useAppSelector } from '../../../app/hooks';

const MyMapComponent = () => {
  const mapRef = useRef(null);
  const center = useAppSelector((state) => state.mapReducer.center);
  const zoom = useAppSelector((state) => state.mapReducer.zoom);

  useEffect(() => {
    //@ts-ignore
    mapRef.current?.setView(center);
  }, [center]);
  useEffect(() => {
    //@ts-ignore
    mapRef.current?.setZoom(zoom);
  }, [zoom]);

  return (
    <div className={styles.wrapper_MapContainer}>
      <MapContainer
        ref={mapRef}
        center={[center[0], center[1]]}
        zoom={zoom}
        style={{ height: '90vh', width: '100wh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=KJKs6jlc1X4N2M8JUpd4"
        />

        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: '#FF47CA',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: [3],
                color: 'white',
              }}
              //@ts-ignore
              positions={coordinates}
            />
          );
        })}

        {data1.map((state) => {
          const coordinates = state.map((item) => [item[0], item[1]]);
          return (
            <Polygon
              pathOptions={{
                fillColor: '#FCB4D5',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: [3],
                color: 'white',
              }}
              //@ts-ignore
              positions={coordinates}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
export default MyMapComponent;
