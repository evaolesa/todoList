import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemove: (id: string) => void
}

export const TodoList: React.FC<Props> = ({ todos, onRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
          key={todo.id}
          onRemove={onRemove}
          {...todo}
          />
        </li>
      ))}
    </ul>
  )
}
