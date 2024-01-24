import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from '../app.module.css';

export const PageTasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then((response) => response.json())
			.then((data) => setTasks(data));
	}, []);

	return (
		<>
			{tasks.map(({ id, title }) => {
				let titleNew;
				if (title.length > 160) {
					titleNew = title.substring(0, 159) + '...';
				} else {
					titleNew = title;
				}
				return (
					<div key={id} className={styles.container_todos}>
						<Link to={`/tasks/${id}`} key={id}>
							{titleNew}
						</Link>
					</div>
				);
			})}
			<Outlet />
		</>
	);
};
