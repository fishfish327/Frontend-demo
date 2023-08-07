import "./TodoList.css";

const TodoItem = (item: any, removalHandler: any) => {
    return <li key={item.key} onClick={() => removalHandler(item.key)}>{item.text}</li>;
}

const TodoItems = (props: any) => {
    const todoEntries = props.todoEntries;
    const todoItems = todoEntries.map((item: any) => TodoItem(item, props.removalHandler));
    return (
        <ul className="theList">
            {todoItems}
        </ul>
    );
}

export default TodoItems;