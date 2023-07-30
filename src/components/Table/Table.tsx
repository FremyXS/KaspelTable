import React from "react";

import './Table.scss';

function Table({onAddClick}:{onAddClick: () => void}) {
    return(
        <div className="table">
            <button type="button"
            onClick={onAddClick}>Add</button>
            <table>
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
                            <span style={{display: 'none'}}>Actions</span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table;