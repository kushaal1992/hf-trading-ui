const callPutSummationTable = (data) => {
	const { range } = data;
	const { start } = range;
	let currVal = start;
	const tableHeaders = ['index', `${currVal}Put`];
	while (currVal !== range.end) {
		currVal += 50;
		tableHeaders.push(`${currVal}Put`);
	}
	const tableBody = new Array(25).fill({
		call: '22150Call',
		putCallSum1: '371.8',
		putCallSum2: '371.8',
		putCallSum3: '371.8',
		putCallSum4: '371.8',
		putCallSum5: '371.8',
		putCallSum6: '371.8',
		putCallSum7: '371.8',
		putCallSum8: '371.8',
		putCallSum9: '371.8',
		putCallSum10: '371.8',
	});
	return { tableHeaders, tableBody };
};

// const result = callPutSummationTable({ range: { start: 20000, end: 22000 } });
// console.log("result", result);

export default callPutSummationTable;
