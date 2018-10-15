
//person4 code
const person4 = new XMLHttpRequest();

function reqListener () {
  person4Name.innerHTML = JSON.parse(person4['responseText']).name;
}

const home4 = new XMLHttpRequest();

function homeWorld () {
 person4HomeWorld.innerHTML = JSON.parse(home4['responseText']).name
}

person4.addEventListener("load", reqListener);
person4.open("GET", "https://swapi.co/api/people/4/");
person4.send();


home4.addEventListener("load", homeWorld);
home4.open("GET", "https://swapi.co/api/planets/1/");
home4.send();


//person14 code

const person14 = new XMLHttpRequest();

function listener14 () {
  person14Name.innerHTML = JSON.parse(person14['responseText']).name;
}

const species14var = new XMLHttpRequest();

function species14 () {
 person14Species.innerHTML = JSON.parse(species14var['responseText']).name;
}

person14.addEventListener("load", listener14);
person14.open("GET", "https://swapi.co/api/people/14/");
person14.send();


species14var.addEventListener("load", species14);
species14var.open("GET", "https://swapi.co/api/species/1/");
species14var.send();


//filmList

//first film

const filmListElem = new XMLHttpRequest(); //film request
const filmListUnordered = document.getElementById('filmList'); //unordered film list
filmListUnordered.innerHTML += '<h2>Films</h2>'
const firstFilm = document.createElement('li'); //first film list
const film1 = document.getElementById('film1title');
const filmPlanets = document.createElement('ul');//planets unordered list



function filmOne () {
  firstFilm.className = "film";
  firstFilm.id = 'film1title';
  filmListUnordered.innerHTML += JSON.parse(filmListElem['response']).results[0].title;
};

function filmOnePlanets () {
  firstFilm.innerHTML += JSON.parse(filmListElem['response']).results[0].title;
  console.log('testing this function');
}

filmListElem.addEventListener("load", filmOne);
filmListElem.addEventListener("load", filmOnePlanets);
filmListElem.open("GET", "https://swapi.co/api/films/");
filmListElem.send();


//second film
const secFilm = document.createElement('li'); //first film list


function filmTwo () {
  secFilm.className = "film";
  //secFilm.id = 'film2title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[1].title;
};

filmListElem.addEventListener("load", filmTwo);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();

//third film

const thirdFilm = document.createElement('li'); //first film list


function filmThree () {
  thirdFilm.className = "film";
  //thirdFilm.id = 'film3title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[2].title;
};

filmListElem.addEventListener("load", filmThree);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();


//fourth film

const fourFilm = document.createElement('li'); //first film list

function filmFour () {
  fourFilm.className = "film";
  //fourthFilm.id = 'film4title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[3].title;
};

filmListElem.addEventListener("load", filmFour);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();

//fifth film

const fiveFilm = document.createElement('li'); //first film list
films.appendChild(filmListUnordered);

function filmFive () {
  fiveFilm.className = "film";
  //fiveFilm.id = 'film5title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[4].title;
};

filmListElem.addEventListener("load", filmFive);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();

//sixth film

const sixthFilm = document.createElement('li'); //first film list
films.appendChild(filmListUnordered);

function filmSix () {
  sixthFilm.className = "film";
  //sixthFilm.id = 'film6title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[5].title;
};

filmListElem.addEventListener("load", filmSix);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();

//seventh film

const sevFilm = document.createElement('li'); //first film list
films.appendChild(filmListUnordered);

function filmSeven () {
  sevFilm.className = "film";
  //sevFilm.id = 'film7title';
  filmListUnordered.innerHTML += '<br>' + JSON.parse(filmListElem['response']).results[6].title;
};

filmListElem.addEventListener("load", filmSeven);
//filmListElem.open("GET", "https://swapi.co/api/films/");
//filmListElem.send();


//planets list

const listingPlanets = document.createElement('li');
listingPlanets.id = "filmPlanet";