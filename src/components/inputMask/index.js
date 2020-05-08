import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputField } from '../index';
import { 
    phoneMaskFormatter, 
    cardMaskFormatter, 
    cardIssueMaskFormatter, 
    iinMaskFormatter,
    dateMaskFormatter, 
    timeMaskFormatter} from '../utils';

const resetMask = (value) => {
    return value.replace(/[\s()-]/g,'')
}

const InputMask = (props) => {
    const [preValue, setPreValue] = useState('');
    const [valueLocal, setValueLocal] = useState('');
    const [rawValueLocal, setRawValueLocal] = useState(props.value ? props.value : '');

    const handleKeyDown = (value) => {
        switch (props.mask) {
            case 'phone':
                console.log(value)
                let lastLetter = value.slice(value.length - 1, value.length)
                if (lastLetter.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + lastLetter;                    
                    setPreValue(concatenatedValue.length <= 10 ? concatenatedValue : preValue)
                    phoneMaskFormatter(concatenatedValue, props.code)
                } else {
                    console.log(value)
                }
                // else if (e.key === 'Backspace' && preValue) {
                //     setPreValue(preValue.slice(0, preValue.length - 1))
                //     phoneMaskFormatter(preValue.slice(0, preValue.length - 1))
                // }
                break;
            // case 'card':
            //     if (e.key.match(/^[0-9]+$/)) {
            //         let concatenatedValue = preValue + e.key;                    
            //         setPreValue(concatenatedValue.length <=16 ? concatenatedValue : preValue)
            //         cardMaskFormatter(concatenatedValue)
            //     } else if (e.key === 'Backspace' && preValue) {
            //         setPreValue(preValue.slice(0, preValue.length - 1))
            //         cardMaskFormatter(preValue.slice(0, preValue.length - 1))
            //     }
            //     break;
            // case 'card-issue':
            //     if (e.key.match(/^[0-9]+$/)) {
            //         let concatenatedValue = preValue + e.key;                    
            //         setPreValue(concatenatedValue.length <=4 ? concatenatedValue : preValue)
            //         cardIssueMaskFormatter(concatenatedValue)
            //     } else if (e.key === 'Backspace' && preValue) {
            //         setPreValue(preValue.slice(0, preValue.length - 1))
            //         cardIssueMaskFormatter(preValue.slice(0, preValue.length - 1))
            //     }
            //     break;
            // case 'iin':
            //     if (e.key.match(/^[0-9]+$/)) {
            //         let concatenatedValue = preValue + e.key;                    
            //         setPreValue(concatenatedValue.length <=12 ? concatenatedValue : preValue)
            //         iinMaskFormatter(concatenatedValue)
            //     } else if (e.key === 'Backspace' && preValue) {
            //         setPreValue(preValue.slice(0, preValue.length - 1))
            //         iinMaskFormatter(preValue.slice(0, preValue.length - 1))
            //     }
            //     break;
            // case 'date':
            //     if (e.key.match(/^[0-9]+$/)) {
            //         let concatenatedValue = preValue + e.key;                    
            //         setPreValue(concatenatedValue.length <=8 ? concatenatedValue : preValue)
            //         dateMaskFormatter(concatenatedValue, props.dateDelimiter)
            //     } else if (e.key === 'Backspace' && preValue) {
            //         setPreValue(preValue.slice(0, preValue.length - 1))
            //         dateMaskFormatter(preValue.slice(0, preValue.length - 1), props.dateDelimiter)
            //     }
            //     break;
            // case 'time':
            //     if (e.key.match(/^[0-9]+$/)) {
            //         let concatenatedValue = preValue + e.key;                    
            //         setPreValue(concatenatedValue.length <=8 ? concatenatedValue : preValue)
            //         timeMaskFormatter(concatenatedValue, props.dateDelimiter)
            //     } else if (e.key === 'Backspace' && preValue) {
            //         setPreValue(preValue.slice(0, preValue.length - 1))
            //         timeMaskFormatter(preValue.slice(0, preValue.length - 1), props.dateDelimiter)
            //     }
            //     break;
            default:
                break;
        }
    }

    const handleChange = (e) => {
        
        if (/[0-9]/.test(e.target.value)) {
            console.log(/[0-9]/.test(e.target.value))
            setRawValueLocal(e.target.value)
        }
        // setValueLocal(phoneMaskFormatter(rawValueLocal, props.code))
        // if (value.match(/^[0-9]+$/)) setRawValueLocal(resetMask(value))
        
    }

    const getValue = () => {
        // return rawValueLocal
        return phoneMaskFormatter(rawValueLocal)
        // return value;
        // switch (props.mask) {
        //     case 'phone':
        //         return phoneMaskFormatter(preValue, props.code);
        //     case 'card':
        //         return cardMaskFormatter(preValue);
        //     case 'card-issue':
        //         return cardIssueMaskFormatter(preValue);
        //     case 'iin':
        //         return iinMaskFormatter(preValue);
        //     case 'date':
        //         return dateMaskFormatter(preValue, props.dateDelimiter);
        //     case 'time':
        //         return timeMaskFormatter(preValue, props.timeDelimiter);
        //     default:
        //         return '';
        // }
    }

    const handleClear = () => {
        setValueLocal('')
        setRawValueLocal('')
        props.onClear()
    }

    return (
        <InputField 
            {...props}
            type="text"
            onClear={handleClear}
            dark={props.dark}
            onChange={handleChange}
            value={getValue()}
            />
    )
}
InputMask.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    dateDelimiter: PropTypes.string,
    timeDelimiter: PropTypes.string,
    mask: PropTypes.oneOf([undefined,'','phone','card','card-issue','iin','date','time']).isRequired,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    size: PropTypes.oneOf([undefined,'','medium','large']),
    borderType: PropTypes.oneOf([undefined,'','tile','rounded','smooth']),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    clearable: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    prefix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    style: PropTypes.any,
    lifted: PropTypes.bool,
    dark: PropTypes.bool,
    whiteBackground: PropTypes.bool,
    className: PropTypes.string
}
export default InputMask;