import React from "react";
import { DataType } from "../../types";
import TableHead from "./components/TableHead/TableHead";
import TableElement from "./components/TableElement/TableElement";

import './Table.scss';

interface ITable {
    onAddClick: () => void,
    onDeleteClick: (index: number) => void,
    data: DataType[],
}

function Table({ onAddClick, onDeleteClick, data }: ITable) {
    return (
        <div className="table">
            <button type="button"
                onClick={onAddClick}>Add</button>
            <table>
                <TableHead />
                <tbody>
                    {data.map((row, index) =>
                        <TableElement key={index} index={index} data={row}
                            onDeleteClick={(index: number) => onDeleteClick(index)} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;