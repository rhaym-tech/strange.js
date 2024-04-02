import {getBuffer} from '../utils/getBuffer';
import { baseUrl } from "../../package.json";


/**
 * Various Image Generators
 * @example
 * const image = new StrangeImage('Strange API token')
 * const ad = image.generators.ad('Image Url')
 */
export class Generators {
    private opts;

    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }
    
    /**
     * Draws an image over Pokémon's "It's been 3000 years" meme
     * @param image The image url
     */
    async pokemon3000Years(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/3000-years`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates an Ad Image
     * @param image The image url
     */
    async ad(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ad`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates an Affect Image
     * @param image The image url
     */
    async affect(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/affect`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a batslap image
     * @param image1 The image 1 url
     * @param image2 The kmage 2 url
     */
    async batslap(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/batslap`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a beutiful image
     * @param image The image url
     */
    async beautiful(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/beautiful`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a bed image
     * @param image1 The image 1 url
     * @param image2 Rhe image 2 url
     */
    async bed(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/bed`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a bobross painting image
     * @param image The image url
     */
    async bobross(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/bobross`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image over Super Smash Bros "Challenger Approaching" screen
     * @param image The image url
     * @param silhouetted Whether the image  should be silhouetted
     */
    async challenger(image: string, silhouetted?: boolean) {
        const endpoint = new URL(`${baseUrl}/generators/challenger`);
        endpoint.searchParams.append("image", image);
        if (silhouetted) {
          endpoint.searchParams.append("silhouetted", silhouetted.toString())
        }
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a changemymind image
     * @param text The text content
     */
    async changemymind(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/changemymind`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a clown image
     * @param image The image url
     */
    async clown(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/clown`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a clyde image
     * @param text The text content
     */
    async clyde(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/clyde`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a confusedstonk image
     * @param image The image url
     */
    async confusedstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/conusedstonk`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a delete image
     * @param image The image url
     */
    async delete(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/delete`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image and the text you specify as a demotivational poster
     * @param title The title for the poster
     * @param text The text as the poster desceiption
     * @param image The image url
     */
    async demotivational(title: string, text: string, image: string) {
        const endpoint = new URL(`${baseUrl}/generators/demotivational`);
        endpoint.searchParams.append("title", title);
        endpoint.searchParams.append("text", text);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image avatar over the screen of Dexter from Pokémon
     * @param image The image url
     */
    async dexter(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/dexter`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a Discord black overlay
     * @param image The image url
     */
    async discordblack(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblack`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a Discord blue overlay
     * @param image The image url
     */
    async discordblue(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblue`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a facepalm image
     * @param image1 The image 1 url
     * @param image2 The image 2 url
     */
    async doublestonk(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/doublestonk`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a facepalm image
     * @param image The image url
     */
    async facepalm(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/facepalm`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws baseImage over overlayImage
     * @param image1 The image 1 url
     * @param image2 The image 2 url
     */
    async fusion(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/fusion`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Sends a Gru's Plan meme with steps of your choice
     * @param firstStep The first step of the plan
     * @param secondStep The second step of the plan
     * @param thirdStep The third step of the plan
     * @param fourthStep The fourth step of the plan
     */
    async gruPlan(firstStep: string, secondStep: string, thirdStep: string, fourthStep: string) {
        const endpoint = new URL(`${baseUrl}/generators/gru-plan`);
        endpoint.searchParams.append("firstStep", firstStep);
        endpoint.searchParams.append("secondStep", secondStep);
        endpoint.searchParams.append("thirdStep", thirdStep);
        endpoint.searchParams.append("fourthStep", fourthStep);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a heartbreaking image
     * @param image The image url
     */
    async heartbreaking(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/heartbreaking`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a hitler image
     * @param image The image url
     */
    async hitler(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/hitler`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a jail image
     * @param image The image url
     */
    async jail(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jail`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a jokeoverhead image
     * @param image The image url
     */
    async jokeoverhead(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jokeoverhead`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a karaba image
     * @param image The image url
     */
    async karaba(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/karaba`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a kiss image
     * @param image1 The image 1 url
     * @param image2 the image 2 url
     */
    async kiss(image1: string, image2: string)  {
        const endpoint = new URL(`${baseUrl}/generators/kiss`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image behind Kyon shooting a gun
     * @param image The image url
     */
    async kyonGun(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/kyon-gun`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Sends a "Lisa Presentation" meme with the presentation of your choice
     * @param text A text for the meme
     */
    async lisaPresentation(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/lisa-presentation`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a mikkelsen meme
     * @param image The image url
     */
    async mikkelsen(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mikkelsen`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a mms image
     * @param image The image url
     */
    async mirror(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mirror`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a mms image
     * @param image The image url
     */
    async mms(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mms`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a notstonk image
     * @param image The image url
     */
    async notstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ohno`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a ohno image
     * @param text The text content
     */
    async ohno(text: string){
        const endpoint = new URL(`${baseUrl}/generators/notstonk`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    } 
    
    /**
     * Sends a Plankton's Plan meme with steps of your choice
     * @param firstStep The first step of the plan
     * @param secondStep The second step of the plan
     * @param thirdStep The third step of the plan
     * @param fourthStep The fourth step of the plan
     */
    async planktonPlant(firstStep: string, secondStep: string, thirdStep: string, fourthStep: string) {
        const endpoint = new URL(`${baseUrl}/generators/plankton-plan`);
        endpoint.searchParams.append("firstStep", firstStep);
        endpoint.searchParams.append("secondStep", secondStep);
        endpoint.searchParams.append("thirdStep", thirdStep);
        endpoint.searchParams.append("fourthStep", fourthStep);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a poutine image
     * @param image The image url
     */
    async poutine(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/poutine`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a rip image
     * @param image The image url
     */
    async rip(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/rip`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a shit image
     * @param image The image url
     */
    async shit(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/shit`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a snyder meme
     * @param image The image url
     */
    async snyder(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/snyder`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a spank image
     * @param image1 The image 1 url
     * @param image2 The image 2 url
     */
    async spank(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/spank`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a stonk image 
     * @param image The image url
     */
    async stonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/stonk`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a tatoo image
     * @param image The image url
     */
    async tattoo(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/tattoo`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a thomas image
     * @param image The image url
     */
    async thomas(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/thomas`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a trash image
     * @param image The image url
     */
    async trash(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/trash`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Generates a wanted image
     * @param image The image url
     */
    async wanted(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/wanted`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Draws an image over Gravity Falls "Oh, this? This is worthless." meme
     * @param image The image url
     */
    async worthless(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/worthless`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
    
    /**
     * Sends a youtube comment with the text of your choice
     * @param image the username avatar url
     * @param username The username as the comment author
     * @param text The text to be used in the returned image results
     */
    async youtube(image: string, username: string, text: string) {
        const endpoint = new URL(`${baseUrl}/generators/youtube`);
        endpoint.searchParams.append("image", image);
        endpoint.searchParams.append("username", username);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }
}
