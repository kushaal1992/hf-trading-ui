import React from 'react';
import CustomButton from '../common/customButton';
import CustomInput from '../common/customInput';

function FuturesForm() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2">
					<span className="text-center text-base text-blue-600/100 font-bold">
						Futures
					</span>
					<div>
						<CustomInput id="future_date" type="date" />
					</div>
					<CustomButton label="Subscribe" type="button" />
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
					<div className="flex flex-col gap-4">
						<CustomInput type="text" placeholder="00000" />
						<CustomInput type="text" placeholder="00000" />
						<CustomButton label="Buy Futures" type="submit" buy />
					</div>
					<div className="flex flex-col gap-4">
						<CustomInput type="text" placeholder="00000" />
						<CustomInput type="text" placeholder="00000" />

						<CustomButton label="Sell Futures" type="submit" />
					</div>
					<div>
						<CustomInput type="text" placeholder="00000" />

						<CustomButton label="Cancel FUT/OPT Order" type="submit" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FuturesForm;
