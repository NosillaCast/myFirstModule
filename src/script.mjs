#!/usr/bin/env node

/**
 * @fileoverview Main entry point for the script.
 */
import calcTime from "./calcTime.mjs";

let values = [3, 47,28]
let totalSec = calcTime(values);
console.log(`Total seconds: ${totalSec}`);
