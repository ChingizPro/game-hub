import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6902cd8822d249c99b6375306f47e04c'
    }
})