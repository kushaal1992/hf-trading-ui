import React from 'react';

function CustomButton({ label, type, buy }) {
	switch (type) {
		case 'button':
			return (
				<button
					type="button"
					className="w-fit bg-transparent	border-none outline-offset-0 m-auto py-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 .5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				>
					{label}
				</button>
			);
		case 'submit':
			if (buy)
				return (
					<button
						type="submit"
						className="w-fit bg-transparent	border-none outline-offset-0 m-auto py-0 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 .5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						{label}
					</button>
				);

			return (
				<button
					type="submit"
					className="w-fit bg-transparent	border-none outline-offset-0 m-auto py-0 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
				>
					{label}
				</button>
			);
		default:
			break;
	}
}
export default CustomButton;
