import React from 'react';

export const ChevronDoubleLeft = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'}
                d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
        </svg>
    )
}

export const ChevronDoubleRight = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
        </svg>
    )
}

export const Delete = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
    )
}

export const Edit = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
    )
}

export const Close = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    )
}