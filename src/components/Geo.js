const Geo = (props) => {
  return (
    <div>
      <h3>Geo</h3>
      <h4>Lat: {props.geo.lat}</h4>
      <h4>Lng: {props.geo.lng}</h4>
    </div>
  );
};

export default Geo;
