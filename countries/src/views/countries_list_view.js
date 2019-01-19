const PubSub = require('../helpers/pub_sub.js');
const CountriesDetails = require('./countries_details.js')

const CountriesListView = function (htmlElement){
  this.htmlElement = htmlElement;
}

CountriesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-loaded', (event) => {
      // console.log('great success!');
      // console.log(event.detail);
    // })
    const countriesList = event.detail;
        countriesList.forEach((country) => {
          const countriesDetails = new CountriesDetails(country, this.htmlElement);
          countriesDetails.render();
        });
      });
};

module.exports = CountriesListView;
