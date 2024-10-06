export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Todo[]

export type Toggle = Pick<Todo, 'id' | 'completed'>
