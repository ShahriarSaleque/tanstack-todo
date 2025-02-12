import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createPost, deletePost, getPosts, updatePost } from "../services/api.ts";
import { PostObj } from "../types.ts";

const queryKey: string = "posts";

export const useGetPosts = () => {
    return useQuery({
        queryKey: [queryKey],
        queryFn: getPosts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPost,
        // use invalidate queries to refetch the data after creating a new post
        // onSuccess: () => {
        //     queryClient.invalidateQueries({ queryKey: [queryKey] });

        // }
        // use useQueryData to locally update and refresh the cache / hence not triggering a network call 
        // onSuccess: (newPost: PostObj) => {
        //     queryClient.setQueryData([queryKey], (oldData: any) => {
        //         return [...oldData, newPost];
        //     });
        // }
    })
}

export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updatePost,
        // use invalidate queries to refetch the data after creating a new post
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    })
}

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletePost,
        // use invalidate queries to refetch the data after creating a new post
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    })
}