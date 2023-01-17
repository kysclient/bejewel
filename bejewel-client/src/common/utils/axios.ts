import axios, {AxiosRequestConfig} from "axios";
import {baseURL} from "../constants/baseURL";


export const axiosConfig: AxiosRequestConfig = {
    baseURL: baseURL
}
export const client = axios.create(axiosConfig);