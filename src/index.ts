import { Filters, Generators, Overlays, Utils } from "./classes";

/**
 * An API Wrapper for Strange API, an image manipulator.
 * @example
 * // Example usage
 * const image = new StrangeImage('Strange API token')
 * const blurredImage = image.filters.blur('Image Url', 6)
 */
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
}

export {StrangeImage};
export default StrangeImage;