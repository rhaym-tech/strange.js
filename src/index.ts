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
    
    /**
     * Class with filter methods for manipulating images
     */
    filters: Filters;
    
    /**
     * Class with generators methods for manipulating images
     */
    generators: Generators;
    
     /**
     * Class with overlays methods for manipulating images
     */
    overlays: Overlays;
    
     /**
     * Class with utils methods for manipulating images
     */
    utils: Utils;
}

export {
    Filters as StrangeFilters,       // Filters class
    Generators as StrangeGenerators, // Generators class
    Overlays as StrangeOverlays,     // Overlays class
    Utils as StrangeUtils,           // Utils class

    // Main Class
    StrangeImage
};

// Export Main class by default
export default StrangeImage;