const Countries = require('./models/countries.js');
const CountriesListView = require('./views/countries_list_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countriesListSection = document.querySelector('#country');
   const countriesListViewArea = new CountriesListView(countriesListSection);
   countriesListViewArea.bindEvents();


  const countries = new Countries();
  countries.getData();
});
