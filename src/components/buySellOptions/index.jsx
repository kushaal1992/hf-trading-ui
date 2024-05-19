import React from 'react';
import CustomInput from '../common/customInput';
import CustomButton from '../common/customButton';

function BuySellOptions() {
	return (
		<div className="flex flex-col justify-center items-center gap-12 p-1">
			<span className="text-base text-blue-600/100 font-bold">Actions</span>
			<div className="w-full flex flex-row gap-1">
				<div className="flex flex-col items-center gap-2">
					<CustomInput type="text" width="w-10/12" margin="m-0" />

					<CustomInput type="text" width="w-10/12" margin="m-0" />
					<CustomButton type="submit" label="Buy PE" buy />
				</div>
				<div className="flex flex-col items-center gap-2">
					<CustomInput type="text" width="w-10/12" margin="m-0" />

					<CustomInput type="text" width="w-10/12" margin="m-0" />
					<CustomButton type="submit" label="Buy CE" buy />
				</div>
			</div>
			<div className="w-full flex flex-row gap-1">
				<div className="flex flex-col items-center gap-2">
					<CustomInput type="text" width="w-10/12" margin="m-0" />

					<CustomInput type="text" width="w-10/12" margin="m-0" />
					<CustomButton type="submit" label="Sell PE" />
				</div>
				<div className="flex flex-col items-center gap-2">
					<CustomInput type="text" width="w-10/12" margin="m-0" />

					<CustomInput type="text" width="w-10/12" margin="m-0" />
					<CustomButton type="submit" label="Sell CE" />
				</div>
			</div>
		</div>
	);
}

export default BuySellOptions;
