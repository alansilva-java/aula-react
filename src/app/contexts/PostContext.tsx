import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { title } from "process";
import { postReducer } from "@/reducers/postReducer";

const STORAGE_KEY= 'postContextContent'

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void
    removePost:(id:number) => void;
}


export const PostContext =createContext <PostContextType | null>(null)

export const PostProvider =  ({children}: {children:ReactNode}) => {
    const[posts, dispatch] = useReducer (
        postReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        );

    const addPost = (title:string , body: string) => {
        dispatch ({type: 'add',payload: {title, body}
        });
   
    }

    const removePost = (id:number) => {
        dispatch({type: 'remove' , payload: {id}})
    }
     
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY,  JSON.stringify(posts))
    }, [posts])

    return(
        <PostContext.Provider value={{ posts, addPost, removePost }}>{children}</PostContext.Provider>
    );
}

export const usePosts = () => {
    return useContext(PostContext);
}