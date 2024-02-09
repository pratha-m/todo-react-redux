import { createSlice } from "@reduxjs/toolkit"
import { getLocalTodos,setLocalTodos } from "../features/features";

const initialState={
    todoList:getLocalTodos()
}

export const todosSlice=createSlice({
    name:"toDo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodoList={id:state.todoList.length+1,title:action.payload.newTitle,isCompleted:false}
            state.todoList.push(newTodoList);
            setLocalTodos(state.todoList);  
        },
        removeTodo:(state,action)=>{
            let {todoList}=state;
            state.todoList=todoList.filter((eachTodo)=>eachTodo.id!==action.payload.id);
            setLocalTodos(state.todoList);  
        },
        editTodo:(state,action)=>{
            let {todoList}=state;
            const {id,newTitle}=action.payload;
            state.todoList=todoList.map((eachTodo)=>{
                if(eachTodo.id===id) eachTodo.title=newTitle
                return eachTodo;
            })
            setLocalTodos(state.todoList);  
        },
        completeTodo:(state,action)=>{
            let {todoList}=state;
            const {id,isCompleted}=action.payload;
            state.todoList=todoList.map((eachTodo)=>{
                if(eachTodo.id===id) eachTodo.isCompleted=isCompleted;
                return eachTodo;
            })
            setLocalTodos(state.todoList);  
        }
    }
})

export const {addTodo,removeTodo,editTodo,completeTodo}=todosSlice.actions;

export default todosSlice.reducer;