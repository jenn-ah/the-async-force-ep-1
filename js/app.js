
//main api request

apiReqest('https://swapi.co/api/films/', processMovies);


function apiReqest (url, cb) {
  const xhr = new XMLHttpRequest(url);
  xhr.addEventListener('load', cb);
  xhr.open('GET', url);
  xhr.send();
}

//functions to process movies

function processMovies () {
  const movies = JSON.parse(this.responseText);
  if (movies && movies.results) {
    const filmElem = document.getElementById('filmList');
    movies.results.forEach(movie => {
    buildMovie(movie, filmElem);
    //console.log('movie.planets', movie.planets);
    //console.log(processPlanets('https://swapi.co/api/planets/2/', cb));

    });
  }
}

function buildMovie (movie, parentElem) {
  const movieElem = document.createElement('li');
  movieElem.className = 'film';
  const filmTitleElem = document.createElement('h2');
  filmTitleElem.className = 'filmTitle';
  filmTitleElem.innerHTML = movie.title;
  movieElem.appendChild(filmTitleElem);
  parentElem.appendChild(movieElem);
  const planetsTitle = document.createElement('h3');
  planetsTitle.innerHTML = 'Planets';
  movieElem.appendChild(planetsTitle);
  const planetsContainer = document.createElement('ul');
  planetsContainer.className = 'filmPlanets';
  movie.planets.forEach(planetUrl => {
    buildPlanet(planetUrl, planetsContainer);
  });
};

//function to process planet data

function processPlanets (planetUrl, cb) {
  apiReqest(planetUrl, cb);
}

function buildPlanet (planet, parentElem) {
  const planetElem = document.createElement('li');
  planetElem.className = 'planet';
  const planetTitleElem = document.createElement('h2');
  planetTitleElem.className = 'planetName';
  planetTitleElem.innerHTML = planet.planets;
  planetElem.appendChild(planetTitleElem);
  parentElem.appendChild(planetElem);
};
