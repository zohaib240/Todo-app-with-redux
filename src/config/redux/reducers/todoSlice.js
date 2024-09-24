import { createSlice, nanoid } from "@reduxjs/toolkit"



export const todoSlice=createSlice({
    name :'todos',
    initialState :{
     todos :[]
    },
    reducers:{
        addTodo : (state,action)=>{
           state.todos.push({
             title: action.payload.title,
             id: nanoid()
           })
        },
        removeTodo:(state,action)=>{
           state.todos.splice(action.payload.index,1)
        },
        editTodo: (state , action) => {
            const update = prompt(`Enter Your Updated Value`)
            state.todos.splice(action.payload.index , 1 ,{title: update , id: nanoid()} ) }  
    }  

})
export const {addTodo,removeTodo,editTodo , update} = todoSlice.actions

export default todoSlice.reducer

