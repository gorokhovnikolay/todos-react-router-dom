import { useNavigate } from 'react-router-dom';

export const useDeletingTodo = ({ setRefresh, setLoading }) => {
	const navigate = useNavigate();
	const changeDeleted = (id) => {
		setLoading(true);
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		}).finally(() => {
			setRefresh((prev) => !prev);
			setLoading(false);
			navigate('/');
		});
	};

	return changeDeleted;
};
