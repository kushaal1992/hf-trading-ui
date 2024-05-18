import React, { useState } from 'react';
import './App.css';
import {
	callPutSummationTable,
	callPutBidTable,
} from './utils/tableFormatData';
import FuturesForm from './components/futuresForm';
import BuySellOptions from './components/buySellOptions';
import CustomTable from './components/common/customTable';

function App() {
	const [callPutSummationData] = useState(
		callPutSummationTable({ range: { start: 20000, end: 22000 } })
	);
	const [callPutBidData] = useState(callPutBidTable());

	return (
		<div className="">
			<div className="h-[100vh] grid grid-rows-10 gap-4">
				<div className="row-span-5">
					<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<FuturesForm />
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								CALLS
							</span>
							<CustomTable data={callPutBidData} />
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<BuySellOptions />
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								PUTS
							</span>
							{/* <table className="h-full max-w-fit divide-y divide-gray-200">
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
									{rangeArr.map((range) => (
										<tr
											key={Math.floor(Math.random() * 100)}
											className="odd:bg-white even:bg-gray-100"
										>
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
							</table> */}
							<CustomTable data={callPutBidData} />
						</div>
						<div className="col-span-4 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								Analysis
							</span>
							<CustomTable data={callPutSummationData} />
						</div>
					</div>
				</div>
				<div className="row-span-5">
					<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<FuturesForm />
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								CALLS
							</span>
							<CustomTable data={callPutBidData} />
							{/* <table className="h-full max-w-fit  divide-y divide-gray-200">
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
									{rangeArr.map((range) => (
										<tr
											key={Math.floor(Math.random() * 100)}
											className="odd:bg-white even:bg-gray-100"
										>
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
							</table> */}
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<BuySellOptions />
						</div>
						<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								PUTS
							</span>
							{/* <table className="h-full max-w-fit divide-y divide-gray-200">
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
									{rangeArr.map((range) => (
										<tr
											key={Math.floor(Math.random() * 100)}
											className="odd:bg-white even:bg-gray-100"
										>
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
							</table> */}
							<CustomTable data={callPutSummationData} />
						</div>
						<div className="col-span-4 shadow-md shadow-slate-300 overflow-y-auto">
							<span className="text-base text-blue-600/100 font-bold">
								Analysis
							</span>
							<CustomTable data={callPutSummationData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
