import React, { useState } from 'react';
import ExpiryLayout from '../expiryLayout';
import Sidebar from '../sidebar';

function Layout() {
	const [gridCols, setGridCols] = useState(12);
	const [expiryLayoutCols, setExpiryLayoutCols] = useState(6);
	const [viewSidebar, setViewSidebar] = useState(false);

	const handleParentCallback = (valueFromExpiryLayout) => {
		setViewSidebar(valueFromExpiryLayout);
		if (valueFromExpiryLayout) {
			setGridCols(12);
			setExpiryLayoutCols(5);
			return;
		}
		setGridCols(12);
		setExpiryLayoutCols(6);
	};

	return (
		<div className={`h-[100vh] grid grid-cols-${gridCols} gap-1`}>
			{viewSidebar && (
				<div
					className="col-span-1"
					// onMouseEnter={() => setViewSidebar(true)}
					// onMouseLeave={() => setViewSidebar(false)}
				>
					<Sidebar />
				</div>
			)}
			<div className={`col-span-${expiryLayoutCols}`}>
				<ExpiryLayout parentCallback={handleParentCallback} />
			</div>
			<div className="col-span-6">
				<ExpiryLayout parentCallback={handleParentCallback} />
			</div>
		</div>
	);
}

export default Layout;
