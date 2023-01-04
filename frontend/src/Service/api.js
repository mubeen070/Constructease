import axios from 'axios';

const url = "http://localhost:5000";

export const signupData = async (data) => {
    await axios.post(`${url}/signup`, data)
    .then(response => {
            console.log(response);
        });
}

export const loginData = async (data) => {
    return await axios.post(`${url}/login`, data)
}
