import axios from 'axios'

const url= "http://localhost:5000";

export const signupData = async(data)=> {
    return await axios.post(`${url}/signup`,data)
}
export const loginData = async(data)=> {
    return await axios.post(`${url}/login`,data)
}