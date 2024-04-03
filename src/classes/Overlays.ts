import {baseUrl} from "../../package.json";
import {getBuffer} from "../utils/getBuffer";


/**
 * Various Image Overlays
 * @example
 * const image = new StrangeOverlays('Strange API token')
 * const approve = await image.approve('Image Url')
 */
export class Overlays {
    private opts;
    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }
    
    /**
     * Draws an 'approved' stamp over an image
     * @param image the image url
     */
    async approve(image: string) {
      const endpoint = new URL(`${baseUrl}/overlays/approved`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image with the brazzers logo on the side
     * @param image the image url
     */
     async brazzers(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/brazzers`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
    /**
     * Draws gay overlay on an image
     * @param image the image url
     */
     async gay(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/gay`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
    /**
     * Draws an image over a halloween border
     * @param image the image url
     */
     async halloween(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/halloween`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
     
     
    /**
     * Draws a "Thug Life" over an image
     * @param image the image url
     */
     async thugLife(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/thuglife`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
     
    /**
     * Draws an image with "To Be Continued..." arrow
     * @param image the image url
     */
     async toBeContinued(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/to-be-continued`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
     
    /**
     * Generates a wasted image
     * @param image the image url
     */
     async wasted(image: string) {
       const endpoint = new URL(`${baseUrl}/overlays/wasted`);
        if(image) endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
     }
   

}