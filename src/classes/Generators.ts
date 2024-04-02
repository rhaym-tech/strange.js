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

    async pokemon3000Years(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/3000-years`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async ad(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ad`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async affect(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/affect`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async batslap(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/batslap`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async beautiful(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/beautiful`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async bed(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/bed`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async bobross(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/bobross`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async challenger(image: string, silhouetted?: boolean) {
        const endpoint = new URL(`${baseUrl}/generators/challenger`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async changemymind(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/changemymind`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }

    async clown(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/clown`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async clyde(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/clyde`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }

    async confusedstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/conusedstonk`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async delete(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/delete`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async demotivational(title: string, text: string, image: string) {
        const endpoint = new URL(`${baseUrl}/generators/demotivational`);
        endpoint.searchParams.append("title", title);
        endpoint.searchParams.append("text", text);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async dexter(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/dexter`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async discordblack(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblack`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async discordblue(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblue`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async doublestonk(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/doublestonk`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async facepalm(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/facepalm`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async fusion(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/fusion`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async gruPlan(firstStep: string, secondStep: string, thirdStep: string, forthStep: string) {
        const endpoint = new URL(`${baseUrl}/generators/gru-plan`);
        endpoint.searchParams.append("firstStep", firstStep);
        endpoint.searchParams.append("secondStep", secondStep);
        endpoint.searchParams.append("thirdStep", thirdStep);
        endpoint.searchParams.append("forthStep", forthStep);
        return await getBuffer(endpoint.href, this.opts);
    }

    async heartbreaking(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/heartbreaking`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async hitler(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/hitler`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async jail(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jail`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async jokeoverhead(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jokeoverhead`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async karaba(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/karaba`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async kiss(image1: string, image2: string)  {
        const endpoint = new URL(`${baseUrl}/generators/kiss`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async kyonGun(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/kyon-gun`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async lisaPresentation(text: string) {
        const endpoint = new URL(`${baseUrl}/generators/lisa-presentation`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    }

    async mikkelsen(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mikkelsen`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async mirror(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mirror`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async mms(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mms`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async notstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ohno`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async ohno(text: string){
        const endpoint = new URL(`${baseUrl}/generators/notstonk`);
        endpoint.searchParams.append("text", text);
        return await getBuffer(endpoint.href, this.opts);
    } 

    async planktonPlant(firstStep: string, secondStep: string, thirdStep: string, forthStep: string) {
        const endpoint = new URL(`${baseUrl}/generators/plankton-plan`);
        endpoint.searchParams.append("firstStep", firstStep);
        endpoint.searchParams.append("secondStep", secondStep);
        endpoint.searchParams.append("thirdStep", thirdStep);
        endpoint.searchParams.append("forthStep", forthStep);
        return await getBuffer(endpoint.href, this.opts);
    }

    async poutine(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/poutine`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async rip(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/rip`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async shit(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/shit`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async snyder(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/snyder`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async spank(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/spank`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        return await getBuffer(endpoint.href, this.opts);
    }

    async tattoo(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/tattoo`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async thomas(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/thomas`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async trash(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/trash`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async wanted(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/wanted`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async worthless(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/worthless`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }

    async youtube(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/youtube`);
        endpoint.searchParams.append("image", image);
        return await getBuffer(endpoint.href, this.opts);
    }
}
