import fetch, { RequestInit } from "node-fetch";

interface bufferResponse {
    success: boolean;
    status: number;
    buffer: Buffer
}

export default async (url: string, options?: RequestInit): Promise<bufferResponse> => {
    try {
      const response = options ? await fetch(url, options) : await fetch(url);
      const buffer = await response.buffer();
      if (response.status !== 200) throw new Error("Failed to fetch image buffer: " + response.statusText);
      return {
        success: response.status === 200 ? true : false,
        status: response.status,
        buffer,
      };
    } catch (ex) {
      throw new Error(`getBufferError: ` + ex);
    }
}