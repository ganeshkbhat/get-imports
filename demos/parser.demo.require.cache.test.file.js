/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser.demo.require.cache.test.file.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var test = require('./parser.demo.require.cache.test.file.cjs');
var tester = import("./parser.demo.require.cache.test.file.cjs");

var path = require('path');
var c = require('fs');
var f = require('child_process');
