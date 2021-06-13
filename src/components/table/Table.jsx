import React from "react";
import GridTable from '@nadavshaar/react-grid-table';

import dt from "./../../data.json"

const rows = dt.areas[0].labels.map((el, idx) => {
    return {
        id: idx,
        fase: el,
        quantidade:dt.areas[0].data[idx]
    }
})

console.log(rows)
const columns = [
    {
        id: 1, 
        field: 'fase', 
        label: 'Fase',
    }, 
    {
        id: 2, 
        field: 'quantidade', 
        label: 'Quantidade',
    },
];

const MyAwesomeTable = () => <GridTable columns={columns} rows={rows} isPaginated={false}/>;

export default MyAwesomeTable;