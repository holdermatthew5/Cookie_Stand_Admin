import React from 'react'
import { hours } from '../data'
import { FcDeleteRow } from 'react-icons/fc'

export default function CookieStandTable({stands, onDelete}){

    return (
        <Table>
            <thead>
                <tr>
                    <TH>Location</TH>
                        {hours.map(slot => (
                            <TH key={slot}>{slot}</TH>
                            ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr key={stand.id}>
                            <TH>
                                <div>
                                    <p className="inline-block">{stand.location}</p>
                                    <span className="cursor-pointer inline-block" onClick={() => onDelete(stand)}><FcDeleteRow /></span>
                                </div>
                            </TH>
                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>
    );

    function Table({ children }) {
        return (
            <table>
                {children}
            </table>
        );
    }
    function TH({ children }) {
        return (
            <th>{children}</th>
        )
    }
    
    function TD({ children }) {
        return (
            <td>{children}</td>
        )
    }
}


// // HeadRow
// const head = props.hours.map((hour) => 
// <td className="inline-block px-2 font-bold">{hour}</td>
// );

// // BodyRow
// let temp = [];
// if (props.reports.length > 0){
//     let totals = [];
//     let total = 0;
//     for (let i = 0; i < 14; i++){
//         total = 0;
//         for (let j = 0; j < props.reports.length; j++){
//             total += props.reports[j].hourlySales[i];
//         }
//         totals.push(total);
//     }
//     for (let i = 0; i <= props.reports.length; i++){
//         if (i < props.reports.length){
//             temp.push(props.reports[i])
//         } else {
//             temp.push({
//                 "location": "Totals",
//                 "hourlySales": totals,
//             })
//         }
//     }
// }
// const newReports = temp.map(report => 
//     <tr>
//         <th className="bg-green-300 border border-black">{ report.location }</th>
//         {/* <TableData reports={ props.reports } hourlySales={ report.hourlySales } /> */}
//         { tableData({"reports": props.reports, "hourlySales": report.hourlySales}) }
//     </tr>
// )
    
//     function tableData(props){
//         let storeTotal = 0;
//         let temp = [];
//         for (let i = 0; i <= props.hourlySales.length; i++){
//             if (props.hourlySales[i] !== undefined){
//                 storeTotal += props.hourlySales[i];
//             };
//             if (i < props.hourlySales.length){
//                 temp.push(props.hourlySales[i]);
//             } else {
//                 temp.push(storeTotal);
//             };
//         };
//         const sales = temp.map(sale => {
//             return (<td className="inline-block px-4 bg-green-300 border border-black">{ sale }</td>)
//         });
//         return (
//             sales
//             )
//         }
        
//         // ========================
        
//         // if (props.reports.length < 1) {
//             //     return (
//                 //         <h2 className="m-10 text-2xl">No Cookie Stands Available</h2>
//                 //     )
//                 // } else {
//                     //     return (
//                         //         <section className="justify-self-center bg-green-500 m-10 rounded">
//                         //             <table className="">
//                         //                 <thead>
//                         //                     {/* <HeadRow hours={ props.hours } /> */}
//                         //                     <tr>
//                         //                         <th className="px-2">Location</th>
//                         //                         { head }
//                         //                     </tr>
//                         //                 </thead>
//                         //                 <tbody>
//                         //                     {/* <BodyRow reports={ props.reports } /> */}
//                         //                     { newReports }
//                         //                 </tbody>
//                         //             </table>
//                         //         </section>
//                         //   )
//                         // };