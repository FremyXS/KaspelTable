import React from "react";
import { DataType } from "../../../../types";

function TableElement({data}:{data: DataType}){
    return(
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
                <button type="button">Delete</button>
                <button type="button">Change</button>
            </td>
        </tr>
    )
}

export default TableElement;