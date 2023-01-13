import axios from 'axios'
const url = "http://localhost:5000";

//Signup
export const signupData = async (data) => {
    return await axios.post(`${url}/users/signup`, data)
}
export const getSignupData = async (id) => {
    id = id || '';
    return await axios.get(`${url}/users${id}`)
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/users/signup/${id}`);
}
export const editUser = async (id, item) => {
    return await axios.put(`${url}/users/${id}`, item);
}

//Login
export const loginData = async (data) => {
    await axios.post(`${url}/users/login`, data)
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

//Cart

export const postCartData = async (data) => {
    return await axios.post(`${url}/cart`, data);
}

export const getCartData = async (id) => {
    id = id || '';
    return await axios.get(`${url}/cart/${id}`);
}

export const deleteCartData = async (id) => {
    return await axios.delete(`${url}/cart/${id}`);
}