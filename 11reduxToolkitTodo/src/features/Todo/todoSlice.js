import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "React"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
           state.todos =  state.todos.filter((todo)=> action.payload.id!=todo.id)
        },

        updateTodo:(state, action)=>{
           state.todos =  state.todos.map((todo)=> todo.id==action.payload.id? {...todo, text:action.payload.text}: todo)
        }
    }
})