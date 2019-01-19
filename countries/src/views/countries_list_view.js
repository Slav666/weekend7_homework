const PubSub = require('../helpers/pub_sub.js');


const CountriesListView = function (htmlElement){
  this.htmlElement = htmlElement;
}

CountriesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-loaded', (event) => {
      console.log('great success!');
      console.log(event.detail);
    })

};

module.exports = CountriesListView;
