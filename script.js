async function getCoords() {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [pos.coords.latitude, pos.coords.longitude];
  }

  let coords;
  let map = L.map("map");

  function buildMap() {
    console.log("Hi from map")
    map.setView(coords, 13);
  
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }
  
  function addMarkers() {
    L.marker(coords).addTo(map);
  }
  
  window.onload = async () => {
    coords = await getCoords();
    console.log("Hi after await")
    buildMap();
    addMarkers();
  };