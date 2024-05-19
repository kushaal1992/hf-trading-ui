import React, { useState } from 'react';
import {
	callPutBidTable,
	callPutSummationTable,
} from '../../utils/tableFormatData';
import FuturesForm from '../futuresForm';
import CustomTable from '../common/customTable';
import BuySellOptions from '../buySellOptions';

function ExpiryLayout() {
	const [callPutSummationData] = useState(
		callPutSummationTable({ range: { start: 20000, end: 22000 } })
	);
	const [callPutBidData] = useState(callPutBidTable());

	return (
		<div className="row-span-5">
			<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
				<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
					<FuturesForm />
				</div>
				<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
					<span className="text-base text-blue-600/100 font-bold">CALLS</span>
					<CustomTable data={callPutBidData} />
				</div>
				<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
					<BuySellOptions />
				</div>
				<div className="col-span-2 shadow-md shadow-slate-300 overflow-y-auto">
					<span className="text-base text-blue-600/100 font-bold">PUTS</span>
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
	);
}

export default ExpiryLayout;