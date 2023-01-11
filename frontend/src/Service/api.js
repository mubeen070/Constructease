import axios from 'axios'
const url = "http://localhost:5000";

//Signup
export const signupData = async (data) => {
    return await axios.post(`${url}/signup`, data)
}
export const getSignupData = async (id) => {
    id = id || '';
    return await axios.get(`${url}/signup${id}`)
}

    //Login
    export const loginData = async (data) => {
        await axios.post(`${url}/login`, data);
    }


    //Products
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