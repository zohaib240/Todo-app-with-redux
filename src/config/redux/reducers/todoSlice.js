import { createSlice, nanoid } from "@reduxjs/toolkit"



export const todoSlice=createSlice({
    name :'todos',
    initialState :{
     todos :[{
        title:'hello',
        id:1 
    }]
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
            const updatedTodo = prompt(`Enter Your Updated Value`)
            state.todos.splice(action.payload.index , 1 , {content:updatedTodo, id:nanoid()})}  
    }  

})
export const {addTodo,removeTodo,editTodo,updatedTodo} = todoSlice.actions

export default todoSlice.reducer

