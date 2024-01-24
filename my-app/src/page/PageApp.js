import { useState } from 'react';
import styles from '../app.module.css';
import {
	useCheckedTodo,
	useDeletingTodo,
	useGetTodos,
	useSearchTodo,
	useSortTodos,
} from '../hooks';
import { AddNewTodo, SearchTodo, ContainerTodos, SortTodos } from '../components';

export const PageApp = () => {
	const [refresh, setRefresh] = useState(false);
	const { todos, setTodos, isLoading } = useGetTodos({ refresh });
	const changeChecked = useCheckedTodo({ setRefresh, refresh });
	const changeDeleted = useDeletingTodo({ setRefresh, refresh });
	const searchTodo = useSearchTodo({ todos, setTodos, refresh, setRefresh });
	const sortTodos = useSortTodos({ todos, setTodos });

	return (
		<>
			<h2>Список задач:</h2>
			<AddNewTodo refresh={refresh} setRefresh={setRefresh} />
			<SearchTodo searchTodo={searchTodo} />
			{todos.length < 1 && (
				<div className={styles.todo_search}>У вас еще нет задач</div>
			)}
			{todos.length > 0 && <SortTodos sortTodos={sortTodos} />}

			<ContainerTodos
				isLoading={isLoading}
				todos={todos}
				changeChecked={changeChecked}
				changeDeleted={changeDeleted}
			/>
		</>
	);
};
