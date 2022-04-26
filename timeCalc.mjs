/**
 * calcTime will take an array of 3 numbers representing the hours, minutes and seconds and then calculate the total number of seconds that represents and return that value.
 * 
 * @input {Array} values - hours, minutes and seconds in an array
 * @returns {Number} sec - total seconds calculated from array of inputs
 */
export default function calcTime(values){
  // console.log(`calcTime called with ${values}`);
  let sec = values[0]*3600 + values[1]*60 + values[2];
  return sec
}
