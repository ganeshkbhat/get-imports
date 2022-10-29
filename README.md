# get-imports
Module to fetch all required and imported modules in Javascript and NodeJS


# Usage

`CommonJS example`

```

const parser = require("get-imports");
let example_one = parser._importRegex("./demos/src/parser.imports.regex.js");
let example_two = parser._requiresObject();
let example_three = parser._requireRegex("./demos/src/parser.require.regex.js");
let example_four = parser._importRegexExtended("./demos/src/parser.imports.regex.extended.js");


```



File example: `demos/parser.imports.regex.mjs`

```


import * as parser from "../index.js";
const path = import('path');
const someModuleCJS = import('./parser.demo.require.cache.test.file.cjs');
const someModuleJS = import('./parser.demo.require.cache.test.file.js');
const acorn = import("chai");

let arr = parser._importESRegex("./demos/src/parser.imports.regex.mjs");
console.log(arr);


```