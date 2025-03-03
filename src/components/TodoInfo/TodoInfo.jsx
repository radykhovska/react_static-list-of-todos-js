import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todoItem }) => (
  <article
    className={`TodoInfo ${todoItem.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todoItem.title}</h2>

    {todoItem.user && <UserInfo user={todoItem.user} />}
  </article>
);
