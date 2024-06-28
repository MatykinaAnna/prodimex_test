import React from 'react'
import { TileLayer, MapContainer, useMap } from 'react-leaflet'

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

const MyMapComponent = () => {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
      <TileLayer url=""></TileLayer>
    </MapContainer>
  )
}
export default MyMapComponent
