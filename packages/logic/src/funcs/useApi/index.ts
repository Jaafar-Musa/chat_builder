import { AxiosRequestConfig } from "axios"
import axios from "axios"

type Method = "get" | "post" | "put" | "patch" | "delete"

const useApi = async (config:AxiosRequestConfig) => {

    let res = await axios(config)
    
}