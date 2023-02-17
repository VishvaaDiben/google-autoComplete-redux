// 1. load script eg. Map
// 2. get places matchings
// 3. get place lat lng

import useMapLoad from "../hooks/useMapLoad";
import usePlaceAuto from "../hooks/usePlaceAuto";

export const loadMapApi = () => async (dispatch) => {
  const [isLoaded] = useMapLoad();
  dispatch({ type: "LOAD_MAP_REQUEST" });

  if (isLoaded == true) {
    await dispatch({
      type: "LOAD_MAP_SUCCESS",
      payload: { map: true, status: "Success" },
    });
  } else {
    await dispatch({
      type: "LOAD_MAP_FAILURE",
      error: { map: false, status: "Failure" },
    });
  }
};

export const getPlaceAutocomplete = (val) => async (dispatch) => {
  const [hookData] = usePlaceAuto(val);
  await dispatch({ type: "AUTO_PLACES_REQUEST" });

  if (hookData && hookData.data !== null) {
    await dispatch({ type: "AUTO_PLACES_SUCCESS", payload: { hookData } });
  } else {
    await dispatch({
      type: "AUTO_PLACES_FAILURE",
      payload: { hookData: "" },
    });
  }
};

// export const locatePlace = (val) => async (dispatch) => {
//   dispatch({ type: "LOCATE_PLACE_REQUEST" });
//   if (val) {
//     clearSuggestions();
//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     const latLng = { lat, lng };

//     dispatch({
//       type: "LOCATE_PLACE_SUCCESS",
//       payload: { clearSuggestions, latLng },
//     });
//   }
//   dispatch({ type: "LOCATE_PLACE_FAILURE" });
// };
