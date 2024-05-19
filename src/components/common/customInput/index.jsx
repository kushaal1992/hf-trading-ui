import React from 'react';

function CustomInput({ id, type, placeholder, width, margin }) {
	return (
		<input
			id={id}
			type={type}
			className={`${width || 'w-fit'} bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block ${margin || 'm-auto'} p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
			placeholder={placeholder}
		/>
	);
}

export default CustomInput;
