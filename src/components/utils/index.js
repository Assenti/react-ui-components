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

/**
 * phoneMask function
 * @param {string} phone expects 10 digits length string
 * @param {string} code default: '+7'
 */
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
        return `${value.slice(0,4)} ${value.slice(4,8)} ${value.slice(8,12)} ${value.slice(12,16)}`;
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

export const isTwoDatesEqual = (date1, date2) => {
    let day1 = new Date(date1).getDate();
    let month1 = new Date(date1).getMonth();
    let year1 = new Date(date1).getFullYear();
    let day2 = new Date(date2).getDate();
    let month2 = new Date(date2).getMonth();
    let year2 = new Date(date2).getFullYear();
    return day1 === day2 && month1 === month2 && year1 === year2;
}

/**
 * Brings the number to financial format
 * @param {number} number
 */
export const toFinancial = (number) => {
    if (number !== null || number !== undefined) {
        const [integer, remain] = Math.abs(number).toString().split('.');
        let result = '';
        let integerToInt = parseInt(integer);

        if (integerToInt > 0 && integerToInt < 1000) {
            result = integer
        } else if (integerToInt >= 1000 && integerToInt < 10000) {
            result = `${integerToInt.toString().slice(0,1)} ${integerToInt.toString().slice(1, 4)}`
        } else if (integerToInt >= 10000 && integerToInt < 100000) {
            result = `${integerToInt.toString().slice(0,2)} ${integerToInt.toString().slice(2, 5)}`
        } else if (integerToInt >= 100000 && integerToInt < 1000000) {
            result = `${integerToInt.toString().slice(0,3)} ${integerToInt.toString().slice(3, 6)}`
        } else if (integerToInt >= 1000000 && integerToInt < 10000000) {
            result = `${integerToInt.toString().slice(0,1)} ${integerToInt.toString().slice(1, 4)} ${integerToInt.toString().slice(4, 7)}`
        } else if (integerToInt >= 10000000 && integerToInt < 100000000) {
            result = `${integerToInt.toString().slice(0,2)} ${integerToInt.toString().slice(2, 5)} ${integerToInt.toString().slice(5, 8)}`
        } else if (integerToInt >= 100000000 && integerToInt < 1000000000) {
            result = `${integerToInt.toString().slice(0,3)} ${integerToInt.toString().slice(3, 6)} ${integerToInt.toString().slice(6, 9)}`
        }
        return number < 0 ? `- ${result}${remain ? '.' + remain.slice(0,2) : ''}` : result + `${remain ? '.' + remain.slice(0,2) : ''}`;
    } else return '';
}

/**
 * Strinfigy Classes Object
 * @param {Object} classObject 
 */
export const strinfigyClassObject = (classObject) => {
    let result = '';
    for (const key in classObject) {
        if (classObject[key]) result += classObject[key] + ' '
    }
    return result.trim();
}