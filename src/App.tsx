import React, { useEffect } from 'react';
import './App.css';

declare global {
  interface Window {
    H: any;
  }
}

// note: this is added to the window object in index.html
const { H } = window
const { REACT_APP_HERE_MAPS_API_KEY } = process.env

const App: React.FC = () => {
  useEffect(() => {
    // note: https://developer.here.com/documentation/maps/dev_guide/topics/get-started.html
    // Initialize the platform object:
    const platform = new H.service.Platform({
      'apikey': REACT_APP_HERE_MAPS_API_KEY
    });

    // Obtain the default map types from the platform object
    const maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    // tslint:disable-next-line
    const map = new H.Map(
      document.getElementById('mapContainer'),
      maptypes.vector.normal.map,
      {
        zoom: 10,
        center: { lng: 13.4, lat: 52.51 }
      }
    );
  }, []);
                                                                                                       
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <div id="mapContainer" style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default App;
