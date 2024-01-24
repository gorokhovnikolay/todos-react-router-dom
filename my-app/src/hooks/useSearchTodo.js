import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const useSearchTodo = ({ setTodos }) => {
	const [searchValue, setSerchValue] = useState('');

	const debounceValue = useDebounce(searchValue, 500);

	useEffect(() => {
		if (debounceValue) {
			fetch('http://localhost:3004/todos')
				.then((response) => response.json())
				.then((resTodos) => {
					setTodos(
						resTodos.filter(({ title }) =>
							title.toUpperCase().includes(debounceValue.toUpperCase()),
						),
					);
				});
		} else if (debounceValue === '') {
			fetch('http://localhost:3004/todos')
				.then((response) => response.json())
				.then((resTodos) => {
					setTodos(resTodos);
				});
		}
	}, [debounceValue, setTodos]);

	const searchTodo = (e) => {
		const { value } = e.target;
		setSerchValue(value);
	};

	return searchTodo;
};
