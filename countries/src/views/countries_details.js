const CountriesDetails = function (countriesDetails, htmlElement) {
  this.countriesDetails = countriesDetails;
  this.htmlElement = htmlElement;
};
CountriesDetails.prototype.render = function (){

  const thisCountriesSection = document.createElement('section');
  thisCountriesSection.id = this.countriesDetails.name;
  this.htmlElement.appendChild(thisCountriesSection);

  this.makeHeader(this.countriesDetails, thisCountriesSection);

}
CountriesDetails.prototype.makeHeader = function(countriesDetails, countriesSection){
  const header = document.createElement('h1');
  header.textContent = countriesDetails.name;
  countriesSection.appendChild(header);
};
module.exports = CountriesDetails;
