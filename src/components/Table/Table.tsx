import React from "react";
import { DataType } from "../../types";
import TableHead from "./components/TableHead/TableHead";

import './Table.scss';
import TableElement from "./components/TableElement/TableElement";

function Table({onAddClick, data}:{onAddClick: () => void, data: DataType[]}) {
    return(
        <div className="table">
            <button type="button"
            onClick={onAddClick}>Add</button>
            <table>
                <TableHead />
                <tbody>
                    {data.map((row, index)=>
                        <TableElement key={index} data={row} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;