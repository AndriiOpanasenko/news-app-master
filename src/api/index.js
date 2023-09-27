import { newsInstance } from "../constants";

/*----------- GET ALL NEWS DATA ------------*/
export async function fetchNewsData() {
    try {
        const response = await newsInstance();

        return response.data;
    } catch (error) {
        console.error("error.message >>>", error.message);
        throw error;
    }
}
