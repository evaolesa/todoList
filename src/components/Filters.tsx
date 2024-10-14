import { TODO_FILTERS, type TodoFilter } from '../types';

interface Props {
  filterSelected: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

const filters = Object.values(TODO_FILTERS);

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => (
  <ul className="filters">
    {filters.map((filter) => (
      <li key={filter}>
        <a
          href={`#/?filter=${filter}`}
          className={`${filterSelected === filter ? 'selected' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </a>
      </li>
    ))}
  </ul>
);
