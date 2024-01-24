export const useCheckedTodo = ({ setLoading, setRefresh }) => {
	const changeChecked = ({ e, id }) => {
		setLoading(true);
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ completed: e.target.checked }),
		}).finally(() => {
			setRefresh((prev) => !prev);
			setLoading(false);
		});
	};
	return changeChecked;
};
