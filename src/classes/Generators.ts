import getBuffer from '../utils/getBuffer';
import { baseUrl } from "../../package.json";

export default class Generators {
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
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async ad(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ad`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async affect(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/affect`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async batslap(image1: string, image2: string) {
        const endpoint = new URL(`${baseUrl}/generators/batslap`);
        endpoint.searchParams.append("image1", image1);
        endpoint.searchParams.append("image2", image2);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async beautiful(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/beautiful`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async bed(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/bed`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async bobross(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/bobross`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async challenger(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/challenger`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async changemymind(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/changemymind`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async clown(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/clown`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async clyde(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/clyde`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async confusedstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/conusedstonk`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async delete(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/delete`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async demotivational(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/demotivational`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async dexter(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/dexter`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async discordblack(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblack`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async discordblue(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/discordblue`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async doublestonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/doublestonk`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async facepalm(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/facepalm`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async fusion(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/fusion`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async gruPlan(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/gru-plan`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async heartbreaking(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/heartbreaking`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async hitler(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/hitler`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async jail(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jail`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async jokeoverhead(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/jokeoverhead`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async karaba(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/karaba`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async kiss(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/kiss`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async kyonGun(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/kyon-gun`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async lisaPresentation(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/lisa-presentation`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async mikkelsen(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mikkelsen`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async mirror(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mirror`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async mms(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/mms`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async notstonk(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/notstonk`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async ohno(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/ohno`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async planktonPlant(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/plankton-plant`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async poutine(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/poutine`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async rip(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/rip`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async shit(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/shit`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async snyder(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/snyder`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async spank(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/spank`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async tattoo(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/tattoo`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async thomas(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/thomas`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async trash(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/trash`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async wanted(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/wanted`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async worthless(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/worthless`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }

    async youtube(image: string) {
        const endpoint = new URL(`${baseUrl}/generators/youtube`);
        endpoint.searchParams.append("image", image);
        const response = await getBuffer(endpoint.href, this.opts);
        return response.buffer;
    }
}
