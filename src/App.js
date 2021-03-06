import React, { useEffect, useState } from 'react';
import "./App.css";
import { getPlacesData } from './api/index';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {

  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect( () => {
      navigator.geolocation.getCurrentPosition( ( { coords: {latitude, longitude} } ) => {
        setCoordinates({ lat: latitude, lng: longitude });
      })
  }, [])
  
  useEffect( () => {
    console.log(coordinates, bounds);

    getPlacesData(
      // Problem
      // bounds.sw, bounds.ne
      )
    .then( (data) => {
      setPlaces(data);
      console.log(data);
    } )
    .catch( () => {} )
  }, [coordinates, bounds] );


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
