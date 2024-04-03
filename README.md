<h1 align="center">
<img src="./assets/strange.png" width=150 ></img>
<br>
<b> Strange.js<b>
</h1>
<h4 align="center">is a powerful library that simplifies interaction with Strange API, making image manipulation easier.</h4>
<h3 align="center">Written in <img width=16 src="./assets/typescript-icon.svg"></img>TypeScript</h3>


### Useful links
**Documentations**: [Here](https://strangejs-docs.rhaym-tech.me/classes/strangeimage)<br>
**Support Server**: [Join](https://discord.gg/Cv3FbdXCtY)

#### Usage
> [!IMPORTANT]  
> Before we begin, you should have your Strange API key saved somewhere securely. If you don't have a key yet, please get it from [here](https://strangeapi.hostz.me/dashboard) or by joining Strange [Support Server](https://discord.gg/Cv3FbdXCtY).


### Examples:

#### CommonJS:
```js
const {StrangeImage} = require("strange.js");
const fs = require("fs");

(async () => {
    const strange = new StrangeImage("strange-api-token"); // replace your token here

    const buffer = await strange.filters.blur("image-url", 6);

    fs.writeFileSync("blurry-image.png", buffer); // saved the buffer as a png file to disk
})();
```

#### ESM and TypeScript:
```js
import StrangeImage from "strange.js"; // can be imported by default

const fs = require("fs");

(async () => {
    const strange = new StrangeImage("strange-api-token"); // replace your token here

    const buffer = await strange.filters.blur("image-url", 6);

    fs.writeFileSync("blurry-image.png", buffer); // saved the buffer as a png file to disk
})();
```

#### Using Sub classes:
```js
import {StrangeFilters, StrangeGenerators, StrangeOverlays, StrangeUtils} from "strange.js"; // for ESM and TS users
const {StrangeFilters, StrangeGenerators, StrangeOverlays, StrangeUtils} = require("strange-js"); // for Common.js users

const fs = require("fs");

(async () => {
    const filters = new StrangeFilters("strange-api-token"); // replace your token here
    const overlays = new StrangeOverlays("strange-api-token"); // replace your token here

    const buffer1 = await filters.blur("image-url", 6);
    const buffer2 = await overlays.toBeContinued("image-url");

    fs.writeFileSync("blurry-image.png", buffer1); // saved the buffer as a png file to disk
    fs.writeFileSync("tobecontinued-image.png", buffer2); // saved the buffer as a png file to disk
})();
```
