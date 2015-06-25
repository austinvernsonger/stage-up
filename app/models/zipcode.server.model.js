'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  http = require('http'),
  https = require('https');

/**
 * ZipCode Schema
 */
var ZipCodeSchema = new Schema({
  zip: {
    type: Number,
    trim: true,
    default: ''
  }
});

ZipCodeSchema.methods.checkDistance = function(home, zip) {
  if (home === zip) {
    return 0;
  } else if (typeof home[zip] === 'number') {
    return home[zip];
  } else {
    var request = {
      host: 'http://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/' + home + '/' + zip + '/mile',
      
    }
  }
};

// angular.module('zipcode').controller('ZipCodeController', ['$scope', '$http', '$location', 'Users', 'Authentication',
//   function($scope, $http, $location, Users, Authentication) {
//     // $scope.user = Authentication.user;


//     // Check if there are additional accounts 
//     $scope.checkDistance = function(home, zip) {
//       if (home === zip) return 0;
//       if (typeof home[zip] === 'number') return home[zip];
//       $http.get('https://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/' + home + '/' + zip + '/mile')
//         .success(function(data, status, headers, config) {
//           console.log(data); // just check it for now. we want to store it in the object for that zip code.

//         })
//         .error(function(data, status, headers, config) {});
//     };
//   }
// ]);


// http://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/<zip_code1>/<zip_code2>/mile
