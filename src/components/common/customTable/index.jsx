import React from 'react';

function CustomTable({ data }) {
	const { headers, body } = data;
	return (
		<table className="h-full max-w-fit  divide-y divide-gray-200">
			<thead>
				<tr>
					{headers.map((header) => (
						<th
							key={header}
							scope="col"
							className="max-w-fit px-2 py-1 text-start text-sm font-medium text-gray-500 uppercase"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{body.map((content, i) => (
					<tr key={i} className="odd:bg-white even:bg-gray-100">
						{content.map(
							(item) =>
								item.key !== 'id' && (
									<td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
										{item[item.key]}
									</td>
								)
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default CustomTable;
