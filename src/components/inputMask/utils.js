export const phoneMaskFormatter = (value) => {
    if (value) {
      if (value.length <= 3) {
        return `(${value})`;
      } else if (value.length > 3 && value.length <= 6) {
        return `(${value.slice(0, 3)}) ${value.slice(3, value.length)}`;
      } else if (value.length > 6 && value.length <= 8) {
        return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`;
      } else {
        return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`;
      }
    } else return '';
  };

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