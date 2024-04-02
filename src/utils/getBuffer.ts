import fetch, { RequestInit } from "node-fetch";

export async function getBuffer(url: string, options?: RequestInit): Promise<Buffer> {
    try {
      const response = options ? await fetch(url, options) : await fetch(url);
      const buffer = await response.buffer();
      if (response.status !== 200) throw new Error("Failed to fetch image buffer: " + response.statusText);
        return buffer;
    } catch (ex) {
      throw new Error(`getBufferError: ` + ex);
    }
}