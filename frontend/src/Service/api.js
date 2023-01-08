import axios from 'axios'
const url = "http://localhost:5000";


export const signupData = async (data) => {
    await axios.post(`${url}/signup`, data)
        .then((response) => { // Data retrieval and processing
            console.log("Following data has been saved! " + response.data);
        })
        .catch((error) => { // If the query fails, an error will be displayed on the terminal.

            console.error(error);
        });
}

export const loginData = async (data) => {
    await axios.post(`${url}/login`, data);
}


export const productData = async (data) => {
    return await axios.post(`${url}/products`, data);
}

export const getproductData = async (id) => {
    id = id || '';
    return await axios.get(`${url}/products/${id}`);
}

export const deleteProductData = async (id) => {
    return await axios.delete(`${url}/products/${id}`);
}
export const editProduct = async (id, item) => {
    return await axios.put(`${url}/products/${id}`, item);
}