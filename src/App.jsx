import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo ,update } from './config/redux/reducers/todoSlice'



const App = () => {
  <h1>Todo App</h1>

const todoRef=useRef()

// data send on redux
const dispatch = useDispatch()

// data recieve on redux
const selector=useSelector(state => state.todos)

const addTodoReducer = (event) => {
  event.preventDefault();

// console.log(todoref.current.value);
dispatch (addTodo({
  title :todoRef.current.value
}))
console.log('data from redux====>',selector);

todoRef.current.value =''
}

const deleteTodo = (index)=>{
dispatch(removeTodo({
  index: index
}))
todoRef.current.value =''


}
const EditTodo = (index)=>{

  dispatch(editTodo({
    index : index,
    title : update
  }))
todoRef.current.value =''
  
}

  return (
  <>
  <form onSubmit={addTodoReducer} >
    <input type="text"  placeholder='todo' ref={todoRef} />
    <button type='submit'>Add Todo</button>
    </form>

    <ul>
    {selector.map((item, index) => {
        return <li key={item.id}>{item.title}
        <button onClick={()=>deleteTodo(index)}>delete</button>
        <button onClick={()=>EditTodo(index)}>edit</button>
        </li>;
        
    })}
</ul>

    </>
  )
}

export default App
