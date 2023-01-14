import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const AutoFitBound = ({ bounds }) => {
   const map = useMap();
   console.log(bounds);
   useEffect(() => {
      if (!map || bounds.length === 0) return;
      map.fitBounds(bounds);
   }, [map, bounds]);
   return null;
};