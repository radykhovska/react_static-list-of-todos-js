import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoItem => (
      <TodoInfo todoItem={todoItem} key={todoItem.id} />
    ))}
  </section>
);
