export const convertToNum = (value) => {
    if (/^\d+$/.test(value)) {
        return parseFloat(value)
    } else return value
}

export const compare = (a, b, key, sortType) => {
    if (sortType === 'desc') {
        if (convertToNum(a[key]) < convertToNum(b[key])) return 1;
        if (convertToNum(b[key]) < convertToNum(a[key])) return -1;
        return 0;
    } else if (sortType === 'asc') {
        if (convertToNum(a[key]) > convertToNum(b[key])) return 1;
        if (convertToNum(b[key]) > convertToNum(a[key])) return -1;
        return 0;
    }
}

export const dateMask = (date) => {
    if (date) {
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        let handledDay = day.toString().length < 2 ? `0${day}` : day;
        let handledMonth = month.toString().length < 2 ? `0${month + 1}` : month + 1;

        return `${handledDay}.${handledMonth}.${year}`;
    } else {
        return '';
    }
}

export const phoneMask = (phone, code = '+7') => {
    if (phone) {
        return `${code} (${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,8)}-${phone.slice(8,10)}`;
    } else {
        return '';
    }
}

export const iinMask = (value) => {
    if (value) {
        return `${value.slice(0,3)} ${value.slice(3,6)} ${value.slice(6,9)} ${value.slice(9,12)}`;
    } else {
        return '';
    }
}

export const creditMask = (value) => {
    if (value) {
        return `${value.slice(0,4)}-${value.slice(4,8)}-${value.slice(8,12)}`;
    } else {
        return '';
    }
}

export const creditIssueMask = (value) => {
    if (value) {
        return `${value.slice(0,2)} / ${value.slice(2,4)}`;
    } else {
        return '';
    }
}

export const phoneMaskFormatter = (value, code = '+7') => {
    if (value) {
        if (value.length <= 3) {
            return `${code} (${value})`;
        } else if (value.length > 3 && value.length <= 6) {
            return `${code} (${value.slice(0,3)}) ${value.slice(3,value.length)}`;
        } else if (value.length > 6 && value.length <= 8) {
            return `${code} (${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6, value.length)}`;
        } else {
            return `${code} (${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6, 8)}-${value.slice(8,10)}`;
        }
    } else return '';
}

export const iinMaskFormatter = (value) => {
    if (value) {
        if (value.length <= 3) {
            return `${value}`;
        } else if (value.length > 3 && value.length <= 6) {
            return `${value.slice(0,3)}-${value.slice(3,value.length)}`;
        } else if (value.length > 6 && value.length <= 9) {
            return `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6,value.length)}`;
        } else {
            return `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6,9)}-${value.slice(9,12)}`;
        }
    } else return '';
}

export const cardMaskFormatter = (value) => {
    if (value) {
        if (value.length <= 4) {
            return `${value}`;
        } else if (value.length > 4 && value.length <= 8) {
            return `${value.slice(0,4)}-${value.slice(4,value.length)}`;
        } else if (value.length > 8 && value.length <= 12) {
            return `${value.slice(0,4)}-${value.slice(4,8)}-${value.slice(8,value.length)}`;
        } else {
            return `${value.slice(0,4)}-${value.slice(4,8)}-${value.slice(8,12)}-${value.slice(12,16)}`;
        }
    } else return '';
}

export const cardIssueMaskFormatter = (value) => {
    if (value) {
        if (value.length <= 2) {
            return `${value}`;
        } else {
            return `${value.slice(0,2)} / ${value.slice(2,4)}`;
        }
    } else return '';
}

export const dateMaskFormatter = (value, delimiter = '.') => {
    if (value) {
        if (value.length <= 2) {
            return `${value}`;
        } else if (value.length > 2 && value.length <= 4) {
            return `${value.slice(0,2)}${delimiter}${value.slice(2,value.length)}`;
        } else {
            return `${value.slice(0,2)}${delimiter}${value.slice(2,4)}${delimiter}${value.slice(4,8)}`;
        }
    } else return '';
}

export const timeMaskFormatter = (value, delimiter = ':', withSeconds) => {
    if (value) {
        if (withSeconds) {
            if (value.length <= 2) {
                return `${value}`;
            } else if (value.length > 2 && value.length <= 4) {
                return `${value.slice(0,2)}${delimiter}${value.slice(2,value.length)}`;
            } else {
                return `${value.slice(0,2)}${delimiter}${value.slice(2,4)}${delimiter}${value.slice(4,6)}`;
            }
        } else {
            if (value.length <= 2) {
                return `${value}`;
            } else {
                return `${value.slice(0,2)}${delimiter}${value.slice(2,4)}`;
            }
        }
        
    } else return '';
}

export const isTwoDatesEqual = (date1, date2) => {
    let day1 = new Date(date1).getDate();
    let month1 = new Date(date1).getMonth();
    let year1 = new Date(date1).getFullYear();
    let day2 = new Date(date2).getDate();
    let month2 = new Date(date2).getMonth();
    let year2 = new Date(date2).getFullYear();
    return day1 === day2 && month1 === month2 && year1 === year2;
}

export const toFinancial = (number) => {
    if (number) {
        let stringified = Math.abs(number).toString();
        let result = '';
        if (stringified.length < 4) return number;
        else if (stringified.length > 3 && stringified.length < 7) result = `${stringified.slice(0,3)} ${stringified.slice(3,6)}`;
        else if (stringified.length > 6 && stringified.length < 10) result = `${stringified.slice(0,3)} ${stringified.slice(3,6)} ${stringified.slice(6,9)}`;
        else if (stringified.length > 9 && stringified.length < 12) result = `${stringified.slice(0,3)} ${stringified.slice(3,6)} ${stringified.slice(6,9)} ${stringified.slice(9,12)}`;
        else if (stringified.length > 12 && stringified.length < 15) result = `${stringified.slice(0,3)} ${stringified.slice(3,6)} ${stringified.slice(6,9)} ${stringified.slice(9,12)} ${stringified.slice(12,15)}`;
        return number < 0 ? `- ${result}` : result;
    } else return '';
}