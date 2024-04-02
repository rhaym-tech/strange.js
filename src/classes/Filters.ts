import {baseUrl} from "../../package.json";
import {getBuffer} from "../utils/getBuffer";


/**
 * Applies filters to a given image url
 * @example
 * const image = new StrangeFilters('Strange API token')
 * const blurredImage = await image.blur('Image Url', 6)
 */
export class Filters {
    private opts;
    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }

    /**
     * Blurs an image
     * @param image The image url
     * @param level Intensity of the blur
     */
    async blur(image: string, level?: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        if (level) endpoint.searchParams.append("level", level.toString());

        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Brightens an image
     * @param image The image url
     * @param amount Brightness amount
     */
    async brighten(image: string, amount?: number) {
        const endpoint = new URL(`${baseUrl}/filters/brighten`);
        endpoint.searchParams.append("image", image);
        if (amount) endpoint.searchParams.append("amount", amount.toString());

        return await getBuffer(endpoint.href, this.opts);

    }

    /**
     * Burns an image
     * @param image The image url
     * @param level Burn intensity
     */
    async burn(image: string, level?: number) {
        const endpoint = new URL(`${baseUrl}/filters/burn`);
        endpoint.searchParams.append("image", image);
        if (level) endpoint.searchParams.append("level", level.toString());
        
        return await getBuffer(endpoint.href, this.opts);

    }
    
    /**
     * Darkens an image
     * @param image The image url
     * @param amount Darkness amount
     */
    async darken(image: string, amount?: number) {
        const endpoint = new URL(`${baseUrl}/filters/darken`);
        endpoint.searchParams.append("image", image);
        if (amount) endpoint.searchParams.append("amount", amount.toString());
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Applies Deepfry filter to an image
     * @param image The image url
     */
    async deepfry(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/deepfry`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);

    }

    /**
     * Distorts an image
     * @param image The image url
     * @param level The level of distortion
     */
    async distort(image: string, level: number) {
        const endpoint = new URL(`${baseUrl}/filters/distort`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("level", level.toString());

        return await getBuffer(endpoint.href, this.opts);
      
    }
    
    /**
     * Applies Greyscale filter to an image
     * @param image The image url
     */
    async greyscale(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/greyscale`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Inverts colors of an image
     * @param image The image url
     */
    async invert(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/invert`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Pixilates an image
     * @param image The image url
     * @param pixels Pixels
     */
    async pixelate(image: string, pixels?: number) {
        const endpoint = new URL(`${baseUrl}/filters/pixelate`);
        endpoint.searchParams.append("image", image);
        if (pixels) endpoint.searchParams.append("pixels", pixels.toString());
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Applies sepia filter to an image
     * @param image The image url
     */
    async sepia(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/sepia`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
    }

    /**
     * Adds sharpness filter to your image
     * @param image The image url
     * @param level Sharpness intensity
     */
    async sharpen(image: string, level?: number) {
        const endpoint = new URL(`${baseUrl}/filters/sharpen`);
        endpoint.searchParams.append("image", image);
        if (level) endpoint.searchParams.append("level", level.toString());

        return await getBuffer(endpoint.href, this.opts);
    }

    /**
     * Adds Threshold filter to your image
     * @param image The image url
     * @param amount Threshold amount
     */
    async threshold(image: string, amount: number) {
        const endpoint = new URL(`${baseUrl}/filters/threshold`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("amount", amount?.toString());

        return await getBuffer(endpoint.href, this.opts);
        
    }
}