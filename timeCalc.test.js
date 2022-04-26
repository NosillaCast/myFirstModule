import calcTime from "./timeCalc.mjs";
 
//  === Module-level tests ===
test('Module exports expected value', () => {
  expect(typeof calcTime).toBe('function');
});


//  === Ensure only 3 values passed in array ===
test ('Array length', () => {
  expect(() => {
    calcTime([1,2,3,4]);
  }).toThrow(new Error("Array must have 3 values"));
});

// === Arithmetic to calculate seconds is correct ===
test ('Arithmetic Correct ', () => {
  expect(calcTime([3,47,28])).toBe(13648);
});

//  === Allow negative numbers in sec calculation ===
test ('Negative numbers ', () => {
  expect(calcTime([3,-47,28])).toBe(8008);
});