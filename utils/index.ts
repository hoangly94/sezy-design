import _ from 'lodash'

export const _Object = {
    //remove key have falsy values
    removeEmptyValue(object: { [key: string]: any }) {
        return Object.fromEntries(Object.entries(object).filter(([_, v]) => v));
    }
};

export const _Array = {
    getArrayValueByKey(array: [], keys: string[]): any {
        return keys.reduce(
            (item, key) => item[key],
            array
        )
    },
    initArrayByIndex(lenth: number, plus: number = 0, month?: string | number, year?: string | number) {
        return Array.from({ length: lenth }, (_, i) => ({ day: i + plus, month: month, year: year }));
    }
};

export function thousandSeparator(v) {
    if (!v)
        return v;
    var numParts = v?.toString().replaceAll(',', '')?.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
}