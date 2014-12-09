'use strict';
var mmm = require('../../../../lib/mean_median_mode');

module.exports = function(app) {

  app.factory('calcFactory', function() {
    return function() {
      return {
        mean: function(numList) {
          var sum = 0;
          console.log('server module, mmm: ' + numList);
          for (var i = 0; i<numList.length; i++) {
            sum += numList[i];
          }
          return sum/numList.length;
        },

        median: function(numList) {
          if (numList.length%2 !== 0) {
            var midNum = Math.floor(numList.length/2);
            return numList[midNum];
          } else {
            var highMidNum =(numList.length/2);
            var lowMidNum = (numList.length/2 - 1);
            return ((numList[highMidNum] + numList[lowMidNum])/2);
          }
        },

        mode: function(numList) {
          var numCount = {};

          //starts each of the counters at 0
          for (var i = 0; i<numList.length; i++) {
            numCount[numList[i]]=0;
          }

          for (i = 0; i<numList.length; i++) {
            var instance = numList[i];
            numCount[instance]++;
          }

          var numOfInstances = 0;
          var numToReturn;
          for (var key in numCount) {
            if (numCount[key] > numOfInstances) {
              numOfInstances = numCount[key];
              numToReturn = key;
            }
          }
          return +numToReturn;
        }
      };
    };
  });
};
