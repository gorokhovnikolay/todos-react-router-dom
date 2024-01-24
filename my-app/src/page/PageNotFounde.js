import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFounde = () => {
	return (
		<div>
			Такой страницы не существует, <Link to="/">Вернутся на главную</Link>
		</div>
	);
};
