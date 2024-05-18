import React from 'react';

function BuySellOptions() {
	return (
		<div className="flex flex-col justify-center items-center gap-12">
			<span className="text-base text-blue-600/100 font-bold">Actions</span>
			<div className="flex flex-row gap-1">
				<div>
					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>

					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
					<button
						type="button"
						className="py-0 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Buy PE
					</button>
				</div>
				<div>
					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>

					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
					<button
						type="button"
						className="py-0 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Buy CE
					</button>
				</div>
			</div>
			<div className="flex flex-row gap-1">
				<div>
					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>

					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
					<button
						type="button"
						className="py-0 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						Sell PE
					</button>
				</div>
				<div>
					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>

					<input
						type="text"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
					<button
						type="button"
						className="py-0 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						Sell CE
					</button>
				</div>
			</div>
		</div>
	);
}

export default BuySellOptions;
