import { REDDIT_PICS_API, REDDIT_TOP_PICS_API } from "../utils/constants";

export async function getHotPostApi() {
    try {
        const response = await fetch(REDDIT_PICS_API);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getTopPostApi() {
    try {
        const response = await fetch(REDDIT_TOP_PICS_API);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}