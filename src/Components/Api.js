import axios from "axios"


axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyCjwzZdgaxl0bn5hjFGkKSLjsgl8M0dKoc"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;


const ApiRegister = (Input)=>{
    let data  = {displayName:Input.name,email:Input.email,password:Input.password }
    return axios.post(REGISTER_URL,data)
}
// export const LoginApi = (Input)=>{
//     let data  = {email:Input.email,password:Input.password }
//     return axios.post(LOGIN_URL,data)
// }
// export const UserDetailsApi = ()=>{
//     let data = {idToken:getUserData()}
//     return axios.post(USER_DETAILS_URL,data)
// }
export default ApiRegister