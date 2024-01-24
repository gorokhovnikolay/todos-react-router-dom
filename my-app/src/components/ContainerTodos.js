import React from 'react';
import styles from '../app.module.css';
import { Link } from 'react-router-dom';

export const ContainerTodos = ({ isLoading, todos }) => {
	return (
		<div className={styles.container_todos}>
			{isLoading ? (
				todos.map(({ id, title, completed }) => {
					let titleNew;
					if (title.length > 80) {
						titleNew = title.substring(0, 79) + '...';
					} else {
						titleNew = title;
					}
					return (
						<div className={styles.container_todo} key={id}>
							<Link to={`/task/${id}`}>
								<div
									className={
										completed
											? styles.todo_title__checked
											: styles.todo_title
									}
								>
									{titleNew}
								</div>
							</Link>
						</div>
					);
				})
			) : (
				<div className={styles.isLoading}></div>
			)}
		</div>
	);
};
