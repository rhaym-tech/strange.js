export default class {
    private opts;
    constructor(token: string) {
        this.opts = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
    }

}