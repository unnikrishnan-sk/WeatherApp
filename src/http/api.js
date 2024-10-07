import axios from 'axios'
import { APIkey } from '../constants/apikey';

export const networkApi = async (url, method = 'GET', body) => {
    try {
        const headers = { Authorization: 'Bearer ' + APIkey }
        const request = {
            url,
            method,
            headers
        }
        // console.log("request", request);

        if (method === 'POST') {
            headers['Content-Type'] = 'multipart/form-data'
            request.data = body
        } else {
            headers['Content-Type'] = 'application/json'
        }
        const response = await axios(request)
        // console.log(response);

        return response
    } catch (error) {
        console.log(error);
    }
}
