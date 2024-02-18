import {useQuery} from "react-query";
import axios from "axios";
debugger;
const configBaseUrl = "https://d1ja8b6ce1s4ul.cloudfront.net";
const configPath = "/config.json";
export const useConfig = () => {
    return useQuery("config", async () => axios.get(configBaseUrl + configPath));
}