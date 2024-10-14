export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Todo[]

export type Toggle = Pick<Todo, 'id' | 'completed'>

export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const // enum

export type TodoFilter = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]