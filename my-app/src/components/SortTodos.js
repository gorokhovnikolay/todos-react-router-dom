import React from 'react';

export const SortTodos = ({ sortTodos }) => {
	return (
		<div>
			<label>Сортировка по алфавиту:</label>
			<input type="checkbox" onChange={(e) => sortTodos(e)} />
		</div>
	);
};
