// Code your solution in this file!
const drivers = ['Ken', 'Bobo', 'Rhono', 'Brenda'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  
  const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }
  
  function fareDoubler(x) {
    return x * 2;
  }
  
  function fareTripler(x) {
    return x * 3;
  }
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }