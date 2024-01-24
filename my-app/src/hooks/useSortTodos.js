import { useEffect, useState } from 'react';
export const useSortTodos = ({ setTodos }) => {
	const [sortingTodos, setSortingTodos] = useState([]);
	const [ischecked, setIsChecked] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then((response) => response.json())
			.then((resTodos) => {
				setSortingTodos(resTodos);
			});
	}, [ischecked]);

	const sortTodos = (e) => {
		const { checked } = e.target;
		setIsChecked(checked);
		if (checked) {
			const sortTdos = [...sortingTodos].sort((a, b) => {
				if (a.title > b.title) {
					return 1;
				}
				if (a.title < b.title) {
					return -1;
				}
				return 0;
			});
			setTodos(sortTdos);
		} else {
			setTodos(sortingTodos);
		}
	};

	return sortTodos;
};
