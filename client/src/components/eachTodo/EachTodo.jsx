import {PropTypes} from "prop-types"
import { completeTodo, editTodo, removeTodo } from "../../slices/todoSlice";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";



const EachTodo=({eachTodo})=>{
    const [todoTitle,setTodoTitle]=useState(eachTodo.title);
    const [isCompleteTodo,setIsCompleteTodo]=useState(eachTodo.isCompleted);
    const [editActive,setEditActive]=useState(false);
    
    const dispatch=useDispatch();
    const editElement=useRef();
    
    return(
        <div className="flex">
            {
                editActive?<input 
                      ref={editElement} 
                      value={todoTitle} 
                      onChange={(e)=>{setTodoTitle(e.target.value)}} 
                      onKeyDown={(e)=>{
                        if(e.code==="Enter"){
                            dispatch(editTodo({id:eachTodo.id,newTitle: todoTitle}))
                            setEditActive(false);
                        }
                      }}
                      className="bg-black"
                />:
                <input ref={editElement} disabled value={todoTitle} onChange={(e)=>{setTodoTitle(e.target.value)}} />
            }
            <input type="checkbox" checked={isCompleteTodo} onChange={()=>{
                const newComplete=!isCompleteTodo;
                setIsCompleteTodo(newComplete);
                dispatch(completeTodo({id:eachTodo.id,isCompleted:newComplete}));
            }}/>
            <button onClick={()=>{dispatch(removeTodo({id:eachTodo.id}))}}>delete</button>
            <button onClick={()=>{
                if(editActive) dispatch(editTodo({id:eachTodo.id,newTitle:todoTitle})) 
                setEditActive(!editActive)
            }}>Edit</button>
        </div>
    )
}
EachTodo.propTypes = {
    eachTodo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }).isRequired
};

export default EachTodo;