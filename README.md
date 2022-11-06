# get-imports
Module to fetch all required and imported modules in Javascript and NodeJS


# Usage

`CommonJS example`

```

const parser = require("get-imported");
let example_one = parser._importRegex("./demos/src/parser.imports.regex.js");
let example_two = parser._requiresObject();
let example_three = parser._requireRegex("./demos/src/parser.require.regex.js");
let example_four = parser._importRegexExtended("./demos/src/parser.imports.regex.extended.js");


```



File example: `demos/parser.imports.regex.mjs`

```


import * as parser from "get-imported";
const path = import('path');
const someModuleCJS = import('./parser.demo.require.cache.test.file.cjs');
const someModuleJS = import('./parser.demo.require.cache.test.file.js');
const acorn = import("chai");

let arr = parser._importESRegex("./demos/src/parser.imports.regex.mjs");
console.log(arr);


```


---


### INSTALL

```npm install get-imported --save```


---


### USAGE


ESM Module : `import { _isESCode } from "get-imported";`


CommonJS Script/ Module : `const checkEsm = require("get-imported");`


`isESCode("./path/to/file.mjs")`


---


### Package APIs


There are other script APIs you may wish to explore that includes the following:

`_checkModuleImports` : Check if a module can be imported.
 Usage:
`_checkModuleImports(absPath)`

`_requiresObject` : Check require.cache list in code - used in your code's process global context.
 Usage:
`_requiresObject()`


`_requireRegex` : Check to see if there are `require()` syntax in code.
 Usage:
`_requireRegex(absPath, basePath = "", useProcessCwd = false)`


`_importRegex` : Check to see if there are `import()` syntax in code.
 Usage:
`_importRegex(absPath, basePath = "", useProcessCwd = false)`


`_importESRegex` : Check to see if there are `import x from ""` syntax in code.
 Usage:
`_importESRegex(absPath, basePath = "", useProcessCwd = false)`


`_importRegexExtended` : Check to see if there are `import()` syntax in code.
 Usage:
`_importRegexExtended(absPath, basePath = "", useProcessCwd = false)`


`_isESMFileExtension` : Check to see if the file has .mjs/ .cjs/ .js extension.
 Usage:
`_isESMFileExtension(absPath)`


`_isNodeCompatibleFileExtension` : Check to see if the file has .mjs/ .cjs/ .js / .node / .wasm extension.
 Usage:
`_isNodeCompatibleFileExtension(absPath)`

`_isESMCodeBase` : Check to see if the code is ESM Module.
 Usage:
`_isESMCodeBase(absPath)`


`_isCJSCodeBase` : Check to see if the code is CommonJS Script or Module.
 Usage:
`_isCJSCodeBase(absPath)`


`_isModuleInPackageJson` : Checks type key's value in package.json.
 Usage:
`_getPackageJsonRoot(startdirectory, options)`


`_isESCode` : Multiple checks to check if the code is ESM Module (other than package.json type key's value check in package.json).
 Usage:
`_isModuleInPackageJson(absPath, packagejsonPath, returns)`


---

