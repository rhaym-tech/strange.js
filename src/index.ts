import { Filters, Generators, Overlays, Utils } from "./classes";

class StrangeImage {

    constructor(token: string) {
        if(!token) throw new Error("Strange API Token must be passed");
        
        this.filters = new Filters(token);
        this.generators = new Generators(token);
        this.overlays = new Overlays(token);
        this.utils = new Utils(token);
    }
    
    filters: Filters;
    generators: Generators;
    overlays: Overlays;
    utils: Utils;

    test() {
        console.log("Hello world");
    }
}

export {StrangeImage};
export default StrangeImage;