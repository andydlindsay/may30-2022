import useLocationData from "../hooks/useLocationData";

const LocationData = () => {
  const coords = useLocationData();

  return (
    <div>
      <h2>Lat: {coords.lat}, Lon: {coords.lon}</h2>
    </div>
  );
};

export default LocationData;
