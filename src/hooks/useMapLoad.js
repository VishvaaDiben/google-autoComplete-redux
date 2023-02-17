import { useEffect, useState } from "react";

import { useLoadScript } from "@react-google-maps/api";

const useMapLoad = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  return [isLoaded];
};

export default useMapLoad;