import { useState } from 'react'
import { type TodoId, type Toggle } from './types'
import { TodoList } from './components/TodoList'

const mockTodos = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Learn GraphQL', completed: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Toggle): void => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    )
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <TodoList todos={todos} onToggle={handleCompleted} onRemove={handleRemove} />
    </div>
  )
}

export default App
