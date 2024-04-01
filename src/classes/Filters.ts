import {baseUrl} from "../../package.json";
import getBuffer from "../utils/getBuffer";

export default class {
    private opts;
    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }

    /**
     * blur filter
     * @param image The image url
     * @param level Intensity of the blur
     */
    async blur(image: string, level: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("level", level.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async brighten(image: string, amount: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("amount", amount.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    /**
     * filter
     * @param image The image url
     * @param level Burn intensity
     */
    async burn(image: string, level: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("level", level.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async darken(image: string, amount: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("amount", amount.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async deepfry(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    /**
     * filter
     * @param image The image url
     * @param level The level of distortion
     */
    async distort(image: string, level: number) {
        const endpoint = new URL(`${baseUrl}/filters/blur`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("level", level.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async greyscale(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/greyscale`);
        endpoint.searchParams.append("image", image);

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async invert(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/invert`);
        endpoint.searchParams.append("image", image);

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async pixelate(image: string, pixels: number) {
        const endpoint = new URL(`${baseUrl}/filters/pixelate`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("pixels", pixels.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    async sepia(image: string) {
        const endpoint = new URL(`${baseUrl}/filters/sepia`);
        endpoint.searchParams.append("image", image);

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    /**
     * Adds sharpness filter to your image
     * @param image The image url
     * @param level Sharpness intensity
     */
    async sharpen(image: string, level: number) {
        const endpoint = new URL(`${baseUrl}/filters/sharpen`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("level", level.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }

    /**
     * Adds Threshold filter to your image
     * @param image The image url
     * @param amount Threshold amount
     */
    async threshold(image: string, amount: number) {
        const endpoint = new URL(`${baseUrl}/filters/threshold`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("amount", amount.toString());

        const response = await getBuffer(endpoint.href, this.opts);
        if(response.success)
            return response.buffer
        else
            throw new Error("Error accorded while generating image, failed with error: " + response.status);
    }
}