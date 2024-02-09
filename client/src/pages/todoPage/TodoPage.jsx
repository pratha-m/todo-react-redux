import { useDispatch, useSelector } from "react-redux";
import EachTodo from "../../components/eachTodo/EachTodo";
import { useState } from "react";
import { addTodo } from "../../slices/todoSlice";

const TodoPage=()=>{
    const [todoTitle,setTodoTitle]=useState("");
    const todoList=useSelector(state=>state.toDo.todoList);
    const dispatch=useDispatch();

    const handleCreateTodo=(e)=>{
        e.preventDefault();
        dispatch(addTodo({newTitle:todoTitle}))
        setTodoTitle("");
    }
    return(
        <>
            <h1>TodoList</h1>
            <form onSubmit={handleCreateTodo}>
                <input type="text" value={todoTitle} onChange={(e)=>{setTodoTitle(e.target.value)}}/>
                <button>Create</button>
            </form>
            <br />
            <br />
            <div className="todos">
                {todoList.map((eachTodo,index)=>(
                    <EachTodo key={index} eachTodo={eachTodo}/>
                ))}
            </div>
        </>
    )
}


export default TodoPage;