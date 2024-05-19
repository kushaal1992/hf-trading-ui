import React from 'react';
import ExpiryLayout from '../expiryLayout';

function Layout() {
	return (
		<div className="h-[100vh] grid grid-cols-10 gap-1">
			<ExpiryLayout />
			<ExpiryLayout />
		</div>
	);
}

export default Layout;
