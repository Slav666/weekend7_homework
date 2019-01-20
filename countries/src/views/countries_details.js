// const PubSub = require('../helpers/pub_sub.js');

const CountriesDetails = function (countriesDetails, htmlElement) {
  this.countriesDetails = countriesDetails;
  this.htmlElement = htmlElement;
  
};
CountriesDetails.prototype.render = function (){

  const thisCountriesSection = document.createElement('section');
  thisCountriesSection.id = this.countriesDetails.name;
  this.htmlElement.appendChild(thisCountriesSection);

  this.makeHeader(this.countriesDetails, thisCountriesSection);
  this.makeCapital(this.countriesDetails, thisCountriesSection);
  this.makeRegion(this.countriesDetails, thisCountriesSection);
  this.makeFlag(this.countriesDetails, thisCountriesSection);
}
CountriesDetails.prototype.makeHeader = function(countriesDetails, countriesSection){
  const header = document.createElement('h1');
  header.textContent = countriesDetails.name;
  countriesSection.appendChild(header);
};


CountriesDetails.prototype.makeCapital = function(countriesDetails, countriesSection){
  const capital = document.createElement('p');
  capital.textContent = countriesDetails.capital;
  countriesSection.appendChild(capital);
};
CountriesDetails.prototype.makeRegion = function(countriesDetails, countriesSection){
  const region = document.createElement('p');
  region.textContent = countriesDetails.region;
  countriesSection.appendChild(region);
};
CountriesDetails.prototype.makeFlag = function(countriesDetails, countriesSection){
const flagImage = document.createElement('img');
  flagImage.src = countriesDetails.flag;
  countriesSection.appendChild(flagImage);
};
module.exports = CountriesDetails;
