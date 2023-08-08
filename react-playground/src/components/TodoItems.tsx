import "./TodoList.css";

export interface Item {
    key: number;
    text: string;
    isCompleted: boolean;
}

const TodoItem = (item: Item, removalHandler: any, statusChangeHandler: any) => {
    const onCheckBox = (e: any, statusChangeHandler: any, item: Item) => {
        e.stopPropagation();
        statusChangeHandler(item);
    }
    return (
            <li key={item.key} className={item.isCompleted ? "completed" : ""}>
                <input type="checkbox" checked={item.isCompleted} 
                    onChange={(e) => onCheckBox(e, statusChangeHandler, item)}>
                </input>
                {item.text}
                <button onClick={() => removalHandler(item)}>Delete</button>
            </li>
        );
}

const TodoItems = (props: any) => {
    const todoEntries = props.todoEntries;
    const todoItems = todoEntries.map((item: any) => TodoItem(item, props.removalHandler, props.statusChangeHandler));
    return (
        <ul className="theList">
            {todoItems}
        </ul>
    );
}

export default TodoItems;