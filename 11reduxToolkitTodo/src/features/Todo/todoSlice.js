import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:1, text: "React with chai"}]


}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action )=>{
            state.todos = state.todos.filter((prev)=>prev.id!=action.payload)

        },
        updateTodo:(state, action)=>{
            state.todos = state.todos.map((prev)=>(prev.id===action.payload.id)? prev.text=action.payload.text:prev.text)

        }

    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer