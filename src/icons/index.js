import React from 'react';

export const ChevronDoubleLeft = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'}
                d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
        </svg>
    )
}

export const ChevronDoubleRight = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
        </svg>
    )
}

export const ChevronBack = (props) => {
    return (
        <svg viewBox="0 0 477.175 477.175" 
            width={props.size ? props.size : 24} height={props.size ? props.size : 24}><g><g>
            <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" 
                fill={props.color ? props.color : '#4D4D4D'}/>
            </g></g>
        </svg>
    )
}

export const ChevronNext = (props) => {
    return (
        <svg viewBox="0 0 477.175 477.175" 
            width={props.size ? props.size : 32} height={props.size ? props.size : 32}><g><g>
            <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   " 
            fill={props.color ? props.color : '#4D4D4D'}/>
        </g></g> </svg>
    )
}

export const ChevronDown = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} 
            viewBox="0 0 407.437 407.437">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " fill={props.color ? props.color : '#4D4D4D'}/>
            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    )
}

export const Delete = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
    )
}

export const Edit = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
    )
}

export const Close = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    )
}

export const Code = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>
    )
}

export const Github = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} 
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
    )
}

export const Account = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
    )
}

export const Search = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
    )
}

export const Home = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
    )
}

export const Chip = (props) => {
    return (
        <svg width={props.size ? props.size : 24} height={props.size ? props.size : 24} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z" />
        </svg>
    )
}

export const Empty = (props) => {
    return (
        <svg viewBox="0 0 512 512" width={props.size ? props.size : 32} height={props.size ? props.size : 32}>
        <g>
            <g>
                <path fill={props.color ? props.color : '#4D4D4D'} d="M510.417,201.092l-48.2-96.4c-2.541-5.082-7.735-8.292-13.417-8.292H63.2c-5.682,0-10.875,3.21-13.417,8.292l-48.2,96.4
                    C0.542,203.175,0,205.472,0,207.8v192.8c0,8.284,6.716,15,15,15h482c8.284,0,15-6.716,15-15V207.8
                    C512,205.472,511.458,203.175,510.417,201.092z M72.471,126.4H439.53l33.2,66.4H352.4c-8.284,0-15,6.716-15,15
                    c0,44.884-36.516,81.399-81.4,81.399c-44.884,0-81.4-36.516-81.4-81.399c0-8.284-6.716-15-15-15H39.271L72.471,126.4z
                    M482,385.601H30V385.6V222.8h115.605c7.351,54.356,54.056,96.4,110.395,96.4s103.044-42.044,110.395-96.399H482V385.601z"/>
            </g>
        </g>
        </svg>
    )
}

export const Sun = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4D4D4D'}
                d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
        </svg>
    )
}

export const Moon = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4D4D4D'} 
                d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
        </svg>
    )
}

export const Star = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4D4D4D'} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
    )
}

export const StarOutline = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4D4D4D'} d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
        </svg>
    )
}

export const Smartphone = (props) => {
    return (
        <svg width={props.size ? props.size : 32} height={props.size ? props.size : 32} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4D4D4D'} d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>
    )
}