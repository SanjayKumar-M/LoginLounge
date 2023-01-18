import axios from "axios"

axios.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1'

const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;

const ApiRegister = (inputs) =>{
    let setData = {
        Name: inputs.name,
        Email: inputs.email,
        Password: inputs.password
    }
    axios.post('')
}