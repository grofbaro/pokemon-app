import axios, {AxiosRequestConfig} from 'axios';

const baseURL = '';

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    },
});


export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, {...config});

    return res.data;
};
