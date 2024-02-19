import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

export interface UseApiOptions {
    baseUrl: string;
}

export const useApi = ({baseUrl}: UseApiOptions) => {
    axios.defaults.baseURL = baseUrl;

   const useListRecommended = () => {
        return useQuery("recommended", async () => axios.get("/listRestaurants/Hummus"));
    }

    return {
        useListRecommended
    }
}