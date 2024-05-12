import "./App.css";
import { callPutSummationTable } from "./utils/formatFuturesData";

function App() {
  const rangeArr = new Array(25).fill({
    sell: "sell",
    bid: "587.25",
    strike: "21900",
    ask: "590.8",
    buy: "buy",
    vol: "-43.88",
  });
  const callPutSummationData = callPutSummationTable({
    range: { start: 20000, end: 22000 },
  });
  console.log("rangeArr:", rangeArr);
  return (
    <div className="container m-auto">
      <div className="flex flex-col gap-4">
        <div className="h-[50vh] grid grid-cols-4 gap-3 border border-inherit">
          <div className="col-span-1 overflow-y-auto">
            <table className="h-full max-w-fit  divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Sell
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Bid
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Strike
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Ask
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Buy
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Vol
                  </th>
                </tr>
              </thead>
              <tbody>
                {rangeArr.map((range, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {range.sell}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.bid}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.strike}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.ask}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.buy}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.vol}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-1 overflow-y-auto">
            <table className="h-full max-w-fit divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Sell
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Bid
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Strike
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Ask
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Buy
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Vol
                  </th>
                </tr>
              </thead>
              <tbody>
                {rangeArr.map((range, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {range.sell}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.bid}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.strike}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.ask}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.buy}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.vol}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-2 overflow-y-auto">
            <table className="h-full max-w-fit divide-y divide-gray-200">
              <thead>
                <tr>
                  {callPutSummationData.tableHeaders.map((header) => {
                    return (
                      <th
                        scope="col"
                        className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {callPutSummationData.tableBody.map((body, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {body.call}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum1}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum2}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum3}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum4}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum5}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum6}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum7}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum8}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum9}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum10}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="h-[50vh] grid grid-cols-4 gap-3 border border-inherit">
          <div className="col-span-1 overflow-y-auto">
            <table className="h-full max-w-fit divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Sell
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Bid
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Strike
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Ask
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Buy
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Vol
                  </th>
                </tr>
              </thead>
              <tbody>
                {rangeArr.map((range, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {range.sell}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.bid}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.strike}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.ask}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.buy}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.vol}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-1 overflow-y-auto">
            <table className="h-full max-w-fit divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Sell
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Bid
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Strike
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Ask
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Buy
                  </th>
                  <th
                    scope="col"
                    className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Vol
                  </th>
                </tr>
              </thead>
              <tbody>
                {rangeArr.map((range, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {range.sell}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.bid}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.strike}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.ask}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.buy}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {range.vol}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-2 overflow-y-auto">
            <table className="h-full max-w-fit divide-y divide-gray-200">
              <thead>
                <tr>
                  {callPutSummationData.tableHeaders.map((header) => {
                    return (
                      <th
                        scope="col"
                        className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {callPutSummationData.tableBody.map((body, i) => {
                  return (
                    <tr key={i} className="odd:bg-white even:bg-gray-100">
                      <>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
                          {body.call}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum1}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum2}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum3}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum4}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum5}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum6}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum7}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum8}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum9}
                        </td>
                        <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
                          {body.putCallSum10}
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <div className="container m-auto">
    //   <div className="flex flex-col gap-4">
    //     <div className="h-[50vh] flex gap-3 border border-inherit">
    //       <div className="overflow-y-auto">
    //         <table className="h-full max-w-fit  divide-y divide-gray-200">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Sell
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Bid
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Strike
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Ask
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Buy
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Vol
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {rangeArr.map((range, i) => {
    //               return (
    //                 <tr key={i} className="odd:bg-white even:bg-gray-100">
    //                   <>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
    //                       {range.sell}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.bid}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.strike}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.ask}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.buy}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.vol}
    //                     </td>
    //                   </>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="overflow-y-auto">
    //         <table className="h-full max-w-fit divide-y divide-gray-200">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Sell
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Bid
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Strike
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Ask
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Buy
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Vol
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {rangeArr.map((range, i) => {
    //               return (
    //                 <tr key={i} className="odd:bg-white even:bg-gray-100">
    //                   <>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
    //                       {range.sell}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.bid}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.strike}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.ask}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.buy}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.vol}
    //                     </td>
    //                   </>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="overflow-y-auto">
    //         <table className="h-full max-w-fit divide-y divide-gray-200">
    //           <thead>
    //             <tr>
    //               {callPutSummationData.tableHeaders.map((header) => {
    //                 return (
    //                   <th
    //                     scope="col"
    //                     className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //                   >
    //                     {header}
    //                   </th>
    //                 );
    //               })}
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {callPutSummationData.tableBody.map((body, i) => {
    //               return (
    //                 <tr key={i} className="odd:bg-white even:bg-gray-100">
    //                   <>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
    //                       {body.call}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum1}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum2}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum3}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum4}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum5}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum6}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum7}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum8}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum9}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {body.putCallSum10}
    //                     </td>
    //                   </>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //     <div className="h-[50vh] flex gap-3 border border-inherit">
    //       <div className="overflow-y-auto">
    //         <table className="h-full max-w-fit divide-y divide-gray-200">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Sell
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Bid
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Strike
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Ask
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Buy
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Vol
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {rangeArr.map((range, i) => {
    //               return (
    //                 <tr key={i} className="odd:bg-white even:bg-gray-100">
    //                   <>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
    //                       {range.sell}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.bid}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.strike}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.ask}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.buy}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.vol}
    //                     </td>
    //                   </>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="overflow-y-auto">
    //         <table className="h-full max-w-fit divide-y divide-gray-200">
    //           <thead>
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Sell
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Bid
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-start text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Strike
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Ask
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Buy
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="max-w-fit px-2 py-1 text-end text-xs font-medium text-gray-500 uppercase"
    //               >
    //                 Vol
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {rangeArr.map((range, i) => {
    //               return (
    //                 <tr key={i} className="odd:bg-white even:bg-gray-100">
    //                   <>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800">
    //                       {range.sell}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.bid}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.strike}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.ask}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.buy}
    //                     </td>
    //                     <td className="max-w-fit px-2 py-1 whitespace-nowrap text-sm text-gray-800">
    //                       {range.vol}
    //                     </td>
    //                   </>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
