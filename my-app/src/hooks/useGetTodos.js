import { useEffect, useState } from 'react';

export const useGetTodos = ({ refresh }) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(false);
		fetch('http://localhost:3004/todos')
			.then((response) => response.json())
			.then((resTodos) => setTodos(resTodos))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(true));
	}, [refresh]);

	return { todos, setTodos, isLoading };
};
