var http = require('http');


callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

postTestData = function(id, parentId, temp, pressure) {
  var testdata = {
    p: parentId,
    temp: temp,
    pressure: pressure
  };

  var userString = JSON.stringify(testdata);

  var headers = {
    'Content-Type': 'application/json',
    'Content-Length': userString.length
  };

  //The url we want is `www.nodejitsu.com:1337/`
  var options = {
    host: 'localhost',
    path: '/api/devices/' + id,
    port: '9999',
    method: 'POST',
    headers: headers
  };

  var req = http.request(options, callback);

  req.write(userString);
  req.end();
}

postTestData(1, null, 20.5, 1000);
postTestData(2, 1, 21, 1010);