import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, Polyline, Popup, TileLayer } from 'react-leaflet';
import { getCoordsErrorSelector, getCoordsLoadingSelector, getCoordsSelector } from '../../store/selectors';
import { AutoFitBound } from '../AutoBound';
import Spinner from '../Spinner/Spinner';
import Marker from '../Marker/Marker';

const center = [52.51687599248987, 13.379721337040621]
const Map = () => {
   const route = useSelector(getCoordsSelector)
   const loading = useSelector(getCoordsLoadingSelector)
   const error = useSelector(getCoordsErrorSelector)
   const [points, setPoints] = useState([]);
   const [bounds, setBounds] = useState([]);
   const [markerFrom, setMarkerFrom] = useState(null)
   const [markerTo, setMarkerTo] = useState(null)

   const handleSetBounds = (bounds) => {
      setBounds(bounds);
   };

   useEffect(() => {
      if (route) {
         const points = route.routes[0].geometry.coordinates.map((arr) => [
            arr[1],
            arr[0],
         ]);
         setPoints(points);
         const originPoint = { lat: points[0][0], lng: points[0][1] };
         const destinationPoint = {
            lat: points[points.length - 1][0],
            lng: points[points.length - 1][1],
         };
         setMarkerFrom(originPoint);
         setMarkerTo(destinationPoint);
         const newBounds = [originPoint, destinationPoint].map((m) => [
            m.lat,
            m.lng,
         ]);
         setBounds(newBounds);
      }
   }, [route])


   if (loading) return <Spinner />
   if (error) return <div>{error}</div>

   return (
      <MapContainer style={{ width: '100%', height: '100vh', overflow: 'hidden' }} center={center} zoom={12} >
         <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
         />

         <Polyline color={"red"} weight={4} opacity={0.6} positions={points}>
            <Popup>Polygon</Popup>
         </Polyline>

         {markerFrom && <Marker position={markerFrom} />}

         {markerTo && (
            <Marker position={markerTo} />
         )}

         <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />

      </MapContainer>
   )
}

export default Map