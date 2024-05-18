import React from 'react';
import './App.css';
import callPutSummationTable from './utils/formatFuturesData';

function App() {
	const rangeArr = new Array(25).fill({
		sell: 'sell',
		bid: '587.25',
		strike: '21900',
		ask: '590.8',
		buy: 'buy',
		vol: '-43.88',
	});
	const callPutSummationData = callPutSummationTable({
		range: { start: 20000, end: 22000 },
	});
	console.log('rangeArr:', rangeArr);
	return (
		<div className="">
			<div className="h-[100vh] grid grid-rows-10 gap-4">
				<div className="row-span-5">
					<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<div className="flex flex-col gap-2">
								<div className="flex flex-col gap-2">
									<label className="text-base text-blue-600/100 font-bold">
										Strike Range
									</label>
									<div>
										<label
											htmlFor="from_range"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											From
										</label>
										<input
											type="text"
											id="from_range"
											className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											placeholder="21000"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="to_range"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											To
										</label>
										<input
											type="text"
											id="to_range"
											className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											placeholder="21000"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="expiry"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											To
										</label>
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
										<label>Futures</label>
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
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								CALLS
							</label>
							<table className="h-full max-w-fit  divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Sell
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Bid
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Strike
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Ask
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Buy
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Vol
										</th>
									</tr>
								</thead>
								<tbody>
									{rangeArr.map((range, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{range.sell}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.bid}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.strike}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.ask}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.buy}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.vol}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							{/* <div className="flex flex-col gap-2"> */}
							{/* <div className="flex flex-col gap-2"> */}
							<div className="flex flex-col justify-center items-center gap-12">
								<label className="text-base text-blue-600/100 font-bold">
									Actions
								</label>
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
							{/* </div> */}
							{/* </div> */}
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								PUTS
							</label>
							<table className="h-full max-w-fit divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Sell
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Bid
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Strike
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Ask
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Buy
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Vol
										</th>
									</tr>
								</thead>
								<tbody>
									{rangeArr.map((range, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{range.sell}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.bid}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.strike}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.ask}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.buy}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.vol}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="col-span-4 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								Analysis
							</label>
							<table className="h-full max-w-fit divide-y divide-gray-200">
								<thead>
									<tr>
										{callPutSummationData.tableHeaders.map((header) => (
											<th
												scope="col"
												className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
											>
												{header}
											</th>
										))}{' '}
									</tr>
								</thead>
								<tbody>
									{callPutSummationData.tableBody.map((body, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{body.call}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum1}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum2}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum3}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum4}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum5}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum6}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum7}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum8}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum9}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum10}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="row-span-5">
					<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<div className="flex flex-col gap-2">
								<div className="flex flex-col gap-2">
									<label className="text-base text-blue-600/100 font-bold">
										Strike Range
									</label>
									<div>
										<label
											htmlFor="from_range"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											From
										</label>
										<input
											type="text"
											id="from_range"
											className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											placeholder="21000"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="to_range"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											To
										</label>
										<input
											type="text"
											id="to_range"
											className="bg-gray-50 h-4 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
											placeholder="21000"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="expiry"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											To
										</label>
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
										<label>Futures</label>
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
											className="py-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
												className="w-full py-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
												className="w-full py-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
											>
												Cancel FUT/OPT Order
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								CALLS
							</label>
							<table className="h-full max-w-fit  divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Sell
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Bid
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Strike
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Ask
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Buy
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Vol
										</th>
									</tr>
								</thead>
								<tbody>
									{rangeArr.map((range, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{range.sell}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.bid}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.strike}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.ask}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.buy}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.vol}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<div className="flex flex-col justify-center items-center gap-12">
								<label className="text-base text-blue-600/100 font-bold">
									Actions
								</label>
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
											className="py-0 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
											className="py-0 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
											className="py-0 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 .5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								PUTS
							</label>
							<table className="h-full max-w-fit divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Sell
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Bid
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
										>
											Strike
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Ask
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Buy
										</th>
										<th
											scope="col"
											className="max-w-fit px-2 py-1 text-end text-sm font-medium text-gray-500 uppercase"
										>
											Vol
										</th>
									</tr>
								</thead>
								<tbody>
									{rangeArr.map((range, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{range.sell}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.bid}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.strike}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.ask}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.buy}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{range.vol}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="col-span-4 shadow-md shadow-slate-300	overflow-y-auto">
							<label className="text-base text-blue-600/100 font-bold">
								Analysis
							</label>
							<table className="h-full max-w-fit divide-y divide-gray-200">
								<thead>
									<tr>
										{callPutSummationData.tableHeaders.map((header) => (
											<th
												scope="col"
												className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
											>
												{header}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{callPutSummationData.tableBody.map((body, i) => (
										<tr key={i} className="odd:bg-white even:bg-gray-100">
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
												{body.call}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum1}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum2}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum3}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum4}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum5}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum6}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum7}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum8}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum9}
											</td>
											<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
												{body.putCallSum10}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		// <div className="container m-auto">
		//   <div className="flex flex-col gap-4">
		//     <div className="h-[50vh] flex gap-3 border border-inherit">
		//       <div className="overflow-y-auto">
		//         <table className="h-full max-w-fit  divide-y divide-gray-200">
		//           <thead>
		//             <tr>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Sell
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Bid
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Strike
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Ask
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Buy
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Vol
		//               </th>
		//             </tr>
		//           </thead>
		//           <tbody>
		//             {rangeArr.map((range, i) => {
		//               return (
		//                 <tr key={i} className="odd:bg-white even:bg-gray-100">
		//                   <>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
		//                       {range.sell}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.bid}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.strike}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.ask}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.buy}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.vol}
		//                     </td>
		//                   </>
		//                 </tr>
		//               );
		//             })}
		//           </tbody>
		//         </table>
		//       </div>
		//       <div className="overflow-y-auto">
		//         <table className="h-full max-w-fit divide-y divide-gray-200">
		//           <thead>
		//             <tr>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Sell
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Bid
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Strike
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Ask
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Buy
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Vol
		//               </th>
		//             </tr>
		//           </thead>
		//           <tbody>
		//             {rangeArr.map((range, i) => {
		//               return (
		//                 <tr key={i} className="odd:bg-white even:bg-gray-100">
		//                   <>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
		//                       {range.sell}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.bid}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.strike}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.ask}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.buy}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.vol}
		//                     </td>
		//                   </>
		//                 </tr>
		//               );
		//             })}
		//           </tbody>
		//         </table>
		//       </div>
		//       <div className="overflow-y-auto">
		//         <table className="h-full max-w-fit divide-y divide-gray-200">
		//           <thead>
		//             <tr>
		//               {callPutSummationData.tableHeaders.map((header) => {
		//                 return (
		//                   <th
		//                     scope="col"
		//                     className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//                   >
		//                     {header}
		//                   </th>
		//                 );
		//               })}
		//             </tr>
		//           </thead>
		//           <tbody>
		//             {callPutSummationData.tableBody.map((body, i) => {
		//               return (
		//                 <tr key={i} className="odd:bg-white even:bg-gray-100">
		//                   <>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
		//                       {body.call}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum1}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum2}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum3}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum4}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum5}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum6}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum7}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum8}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum9}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {body.putCallSum10}
		//                     </td>
		//                   </>
		//                 </tr>
		//               );
		//             })}
		//           </tbody>
		//         </table>
		//       </div>
		//     </div>
		//     <div className="h-[50vh] flex gap-3 border border-inherit">
		//       <div className="overflow-y-auto">
		//         <table className="h-full max-w-fit divide-y divide-gray-200">
		//           <thead>
		//             <tr>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Sell
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Bid
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Strike
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Ask
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Buy
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Vol
		//               </th>
		//             </tr>
		//           </thead>
		//           <tbody>
		//             {rangeArr.map((range, i) => {
		//               return (
		//                 <tr key={i} className="odd:bg-white even:bg-gray-100">
		//                   <>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
		//                       {range.sell}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.bid}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.strike}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.ask}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.buy}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.vol}
		//                     </td>
		//                   </>
		//                 </tr>
		//               );
		//             })}
		//           </tbody>
		//         </table>
		//       </div>
		//       <div className="overflow-y-auto">
		//         <table className="h-full max-w-fit divide-y divide-gray-200">
		//           <thead>
		//             <tr>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Sell
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Bid
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
		//               >
		//                 Strike
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Ask
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Buy
		//               </th>
		//               <th
		//                 scope="col"
		//                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
		//               >
		//                 Vol
		//               </th>
		//             </tr>
		//           </thead>
		//           <tbody>
		//             {rangeArr.map((range, i) => {
		//               return (
		//                 <tr key={i} className="odd:bg-white even:bg-gray-100">
		//                   <>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
		//                       {range.sell}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.bid}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.strike}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.ask}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.buy}
		//                     </td>
		//                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
		//                       {range.vol}
		//                     </td>
		//                   </>
		//                 </tr>
		//               );
		//             })}
		//           </tbody>
		//         </table>
		//       </div>
		//     </div>
		//   </div>
		// </div>
	);
}

export default App;
