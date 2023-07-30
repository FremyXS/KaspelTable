import React from "react";
import { DataType } from "../../../../types";

interface ITableElement {
    data: DataType,
    index: number,
    onDeleteClick: (index: number) => void,
    onChangeClick: (index: number, data: DataType) => void,
}

function TableElement({ data, index, onDeleteClick, onChangeClick }: ITableElement) {
    return (
        <tr className="table-element">
            <td>
                <span>{data.name}</span>
            </td>
            <td>
                <span>{data.date}</span>
            </td>
            <td>
                <span>{data.num}</span>
            </td>
            <td>
                <button type="button"
                    onClick={() => onDeleteClick(index)}>
                    Delete
                </button>
                <button type="button"
                    onClick={() => onChangeClick(index, data)}>
                    Change
                </button>
            </td>
        </tr>
    )
}

export default TableElement;