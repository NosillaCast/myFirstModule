/**
 * calcTime will take an array of 3 numbers representing the hours, minutes and seconds and then calculate the total number of seconds that represents and return that value.
 * @module calcTime
 * @param {Array} values - hours, minutes and seconds in an array
 * @returns {Number} sec - total seconds calculated from array of inputs
 * @example calcTime([3,47,28]) // returns 13648
 */
export default function calcTime(values){
  if (values.length !== 3) {
    throw new Error("Array must have 3 values");
  } else {
  let sec = values[0]*3600 + values[1]*60 + values[2];
  return sec;
  }
}
