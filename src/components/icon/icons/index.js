import React from 'react';
const defaultColor = '#4d4d4d';
const defaultSize = 24;

export const ChevronDoubleLeft = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor}
                d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
        </svg>
    )
}

export const ChevronDoubleRight = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
        </svg>
    )
}

export const ChevronBack = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
    )
}

export const ChevronNext = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
    )
}

export const ChevronDown = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
    )
}

export const Delete = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
    )
}

export const Edit = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
    )
}

export const Close = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    )
}

export const Code = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>
    )
}

export const Github = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} 
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
    )
}

export const Person = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
    )
}

export const Account = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
        </svg>
    )
}

export const ShieldAccount = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
        </svg>
    )
}

export const Search = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
    )
}

export const Home = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
    )
}

export const Chip = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z" />
        </svg>
    )
}

export const Empty = (props) => {
    return (
        <svg viewBox="0 0 512 512" 
            width={props.size ? props.size : defaultSize} 
            height={props.size ? props.size : defaultSize}>
        <g>
            <g>
                <path fill={props.color ? props.color : defaultColor} d="M510.417,201.092l-48.2-96.4c-2.541-5.082-7.735-8.292-13.417-8.292H63.2c-5.682,0-10.875,3.21-13.417,8.292l-48.2,96.4
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
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor}
                d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
        </svg>
    )
}

export const Moon = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} 
                d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
        </svg>
    )
}

export const Star = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
    )
}

export const StarOutline = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
        </svg>
    )
}

export const Smartphone = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>
    )
}

export const Hammer = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z" />
        </svg>
    )
}

export const City = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z" />
        </svg>
    )
}

export const Download = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>
    )
}

export const Menu = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
    )
}

export const Loading = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
    )
}

export const ReactLogo = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
        </svg>
    )
}

export const FileOutline = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
    )
}

export const Email = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
    )
}

export const Rocket = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z" />
        </svg>
    )
}

export const Key = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" />
        </svg>
    )
}

export const ExitToApp = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
        </svg>
    )
}

export const ArrowUpBold = (props) => {
    return (
        <svg width={props.size ? props.size : defaultSize} height={props.size ? props.size : defaultSize} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : defaultColor} d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
        </svg>
    )
}