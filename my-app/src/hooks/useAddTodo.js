import { useForm } from 'react-hook-form';

export const useAddTodo = ({ refresh, setRefresh }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const changeForm = (data) => {
		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...data, completed: false }),
		}).finally(setRefresh(!refresh));
		reset();
	};

	return { register, handleSubmit, errors, changeForm };
};
