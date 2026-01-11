

import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../features/uiSlice";
import { toast } from "sonner";






const customBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include'
});







const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,
    extraOptions: object) => {
    

        api.dispatch(startLoading());
        await sleep();
        const result = await customBaseQuery(args, api, extraOptions);

        api.dispatch(stopLoading())
        if(result.error) {
           
            const {status, data} = result.error 
            
            switch (status) {
                case 400:
                    toast.error(`${data as string}`)
                    break;
                case 401:
                    if (typeof data === 'string') {
                        toast.error(data);
                    } else if (
                        data &&
                        typeof data === 'object' &&
                        'title' in data &&
                        typeof data.title === 'string'
                    ) {
                        toast.error(data.title);
                    }
                
                    break;
                case 404:
                    if (typeof data === 'string') {
                        toast.error(data);
                    } else if (
                        data &&
                        typeof data === 'object' &&
                        'title' in data &&
                        typeof data.title === 'string'
                    ) {
                        toast.error(data.title);
                    }
                    //window.location.href = "/";
                    break;  
                case 500:
                    if (typeof data === 'string') {
                        toast.error(data);
                    } else if (
                        data &&
                        typeof data === 'object' &&
                        'title' in data &&
                        typeof data.title === 'string'
                    ) {
                        toast.error(data.title);
                    }
                    break;      
            
                default:
                    break;
            }
        }

        return result;
    }