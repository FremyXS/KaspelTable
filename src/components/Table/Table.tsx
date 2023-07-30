import React, { ChangeEvent, useEffect, useState } from "react";
import { DataType } from "../../types";
import { Table as TableAntd, Space, Button, Input, Radio, RadioChangeEvent } from "antd";
import { filterBySearchParam, sortedByDate } from "../../commons/sortings";
import { SearchParamsEnum } from "./types";

import './Table.scss';

interface ITable {
    onAddClick: () => void,
    onDeleteClick: (index: number) => void,
    onChangeClick: (index: number, data: DataType) => void,
    data: DataType[],
}

function Table({ onAddClick, onDeleteClick, onChangeClick, data }: ITable) {
    const [searchParam, setSearchParam] = useState<number>(SearchParamsEnum.All);
    const [searchData, setSearchData] = useState<string>("");
    const [dataSource, setDataSource] = useState<DataType[]>(data);

    useEffect(() => {
        setDataSource(data);
    }, [data]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a: any, b: any) => a.name.localeCompare(b.name),
                multiple: 3,
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
                multiple: 1,
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

    const onClickSearch = () => {
        if (searchData == null || searchData.length === 0) {
            setDataSource(data);
        }
        else {
            setDataSource(filterBySearchParam(data, searchParam, searchData))
        }
    }

    const getTitle = () => {
        return (
            <div className="table-title">
                <Space.Compact>
                    <Input.Search placeholder="searching..."
                        onSearch={onClickSearch}
                        enterButton
                        value={searchData}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchData(event.target.value)} />
                    <Radio.Group value={searchParam}
                        onChange={(e: RadioChangeEvent) => setSearchParam(e.target.value)}>
                        <Radio value={SearchParamsEnum.All}>All</Radio>
                        <Radio value={SearchParamsEnum.Name}>Name</Radio>
                        <Radio value={SearchParamsEnum.Date}>Date</Radio>
                        <Radio value={SearchParamsEnum.Num}>Num</Radio>
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
                dataSource={dataSource}
                columns={columns}
                title={() => getTitle()} />
        </div>
    )
}

export default Table;