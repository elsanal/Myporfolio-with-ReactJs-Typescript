import { CreateParams, fetchUtils } from "react-admin";
import { blobUrlConverter } from "../authDataProvider/convertBlobUrl";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const createPost = async (resource:string, apiUrl:string, params:CreateParams<any>) => {
    const url = `${apiUrl}/${resource}`;
    const file = params.data.image; // assuming rawFile contains the File object
    params.data.image =  await blobUrlConverter(file)
    console.log("Delayed...")
    
    const response = await fetchUtils.fetchJson(url, {
        method: 'POST',
        body: JSON.stringify(params.data),
    });
    // setTimeout(async() => {
    //     console.log(response);
    // }, 1500);
    
    console.log(response)
    return response
}