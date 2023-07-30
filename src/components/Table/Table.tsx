import React from "react";
import { DataType } from "../../types";
import TableHead from "./components/TableHead/TableHead";
import TableElement from "./components/TableElement/TableElement";
import { Table as TableAntd, Space, Button, TableColumnsType } from "antd";

import './Table.scss';

interface ITable {
    onAddClick: () => void,
    onDeleteClick: (index: number) => void,
    onChangeClick: (index: number, data: DataType) => void,
    data: DataType[],
}



function Table({ onAddClick, onDeleteClick, onChangeClick, data }: ITable) {
    
    const sortedByData = (a: Date, b: Date) => {
        const difference = a.getTime() - b.getTime();
        return difference / (1000 * 3600 * 24);
    }
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a: any, b: any) => a.name.localeCompare(b.name),
                multiple: 1,
            },
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: {
                compare: (a: any, b: any) => sortedByData(new Date(a.date), new Date(b.date)),
                multiple: 2,
            },
        },
        {
            title: 'Num',
            dataIndex: 'num',
            key: 'num',
            sorter: {
                compare: (a: any, b: any) => a.num - b.num,
                multiple: 3,
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: DataType) => (
                <Space size="middle">
                    <Button size="middle" type="primary"
                        onClick={() => onChangeClick(Number(record.key), record)}>
                        Change
                    </Button>
                    <Button size="middle" danger
                        onClick={() => onDeleteClick(Number(record.key))}>
                        Delete
                    </Button>
                </Space>
            )
        }
    ];
    return (
        <div className="table">
            <button type="button"
                onClick={onAddClick}>Add</button>
            <TableAntd dataSource={data} columns={columns} />
        </div>
    )
}

export default Table;