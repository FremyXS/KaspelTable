import React from "react";

function TableHead() {
    return (
        <thead>
            <tr>
                <td>
                    <span>Name</span>
                </td>
                <td>
                    <span>Date</span>
                </td>
                <td>
                    <span>Num</span>
                </td>
                <td>
                    <span style={{ display: 'none' }}>Actions</span>
                </td>
            </tr>
        </thead>
    )
}

export default TableHead;