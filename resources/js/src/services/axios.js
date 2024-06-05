import axios from "axios";

export default axios.create({
    baseURL:window.auth.apiUrl
})