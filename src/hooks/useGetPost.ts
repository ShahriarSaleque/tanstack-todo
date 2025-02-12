import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../services/api.ts";

export const useGetPosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};