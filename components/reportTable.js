import React from 'react'

function ReportTable(props){
    // HeadRow
    const head = props.hours.map((hour) => 
        <td className="inline-block px-2 font-bold">{hour}</td>
    );
    // BodyRow
    let temp = [];
    if (props.reports.length > 0){
        let totals = [];
        let total = 0;
        for (let i = 0; i < 14; i++){
            total = 0;
            for (let j = 0; j < props.reports.length; j++){
                total += props.reports[j].hourlySales[i];
            }
            totals.push(total);
        }
        for (let i = 0; i <= props.reports.length; i++){
            if (i < props.reports.length){
                temp.push(props.reports[i])
            } else {
                temp.push({
                    "location": "Totals",
                    "hourlySales": totals,
                })
            }
        }
    }
    const newReports = temp.map(report => 
        <tr>
            <th className="bg-green-300 border border-black">{ report.location }</th>
            {/* <TableData reports={ props.reports } hourlySales={ report.hourlySales } /> */}
            { tableData({"reports": props.reports, "hourlySales": report.hourlySales}) }
        </tr>
    )
    // Render
    if (props.reports.length < 1) {
        return (
            <h2 className="m-10 text-2xl">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <section className="justify-self-center bg-green-500 m-10 rounded">
                <table className="">
                    <thead>
                        {/* <HeadRow hours={ props.hours } /> */}
                        <tr>
                            <th className="px-2">Location</th>
                            { head }
                        </tr>
                    </thead>
                    <tbody>
                        {/* <BodyRow reports={ props.reports } /> */}
                        { newReports }
                    </tbody>
                </table>
            </section>
      )
    };
}

// function HeadRow(props){
//     const head = props.hours.map((hour) => 
//       <td className="inline-block px-2 font-bold">{hour}</td>
//     );
//     return (
//       <tr>
//         <th className="px-2">Location</th>
//         { head }
//       </tr>
//     )
// }
  
// function BodyRow(props){
//     let temp = [];
//     if (props.reports.length > 0){
//       let totals = [];
//       let total = 0;
//       for (let i = 0; i < 14; i++){
//         total = 0;
//         for (let j = 0; j < props.reports.length; j++){
//           total += props.reports[j].hourlySales[i];
//         }
//         totals.push(total);
//       }
//       for (let i = 0; i <= props.reports.length; i++){
//         if (i < props.reports.length){
//           temp.push(props.reports[i])
//         } else {
//           temp.push({
//             "location": "Totals",
//             "hourlySales": totals,
//           })
//         }
//       }
//     }
//     const reports = temp.map(report => 
//       <tr>
//         <th className="bg-green-300 border border-black">{ report.location }</th>
//         {/* <TableData reports={ props.reports } hourlySales={ report.hourlySales } /> */}
//         { tableData({"reports": props.reports, "hourlySales": report.hourlySales}) }
//       </tr>
//     )
//     return (
//       reports
//     )
// }
  
function tableData(props){
    let storeTotal = 0;
    let temp = [];
    for (let i = 0; i <= props.hourlySales.length; i++){
        if (props.hourlySales[i] !== undefined){
            storeTotal += props.hourlySales[i];
        };
        if (i < props.hourlySales.length){
            temp.push(props.hourlySales[i]);
        } else {
            temp.push(storeTotal);
        };
    };
    const sales = temp.map(sale => {
        return (<td className="inline-block px-4 bg-green-300 border border-black">{ sale }</td>)
    });
    return (
        sales
    )
}

export default ReportTable;