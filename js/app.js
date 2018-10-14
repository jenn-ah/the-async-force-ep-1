

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


//person 14 code

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