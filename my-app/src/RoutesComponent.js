import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { PageApp } from './page/PageApp';
import { PageTask } from './page/PageTask';
import { PageNotFounde } from './page/PageNotFounde';
import { PageTasks } from './page/PageTasks';
import styles from './app.module.css';

export const RoutesComponent = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<PageApp />} />
				<Route path="/task/:id" element={<PageTask />} />
				<Route path="/tasks" element={<PageTasks />}>
					<Route path=":id" element={<PageTask />} />
				</Route>
				<Route path="/404" element={<PageNotFounde />} />
				<Route path="*" element={<Navigate to="/404" replace={true} />} />
			</Routes>
		</div>
	);
};
