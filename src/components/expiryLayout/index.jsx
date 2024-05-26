import React, { useEffect, useState } from 'react';
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
import CustomInput from '../common/customInput';
import CustomButton from '../common/customButton';

function ExpiryLayout({ parentCallback, expiryFormNo }) {
	const [callPutSummationData] = useState(
		callPutSummationTable({ range: { start: 20000, end: 22000 } })
	);
	const [callPutBidData] = useState(callPutBidTable());
	const [viewSidebar, setViewSidebar] = useState(false);
	const [toggleIcon, setToggleIcon] = useState(faChevronLeft);

	const toggleSidebar = () => {
		const currSidebarVal = !viewSidebar;
		setViewSidebar(currSidebarVal);
		parentCallback(currSidebarVal);
	};

	useEffect(() => {
		setToggleIcon(viewSidebar ? faChevronLeft : faChevronRight);
	}, [viewSidebar]);

	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between p-1">
				<span className="text-center text-base text-blue-600/100 font-bold">
					Expiry {expiryFormNo} : Strike range
				</span>
				<CustomInput
					id="from_range"
					type="text"
					placeholder="From"
					margin="m-0"
				/>
				<CustomInput id="to_range" type="text" placeholder="To" margin="m-0" />
				<span
					htmlFor="expiry"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					To
				</span>

				<CustomInput id="expiry" type="date" margin="m-0" />

				<CustomButton label="Subscribe" type="button" margin="m-0" />
			</div>

			<div className="h-full grid grid-cols-12 gap-3 text-center border border-inherit">
				<div className="col-span-3 shadow-md shadow-slate-300 overflow-y-auto">
					{/* {toggleIcon && (
						<FontAwesomeIcon
							icon={toggleIcon}
							onClick={toggleSidebar}
							className={`absolute left-${viewSidebar ? 36 : 2} top-9`}
						/>
					)} */}
					<IconWrapper
						key={viewSidebar ? 'left' : 'right'}
						toggleIcon={toggleIcon}
						classname={`absolute left-${viewSidebar ? 36 : 2} top-9`}
						method={toggleSidebar}
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
		</div>
	);
}

function IconWrapper({ key, toggleIcon, classname, method }) {
	return (
		<FontAwesomeIcon
			id={key}
			icon={toggleIcon}
			onClick={method}
			className={classname}
		/>
	);
}

export default ExpiryLayout;
