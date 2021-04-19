import axios from 'axios';

export const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export const apiUrl = 'https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/';

export async function getToken(values) {
    const url = "https://cookie-stand-api.herokuapp.com/api/token/";

    const response = await axios.post(url, values);

    const refreshUrl = "https://cookie-stand-api.herokuapp.com/api/token/refresh";

    const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

    return refreshResponse.data.access;
}