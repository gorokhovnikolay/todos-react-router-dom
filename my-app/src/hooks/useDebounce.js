import { useState, useEffect } from 'react';

export const useDebounce = (propsValue, delay) => {
	const [value, setValue] = useState();

	useEffect(() => {
		const timer = setTimeout(() => {
			setValue(propsValue);
		}, delay);
		return () => clearTimeout(timer);
	}, [propsValue, delay]);

	return value;
};
