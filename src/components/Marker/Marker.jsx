import React from 'react'
import { Marker as AntdMarker, Tooltip } from 'react-leaflet'
import L from 'leaflet'

const Marker = ({ position }) => {
   const icon = L.icon({
      iconUrl: './marker.png',
      iconSize: [24, 24],
   });
   return (
      <AntdMarker icon={icon} position={position} text="Загрузка" >
         <Tooltip direction='top'>text</Tooltip>
      </AntdMarker>
   )
}

export default Marker