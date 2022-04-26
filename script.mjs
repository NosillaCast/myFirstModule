#!/usr/bin/env node

import calcTime from "./timeCalc.mjs";

let values = [3, 47,28]
let totalSec = calcTime(values);
console.log(`Total seconds: ${totalSec}`);
