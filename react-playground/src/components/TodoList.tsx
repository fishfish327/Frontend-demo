import { useState } from 'react';
import TodoItems from './TodoItems';
import { Item } from './TodoItems';
import "./TodoList.css";

const TodoList = () => {
    const [todoItems, setTodoItems] = useState<Item[]>([]);
    const onSubmit = (event: any) => {
        event.preventDefault();
        const item = {
            key: Date.now(),
            text: event.target[0].value, 
            isCompleted: false
        }
        setTodoItems(todoItems.concat(item as Item));
    };

    const removeItem = (itemToDelete: Item) => {
        setTodoItems(todoItems.filter(item => item.key !== itemToDelete.key));
    };

    const onStatusChange = (itemToUpdate: Item) => {
        const newItem = {
            key: Date.now(),
            text: itemToUpdate.text,
            isCompleted: !itemToUpdate.isCompleted
        };
        const newItemList = todoItems.map(item => {
            return item.key === itemToUpdate.key ? newItem : itemToUpdate;
        });
        setTodoItems(newItemList);
    }

    return (
        <div className='todoListMain'>
            <div className='todoListHeader'>
               <form onSubmit={onSubmit}>
                    <input placeholder="Todo item"></input>
                    <button type="submit">Add</button>
               </form>
            </div>
            <TodoItems todoEntries={todoItems} removalHandler={removeItem} statusChangeHandler={onStatusChange}/>
        </div>
    );
}




export default TodoList;