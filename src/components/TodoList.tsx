import { type ListOfTodos, type TodoId, type Toggle } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggle: ({ id, completed }: Toggle) => void
  onRemove: (id: TodoId) => void
}

export const TodoList: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          {...todo}
          />
        </li>
      ))}
    </ul>
  )
}
