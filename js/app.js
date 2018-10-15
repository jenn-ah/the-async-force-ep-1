
//main api request

function apiReqest (url, cb) {
  const xhr = new XMLHttpRequest(url);
  xhr.addEventListener('load', cb);
  xhr.send();
}

//function to process data

function processPlanets (planetdata) {
  const planets = JSON.parse(planetdata['responseText']);
  planets.forEach(planet => {
    
  });
}