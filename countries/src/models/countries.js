const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')

const Countries = function () {
  this.data = null;

};

Countries.prototype.getData = function () {
  const url = `https://restcountries.eu/rest/v2/all`;

  const request = new RequestHelper(url);
  const myPromise = request.get();
  myPromise.then((data) => {
    this.data = data;
    PubSub.publish('Countries:countries-data-loaded', this.data);
  });
  myPromise.catch((err) => {
    console.error(err)
  });
};

module.exports = Countries;
