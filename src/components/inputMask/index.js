import React, { useState } from 'react';
import { InputField } from '../index';
import { 
    phoneMaskFormatter, 
    cardMaskFormatter, 
    cardIssueMaskFormatter, 
    iinMaskFormatter,
    dateMaskFormatter } from '../utils';

const InputMask = (props) => {
    const [preValue, setPreValue] = useState('');

    const handleKeyDown = (e) => {
        switch (props.mask) {
            case 'phone':
                if (e.key.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + e.key;                    
                    setPreValue(concatenatedValue.length <=10 ? concatenatedValue : preValue)
                    phoneMaskFormatter(concatenatedValue, props.code)
                } else if (e.key === 'Backspace' && preValue) {
                    setPreValue(preValue.slice(0, preValue.length - 1))
                    phoneMaskFormatter(preValue.slice(0, preValue.length - 1))
                }
                break;
            case 'card':
                if (e.key.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + e.key;                    
                    setPreValue(concatenatedValue.length <=16 ? concatenatedValue : preValue)
                    cardMaskFormatter(concatenatedValue)
                } else if (e.key === 'Backspace' && preValue) {
                    setPreValue(preValue.slice(0, preValue.length - 1))
                    cardMaskFormatter(preValue.slice(0, preValue.length - 1))
                }
                break;
            case 'card-issue':
                if (e.key.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + e.key;                    
                    setPreValue(concatenatedValue.length <=4 ? concatenatedValue : preValue)
                    cardIssueMaskFormatter(concatenatedValue)
                } else if (e.key === 'Backspace' && preValue) {
                    setPreValue(preValue.slice(0, preValue.length - 1))
                    cardIssueMaskFormatter(preValue.slice(0, preValue.length - 1))
                }
                break;
            case 'iin':
                if (e.key.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + e.key;                    
                    setPreValue(concatenatedValue.length <=12 ? concatenatedValue : preValue)
                    iinMaskFormatter(concatenatedValue)
                } else if (e.key === 'Backspace' && preValue) {
                    setPreValue(preValue.slice(0, preValue.length - 1))
                    iinMaskFormatter(preValue.slice(0, preValue.length - 1))
                }
                break;
            case 'date':
                if (e.key.match(/^[0-9]+$/)) {
                    let concatenatedValue = preValue + e.key;                    
                    setPreValue(concatenatedValue.length <=8 ? concatenatedValue : preValue)
                    dateMaskFormatter(concatenatedValue, props.dateDelimiter)
                } else if (e.key === 'Backspace' && preValue) {
                    setPreValue(preValue.slice(0, preValue.length - 1))
                    dateMaskFormatter(preValue.slice(0, preValue.length - 1), props.dateDelimiter)
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (e) => {
        switch (props.mask) {
            case 'phone':
                props.onChange(phoneMaskFormatter(preValue, props.code), preValue);
                break;
            case 'card':
                props.onChange(cardMaskFormatter(preValue), preValue);
                break;
            case 'card-issue':
                props.onChange(cardIssueMaskFormatter(preValue), preValue);
                break;
            case 'iin':
                props.onChange(iinMaskFormatter(preValue), preValue);
                break;
            case 'date':
                props.onChange(dateMaskFormatter(preValue, props.dateDelimiter), preValue);
                break;
            default:
                break;
        }
    }

    const getValue = () => {
        switch (props.mask) {
            case 'phone':
                return phoneMaskFormatter(preValue, props.code);
            case 'card':
                return cardMaskFormatter(preValue);
            case 'card-issue':
                return cardIssueMaskFormatter(preValue);
            case 'iin':
                return iinMaskFormatter(preValue);
            case 'date':
                return dateMaskFormatter(preValue, props.dateDelimiter);
            default:
                return '';
        }
    }

    return (
        <InputField 
            {...props}
            type="text"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={getValue()}/>
    )
}

export default InputMask;
