import React from 'react';
import styles from '../app.module.css';

export const SearchTodo = ({ searchTodo }) => {
	return (
		<div className={styles.todo_search}>
			<input
				className={styles.todo_search_input}
				type="text"
				placeholder="Найти задачу"
				onChange={(e) => searchTodo(e)}
			/>
		</div>
	);
};
