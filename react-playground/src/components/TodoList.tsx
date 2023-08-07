import { useState } from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";

const TodoList = () => {
    const [todoItems, setTodoItems] = useState<any[]>([]);
    const onSubmit = (event: any) => {
        event.preventDefault();
        const item = {
            key: Date.now(),
            text: event.target[0].value
        }
        setTodoItems(todoItems.concat(item));
    };

    const removeItem = (key: any) => {
        setTodoItems(todoItems.filter(item => item.key !== key));
    };

    return (
        <div className='todoListMain'>
            <div className='todoListHeader'>
               <form onSubmit={onSubmit}>
                    <input placeholder="Todo item"></input>
                    <button type="submit">Add</button>
               </form>
            </div>
            <TodoItems todoEntries={todoItems} removalHandler={removeItem}/>
        </div>
    );
}




export default TodoList;