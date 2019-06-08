let map = null;
let infoWindows = [];
let iconDefaultColor = [];

placesOfInterest = [
  { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
  { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
  { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
  { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
  { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
  { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
  { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
  { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
  { name: 'Cão Véio', lat: -23.55813, lng: -46.679508 },
  { name: 'Cervejaria Nacional', lat: -23.56474, lng: -46.690641 },
  { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
  { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIconYellow = {
  path:
    'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
  fillColor: '#F7B217',
  fillOpacity: 0.98,
  scale: 0.98,
  strokeColor: '#666666',
  strokeWeight: 3
};

const customIconWhite = {
  path:
    'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
  fillColor: '#FFFF',
  fillOpacity: 0.98,
  scale: 0.98,
  strokeColor: '#666666',
  strokeWeight: 3
};

const addMarker = (marker) => {
  marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(marker.lat, marker.lng),
    icon: customIconYellow,
    animation: google.maps.Animation.DROP,
    title: marker.name
  });
  modifyMarkerForWhite(marker, marker.title);
};

const modifyMarkerForWhite = (marker, namePlace) => {
  google.maps.event.addListener(marker, 'click', function() {
    //Reset all icons colors
    iconDefaultColor.push(marker);
    iconDefaultColor.map(icon => {
      return icon.setIcon(customIconYellow);
    });
    marker.setIcon(customIconWhite);
    windowNamePlace(marker, namePlace);
  });
};

const windowNamePlace = (markerWindow, namePlace) => {
  let infowindow = new google.maps.InfoWindow({
    content: namePlace
  });
  //Close all informations windows
  infoWindows.push(infowindow);
  infoWindows.map(window => {
    window.close();
  });

  //Reset the icon color if information window is closed
  infowindow.addListener('closeclick', function() {
    markerWindow.setIcon(customIconYellow);
  });

  //Open a single information window
  infowindow.open(map, markerWindow);
};

const getLocation = () => {
  // Capturing geolocation of the web page visitor.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('O seu navegador não suporta Geolocalização.');
  }

  // Return function if the browser supports Geolocation.
  function showPosition(position) {
    // Saves the captured values into variables.
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const map = 0;
    google.maps.event.addDomListener(window, 'load', initMap(latitude, longitude));
  }
};

function initMap(latitude, longitude) {
  let lat = latitude;
  let lon = longitude;
  
  if (lat && lon) {
    const mapOptions = {
      zoom: 14,
      center: {
        lat: latitude,
        lng: longitude
      }
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
      icon: customIconYellow,
      position: {
        lat: latitude,
        lng: longitude
      },
      map: map
    });
    const infowindow = new google.maps.InfoWindow({
      content: '<p>Estou aqui:' + marker.getPosition() + '</p>'
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  } else {
    const mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(-23.562172, -46.655794),
      gestureHandling: 'greedy',
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      },
      disableDefaultUI: true,
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.DEFAULT
      }
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  //Add all markers in the map
  placesOfInterest.map((place, idx) => {
    return setTimeout(function() {
      addMarker(placesOfInterest[idx]);
    }, idx * 500);
  });
}
