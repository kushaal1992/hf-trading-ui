import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
	callPutBidTable,
	callPutSummationTable,
} from '../../utils/tableFormatData';
import CustomTable from '../common/customTable';
import BuySellOptions from '../buySellOptions';

function ExpiryLayout({ parentCallback }) {
	const [callPutSummationData] = useState(
		callPutSummationTable({ range: { start: 20000, end: 22000 } })
	);
	const [callPutBidData] = useState(callPutBidTable());
	const [viewSidebar, setViewSidebar] = useState(false);

	const toggleSidebar = () => {
		const currVal = !viewSidebar;
		// setViewSidebar((prev) => !prev);
		setViewSidebar(currVal);
		parentCallback(currVal);
	};

	return (
		<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
			{/* <div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
					<FuturesForm />
				</div> */}
			<div className="col-span-3 shadow-md shadow-slate-300 overflow-y-auto">
				<FontAwesomeIcon
					icon={viewSidebar ? faChevronLeft : faChevronRight}
					onClick={toggleSidebar}
					className="absolute left-2 top-1.5"
				/>
				<span className="text-base text-blue-600/100 font-bold">CALLS</span>
				<CustomTable data={callPutBidData} />
			</div>
			<div className="col-span-6 shadow-md shadow-slate-300 overflow-y-auto p-1">
				<div className="flex flex-col items-center justify-center">
					<div className="w-full overflow-x-hidden shadow-sm shadow-slate-300">
						<BuySellOptions />
					</div>
					<div className="w-full overflow-x-auto shadow-sm shadow-slate-300">
						<span className="text-base text-blue-600/100 font-bold">
							Analysis
						</span>
						<CustomTable data={callPutSummationData} />
					</div>
				</div>
			</div>
			<div className="col-span-3 shadow-md shadow-slate-300 overflow-y-auto">
				<span className="text-base text-blue-600/100 font-bold">PUTS</span>
				<CustomTable data={callPutBidData} />
			</div>
		</div>
	);
}

export default ExpiryLayout;
