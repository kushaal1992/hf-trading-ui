import React from 'react';
import FuturesForm from '../futuresForm';

function Sidebar() {
	return (
		<div className="flex flex-col gap-2 transition-all">
			<FuturesForm />
			<FuturesForm />
		</div>
	);
}

export default Sidebar;
