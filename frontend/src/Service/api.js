import axios from 'axios';

const url = "http://localhost:5000";

export const signupData = async (data) => {
    return await axios.post(`${url}/signup`, data)
        .then((response) => { // Data retrieval and processing
            console.log(response.data);
        })
        .catch((error) => { // If the query fails, an error will be displayed on the terminal.
            console.error(error);
        });
}

export const loginData = async (data) => {
    return await axios.post(`${url}/login`, data);
}


export const productData = async (data) => {
    return await axios.post(`${url}/products`, data)
        .then((response) => { // Data retrieval and processing
            console.log(response.data);
        })
        .catch((error) => { // If the query fails, an error will be displayed on the terminal.
            console.error(error);
        });
}

export const getproductData = async () => {
    return await axios.get(`${url}/products`)
        .then((response) => { // Data retrieval and processing
            console.log(response.data);
        })
        .catch((error) => { // If the query fails, an error will be displayed on the terminal.
            console.error(error);
        });
}