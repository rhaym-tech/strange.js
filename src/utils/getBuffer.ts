import fetch, { RequestInit, Response } from "node-fetch";

/**
 * Returns a buffer from the given url
 * @param url - the url to get the buffer from
 * @param options - any other fetch options
 */
export async function getBuffer(url: string, options?: RequestInit): Promise<Buffer> {
    try {
        const response: Response = options ? await fetch(url, options) : await fetch(url);
        if (!response.ok) {
            const errorText = await response.json();
            throw `${errorText.message}`;
        }
        const buffer = await response.buffer();
        return buffer;
    } catch (ex) {
        throw new Error(`getBufferError: ${ex}`);
    }
}
