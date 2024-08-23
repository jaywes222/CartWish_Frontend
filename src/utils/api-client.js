import axios from "axios"
import config from "../config.json"

export default axios.create({
    baseURL: `${config.backendURL}/api`,
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
})