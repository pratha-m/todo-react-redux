export const getLocalTodos=()=>{
    let todos=localStorage.getItem("todos_react_redux");
    return todos?JSON.parse(todos):[];
}
export const setLocalTodos=(todos)=>localStorage.setItem("todos_react_redux",JSON.stringify(todos));