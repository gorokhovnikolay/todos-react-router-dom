import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useMatch } from 'react-router-dom';
import styles from '../app.module.css';
import { useCheckedTodo } from '../hooks/useCheckedTodo';
import { useDeletingTodo } from '../hooks/useDeletingTodo';

export const PageTask = () => {
	const [refresh, setRefresh] = useState(false);
	const [loading, setLoading] = useState(false);
	const changeDeleted = useDeletingTodo({ setLoading, setRefresh });
	const changeChecked = useCheckedTodo({ setLoading, setRefresh });
	const { id } = useParams();
	const [task, setTask] = useState({});
	const navigate = useNavigate();
	const { params } = useMatch('/:type/:id');
	const { type } = params;

	useEffect(() => {
		fetch(`http://localhost:3004/todos/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					setTask(data);
				} else {
					navigate('/404');
				}
			});
	}, [id, refresh, navigate]);

	return (
		<div className={styles.container_todos}>
			{task?.title ? (
				<>
					{type === 'task' && (
						<div className={styles.btn_back}>
							<Link to="/">{'< Назад на главную'}</Link>
						</div>
					)}
					<div className={styles.task_title}>
						<span
							className={
								task.completed
									? styles.todo_title__checked
									: styles.todo_title
							}
						>
							{task.title}
						</span>
					</div>

					<div className={styles.task_btns}>
						<div className={styles.task_btns__checkbox}>
							<input
								className={styles.todo_checkbox}
								type="checkbox"
								id="checkbox"
								defaultChecked={task.completed}
								onChange={(e) => changeChecked({ e, id })}
								disabled={loading}
							/>
							<label htmlFor="checkbox">Задача решена</label>
						</div>
						<button
							disabled={loading}
							className={styles.task_btns__deleted}
							onClick={() => changeDeleted(id)}
						>
							Удалить задачу
						</button>
					</div>
				</>
			) : (
				<div className={styles.isLoading}></div>
			)}
		</div>
	);
};
