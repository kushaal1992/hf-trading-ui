import React from 'react';

function FuturesForm() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col gap-2">
				<span className="text-base text-blue-600/100 font-bold">
					Strike Range
				</span>
				<div>
					<span
						htmlFor="from_range"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						From
					</span>
					<input
						type="text"
						id="from_range"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
				</div>
				<div>
					<span
						htmlFor="to_range"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						To
					</span>
					<input
						type="text"
						id="to_range"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
				</div>
				<div>
					<span
						htmlFor="expiry"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						To
					</span>
					<input
						type="date"
						id="expiry"
						className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="21000"
						required
					/>
				</div>
				<button
					type="button"
					className="py-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				>
					Subscribe
				</button>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2">
					<span>Futures</span>
					<div>
						<input
							type="date"
							id="future_date"
							className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
							placeholder="21000"
							required
						/>
					</div>
					<button
						type="button"
						className="py-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					>
						Subscribe
					</button>
					<table className="h-full w-full divide-y divide-gray-200">
						<thead>
							<tr>
								<th
									scope="col"
									className="max-w-fit px-2 py-1 text-center text-sm font-medium text-gray-500 uppercase"
								>
									BID
								</th>
								<th
									scope="col"
									className="max-w-fit px-2 py-1 text-center text-sm font-medium text-gray-500 uppercase"
								>
									ASK
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="odd:bg-white even:bg-gray-100">
								<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
									22900
								</td>
								<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
									24999
								</td>
							</tr>
						</tbody>
					</table>
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
							className="py-0 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>
							Buy Futures
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
							className="w-full py-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						>
							Sell Futures
						</button>
					</div>
					<div>
						<input
							type="text"
							className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
							placeholder="21000"
							required
						/>

						<button
							type="button"
							className="w-full py-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						>
							Cancel FUT/OPT Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FuturesForm;
