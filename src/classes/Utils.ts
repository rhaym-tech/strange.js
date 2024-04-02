import {baseUrl} from "../../package.json";
import {getBuffer} from "../utils/getBuffer";


/**
 * Various Image Utilities
 * @example
 * const image = new StrangeUtils('Strange API token')
 * const circledImage = await image.circle('Image Url')
 */
export class Utils {
    private opts;
    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }
    
    /**
     * Circles the provided image
     * @param image the image url
     */
    async circle(image: string) {
        const endpoint = new URL(`${baseUrl}/utils/circle`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Generates a color from hex color code
     * @param code The hex color code
     */
    async color(code: string) {
        const endpoint = new URL(`${baseUrl}/utils/color`);
        endpoint.searchParams.append("code", code);

        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Denoise an image
     * @param image the image url
     */
    async denoise(image: string) {
        const endpoint = new URL(`${baseUrl}/utils/denoise`);
        endpoint.searchParams.append("image", image);

        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Generates a farewell card
     * @param options {@link GreetingCardOptions} - The options for Farewell card
     */
    async farewellCard(options: GreetingCardOptions) {
        const endpoint = new URL(`${baseUrl}/utils/farewell-card`);
        if (options.avatar)        endpoint.searchParams.append("avatar", options.avatar);
        if (options.background)    endpoint.searchParams.append("bkg", options.background);
        if (options.count)         endpoint.searchParams.append("count", options.count.toString());
        if (options.discriminator) endpoint.searchParams.append("discriminator", options.discriminator);
        if (options.guild)         endpoint.searchParams.append("guild", options.guild);
        if (options.name)          endpoint.searchParams.append("name", options.name);

        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Generates a rank card
     * @param options {@link RankCardOptions} - The options for Rank card
     */
    async rankCard(options: RankCardOptions) {
        const endpoint = new URL(`${baseUrl}/utils/rank-card`);
        endpoint.searchParams.append("", options.level.toString());

        if(options.avatar)          endpoint.searchParams.append("avatar", options.avatar);
        if(options.currentXP)       endpoint.searchParams.append("currentxp", options.currentXP.toString());
        if(options.reqXP)           endpoint.searchParams.append("reqxp", options.reqXP.toString());
        if(options.status)          endpoint.searchParams.append("status", options.status);
        if(options.name)            endpoint.searchParams.append("name", options.name);
        if(options.username)        endpoint.searchParams.append("username", options.username);
        if(options.discriminator)   endpoint.searchParams.append("discriminator", options.discriminator);
        if(options.barColor)        endpoint.searchParams.append("barcolor", options.barColor);
        if(options.backgroundImage) endpoint.searchParams.append("bgImage", options.backgroundImage);
        if(options.backgroundColor) endpoint.searchParams.append("bgColor", options.backgroundColor);
        
        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Generates a spotify card 
     * @param options {@link SpotifyCardOptions} - The options for Spotify card
     */
    async spotifyCard(options: SpotifyCardOptions) {
        const endpoint = new URL(`${baseUrl}/utils/spotify-card`);

        endpoint.searchParams.append("image", options.image);
        endpoint.searchParams.append("author", options.author);
        endpoint.searchParams.append("album", options.album);
        endpoint.searchParams.append("start", options.start.toString());
        endpoint.searchParams.append("end", options.end.toString());
        endpoint.searchParams.append("title", options.title);

        return await getBuffer(endpoint.href, this.opts);
        
    }
    
    /**
     * Generates a Welcome card
     * @param options {@link GreetingCardOptions} - The options for welcome card
     */
    async welcomeCard(options: GreetingCardOptions) {
        const endpoint = new URL(`${baseUrl}/utils/welcome-card`);
        if (options.avatar)        endpoint.searchParams.append("avatar", options.avatar);
        if (options.background)    endpoint.searchParams.append("bkg", options.background);
        if (options.count)         endpoint.searchParams.append("count", options.count.toString());
        if (options.discriminator) endpoint.searchParams.append("discriminator", options.discriminator);
        if (options.guild)         endpoint.searchParams.append("guild", options.guild);
        if (options.name)          endpoint.searchParams.append("name", options.name);

        return await getBuffer(endpoint.href, this.opts);
        
    }
}

interface GreetingCardOptions {
    avatar?: string;
    name?: string;
    discriminator?: string;
    count?: number;
    guild?: string;
    background?: string;
}

interface RankCardOptions {
    avatar?: string;
    currentXP?: number;
    reqXP?: number;
    level: number;
    status?: "dnd" | "idle" | "online" | "offline" | "streaming";
    name?: string;
    username?: string;
    discriminator?: string;
    barColor?: string;
    backgroundImage?: string;
    backgroundColor?: string;
}

interface SpotifyCardOptions {
    image: string;
    author: string;
    album: string;
    start: number;
    end: number;
    title: string;
}