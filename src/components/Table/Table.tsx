import React, { ChangeEvent, useState } from "react";
import { DataType } from "../../types";
import { Table as TableAntd, Space, Button, Input, Radio, RadioChangeEvent } from "antd";

import './Table.scss';
import { sortedByDate } from "../../commons/sortings";

interface ITable {
    onAddClick: () => void,
    onDeleteClick: (index: number) => void,
    onChangeClick: (index: number, data: DataType) => void,
    data: DataType[],
}

function Table({ onAddClick, onDeleteClick, onChangeClick, data }: ITable) {
    const [searchParam, setSearchParam] = useState<number>(1);
    const [searchData, setSearchData] = useState<string>("");

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
                compare: (a: any, b: any) => sortedByDate(new Date(a.date), new Date(b.date)),
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

    const getTitle = () => {
        return (
            <div className="table-title">
                <Space.Compact>
                    <Input 
                    placeholder="Search" 
                    value={searchData}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchData(event.target.value)} />
                    <Radio.Group value={searchParam}
                        onChange={(e: RadioChangeEvent) => setSearchParam(e.target.value)}>
                        <Radio value={1}>All</Radio>
                        <Radio value={2}>Name</Radio>
                        <Radio value={3}>Date</Radio>
                        <Radio value={4}>Num</Radio>
                    </Radio.Group>
                </Space.Compact>
                <Button size="middle" onClick={onAddClick} type="dashed">
                    Add
                </Button>
            </div>
        )
    }
    return (
        <div className="table">
            <TableAntd
                bordered
                dataSource={data}
                columns={columns}
                title={() => getTitle()} />
        </div>
    )
}

export default Table;