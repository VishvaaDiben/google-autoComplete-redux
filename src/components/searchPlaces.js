import "../../src/App.css";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { getPlaceAutocomplete, loadMapApi } from "../redux/searchPlaceAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SearchPlaces() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.getMapReducer);
  const { items, error, loading } = state;

  const {data , ready, value } = items;
  const [placesData, setPlacesData] = useState([])

  
  useEffect(() => {
    dispatch(loadMapApi());
    if(data && data !== null){
      setPlacesData(data)
    }
  },[data]);

  if (loading) return <div>Loading...</div>;
  if (error && error.map == false ) return <div>{error.status}</div>;
  return <Map />;

  function Map() {
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState(null);

    return (
      <>
        <div className="places-container">
          <PlacesAutocomplete setSelected={setSelected} />
        </div>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          {selected && <MarkerF position={selected} />}
        </GoogleMap>
      </>
    );
  }

  function PlacesAutocomplete() {
    return (
      <>
        <Autocomplete
          // disablePortal={!ready}
          id="combo-box-demo"
          options={placesData?.map((option) => option.description)}
          // onSelect={handleSelect} //dispatch select event
          value={value}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => dispatch(getPlaceAutocomplete(e.target.value))}
              label="Search Address"
            />
          )}
        />
      </>
    );
  }
}


