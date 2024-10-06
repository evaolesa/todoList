import {
  type Todo as TodoType,
  type TodoId,
  type Toggle,
} from '../types'
interface Props extends TodoType {
  onToggle: ({ id, completed }: Toggle) => void,
  onRemove: (id: TodoId) => void
}

export const Todo: React.FC<Props> = (
  { id, title, completed, onRemove, onToggle }
) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    onToggle({ id, completed: event.target.checked })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemove({ id })} />
    </div>
  )
}
