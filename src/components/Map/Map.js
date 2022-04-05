import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutined from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./style";

const Map = ({ setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const coordinates = { lat: 28.6448, lng: 77.216721 };

  return (
    <div style={{ marginTop: "5rem" }} className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDK1NOfupyfiYhSs75_QhIqvcoFgsp1nG4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[60, 50, 50, 50]}
        options={""}
        onChange={''}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
