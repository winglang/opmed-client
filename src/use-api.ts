import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

export interface UseApiOptions {
    baseUrl: string;
}

export const useApi = ({baseUrl}: UseApiOptions) => {
    axios.defaults.baseURL = baseUrl;
    const queryClient = useQueryClient()

    const useListFavorites = () => {
        return useQuery("favorites", async () => axios.get("/listBookmarks"));
    }

    const useListRecommended = () => {
        return useQuery("recommended", async () => axios.get("/listRestaurants/Hummus"));
    }

    const useAddFavorite = () => {
        return useMutation({
            mutationFn: async (favorite: any) => {
                return await axios.post("/addRestaurant", favorite);
            },
            onMutate: async (newFavorite) => {
                const prev = queryClient.getQueryData('favorites')

                // Optimistically update to the new value
                queryClient.setQueryData('favorites', (old) => {
                    if(!old) {
                        return {data: {bookmarks: [newFavorite]}};
                    }

                    // @ts-ignore
                    const data = old?.data?.bookmarks || [];
                    // @ts-ignore
                    return {data: {bookmarks: [...data, newFavorite]}};
                });

                // Return a context object with the snapshotted value
                return { prev }
            },
            onError: (err, newTodo, context) => {
                queryClient.setQueryData(['favorites'], context?.prev);
            },
            // Always refetch after error or success:
            onSettled: () => {
                // queryClient.invalidateQueries({ queryKey: ['favorites'] })
            },
        });
    }



    return {
        useListFavorites,
        useListRecommended,
        useAddFavorite
    }
}