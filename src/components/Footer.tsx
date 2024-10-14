import { type TodoFilter } from '../types';
import { Filters } from './Filters'

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: TodoFilter;
  onClearCompleted: () => void;
  handleFilterChange: (filter: TodoFilter) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
    </footer>
  )
}
