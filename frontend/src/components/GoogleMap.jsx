import { useEffect, useRef } from 'react';

const GoogleMap = ({ center, zoom }) => {
  const ref = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (!window.google) {
      console.warn('Google Maps JavaScript API is not loaded. Map will not be displayed.');
      return;
    }

    try {
      // Initialize the map only once
      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(ref.current, {
          center,
          zoom,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#444444" }]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{ "color": "#f2f2f2" }]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{ "visibility": "simplified" }]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }]
            }
          ]
        });
      }

      // Update the map center if it changes
      if (mapRef.current && center) {
        mapRef.current.setCenter(center);
      }
    } catch (error) {
      console.error('Error initializing Google Map:', error);
    }
  }, [center, zoom]);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }} />
  );
};

export default GoogleMap;