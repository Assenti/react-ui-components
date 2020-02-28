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

export const phoneMaskFormatter = (value, code) => {
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