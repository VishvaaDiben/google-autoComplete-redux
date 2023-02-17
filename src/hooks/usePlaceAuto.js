import { useEffect, useState } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

const usePlaceAuto = (val) => {
  const [hookData, setData] = useState(null);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    setValue(val).then(setData({ready, value, data}))
  }, [val]);

  return [hookData];
};

export default usePlaceAuto;