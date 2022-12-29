/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: index.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


import {
    default as getimport, _getRoot, _getPackageJsonRoot, _checkModuleImports,
    _requiresObject, _requireRegex, _importRegex, _importESRegex,
    _importRegexExtended, _isESMFileExtension, _isCJSFileExtension, _isESMCodeBase, _isNodeCompatibleFileExtension,
    _isCJSCodeBase, _isESCode, _isModuleInPackageJson, _checkRequireModuleImports,

    getRoot, getPackageJsonRoot, checkModuleImports,
    requiresObject, requireRegex, importRegex, importESRegex,
    importRegexExtended, isESMFileExtension, isCJSFileExtension, isESMCodeBase, isNodeCompatibleFileExtension,
    isCJSCodeBase, isESCode, isModuleInPackageJson, checkRequireModuleImports
} from './index.js';

import * as getimports from "./index.js";

export default getimports;

export {
    _getRoot, _getPackageJsonRoot, _checkModuleImports,
    _requiresObject, _requireRegex, _importRegex, _importESRegex,
    _importRegexExtended, _isESMFileExtension, _isCJSFileExtension, _isESMCodeBase, _isNodeCompatibleFileExtension,
    _isCJSCodeBase, _isESCode, _isModuleInPackageJson, _checkRequireModuleImports,

    getRoot, getPackageJsonRoot, checkModuleImports,
    requiresObject, requireRegex, importRegex, importESRegex,
    importRegexExtended, isESMFileExtension, isCJSFileExtension, isESMCodeBase, isNodeCompatibleFileExtension,
    isCJSCodeBase, isESCode, isModuleInPackageJson, checkRequireModuleImports
};
