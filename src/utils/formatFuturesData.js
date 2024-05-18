const callPutSummationTable = (data) => {
	const { range } = data;
	const { start } = range;
	let currVal = start;
	const headers = ['index', `${currVal}Put`];
	while (currVal !== range.end) {
		currVal += 50;
		headers.push(`${currVal}Put`);
	}
	const body = new Array(25).fill().map(() => [
		{ key: 'id', id: Math.floor(Math.random() * 100) },
		{ key: 'call', call: '22150Call' },
		{ key: 'putCallSum1', putCallSum1: '371.8' },
		{ key: 'putCallSum2', putCallSum2: '371.8' },
		{ key: 'putCallSum3', putCallSum3: '371.8' },
		{ key: 'putCallSum4', putCallSum4: '371.8' },
		{ key: 'putCallSum5', putCallSum5: '371.8' },
		{ key: 'putCallSum6', putCallSum6: '371.8' },
		{ key: 'putCallSum7', putCallSum7: '371.8' },
		{ key: 'putCallSum8', putCallSum8: '371.8' },
		{ key: 'putCallSum9', putCallSum9: '371.8' },
		{ key: 'putCallSum10', putCallSum10: '371.8' },
	]);
	return { headers, body };
};

export default callPutSummationTable;
