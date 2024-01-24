import React from 'react';
import styles from '../app.module.css';
import { useAddTodo } from '../hooks/useAddTodo';

export const AddNewTodo = ({ refresh, setRefresh }) => {
	const { register, handleSubmit, errors, changeForm } = useAddTodo({
		refresh,
		setRefresh,
	});
	return (
		<div className={styles.add_todos}>
			<form onSubmit={handleSubmit(changeForm)}>
				<div className={styles.add_todo__bock}>
					<input
						{...register('title', { required: true })}
						name="title"
						className={styles.add_todo__input}
						type="text"
						placeholder="Создайте новую задачу"
					/>
					<button className={styles.add_todo__button} type="submit">
						Добавить
					</button>
				</div>
				{errors.title && <span>Необходимо ввести хотя бы один символ</span>}
			</form>
		</div>
	);
};
