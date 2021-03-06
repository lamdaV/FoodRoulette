var Fetch = require("whatwg-fetch");

// Un/comment baseUrl depending on server hosting or local testing
var baseUrl =  "https://lamdav-react-reddit.herokuapp.com";
// var baseUrl = "http://localhost:8080";

var Service = {
  post: function(url, data) {
    if (data) {
      return fetch(baseUrl + url, {
        headers: {
          "Accept": "text/plain",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      }).then(function(response) {
        return response.json();
      });
    }
    return fetch(baseUrl + url).then(function(response) {
      return response.json();
    });
  }
}

module.exports = Service;
