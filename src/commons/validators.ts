import { DataType, ErrorMessageType } from "../types";


const checkValue = (value: string, item: string) => {
    let res: ErrorMessageType | null = null;
    
    if (value === null || value === undefined || value.length === 0) {
        res = {
            item: item,
            message: `Error. ${item} not validated.`,
            value: false
        }
    }
    else {
        res = {
            value: true
        }
    }

    return res;
}

export const dataValidator = (data: DataType) => {
    let res = checkValue(data.name, 'Name');
    if(!res.value) return res;
    res = checkValue(data.date, 'Date');
    if(!res.value) return res;
    res = checkValue(data.num.toString(), 'Num');
    if(!res.value) return res;
    return true;
}