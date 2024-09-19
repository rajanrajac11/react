import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:[],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:()=>{}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}