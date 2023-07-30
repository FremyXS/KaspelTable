import { DataType } from "../types";
import { SearchParamsEnum } from '../components/Table/types';

export const sortedByDate = (a: Date, b: Date) => {
    const difference = a.getTime() - b.getTime();
    return difference / (1000 * 3600 * 24);
}

const compareName = (data: DataType, searchData: string): boolean =>
    data.name.includes(searchData);

const compareDate = (data: DataType, searchData: string): boolean =>
    data.date.includes(searchData);

const compareNum = (data: DataType, searchData: string): boolean =>
    data.num.toString().includes(searchData);

const compareAll = (data: DataType, searchData: string): boolean =>
    data.name.includes(searchData) ||
    data.date.includes(searchData) ||
    data.num.toString().includes(searchData);

const searchByParams = (data: DataType[], searchData: string, compere: (data: DataType, searchData: string) => boolean) => {
    const reData = data.map((el) => {
        if (compere(el, searchData)) {
            return el;
        }
    }).filter((el) => el);

    return reData || [];
}

export const filterBySearchParam = (data: DataType[], searchParamsEnum: SearchParamsEnum, searchData: string) : DataType[] => {
    switch (searchParamsEnum) {
        case SearchParamsEnum.All:
            return searchByParams(data, searchData, compareAll) as DataType[];
        case SearchParamsEnum.Name:
            return searchByParams(data, searchData, compareName) as DataType[];
        case SearchParamsEnum.Date:
            return searchByParams(data, searchData, compareDate) as DataType[];
        case SearchParamsEnum.Num:
            return searchByParams(data, searchData, compareNum) as DataType[];
        default:
            return [];
    }
}