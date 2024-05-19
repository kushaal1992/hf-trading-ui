import React from 'react';
import ExpiryLayout from '../expiryLayout';

function Layout() {
	return (
		<div className="h-[100vh] grid grid-cols-10">
			{/* <div className="h-[100vh] grid grid-rows-10 gap-4"> */}
			<ExpiryLayout />
			<ExpiryLayout />
		</div>
	);
}

export default Layout;
