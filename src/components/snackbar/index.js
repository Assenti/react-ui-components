import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const SnackbarItem = (props) => {
    const getColor = () => {
        if (props.type === 'success') return '#1aaa55';
        else if (props.type === 'error') return '#f44336';
        else if (props.type === 'info') return '#42a5f5'
        else return props.dark ? '#ddd' : '#3d3d3d';
    }

    const getRadius = () => {
        if (props.borderType === 'rounded') return '60px';
        if (props.borderType === 'tile') return '0';
        else return '4px';
    }

    return (
        <div className="rui-snackbar-message-container">
            <div className={(`rui-snackbar ${props.type ? props.type : ''}`).trim()}>
                {props.message}
                {props.controls}
            </div>
            <style jsx="true">{`
                @keyframes SlideInOut {
                    0%{
                        transform: translateY(0);
                        opacity: .3;
                    }
                    ${props.transitionPercentage}% {
                        transform: translateY(-20px);
                        opacity: 1;
                    }
                    ${(100-props.transitionPercentage)}% {
                        transform: translateY(-20px);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(0px);
                        opacity: .3;
                    }
                }
                @media (max-width: 529px) {
                    .rui-snackbar-message-container {
                        max-width: 90%;
                        width: 90%;
                    }
                }
                .rui-snackbar-container {
                    position: fixed;
                    width: 100%;
                    bottom: 16px;
                    left: 0px;
                    z-index: 9999;
                }
                .rui-snackbar {
                    display: flex;
                    align-items: center;
                    justify-content: ${props.controls ? 'space-between' : 'center'};
                    flex: 1;
                    padding: 0 15px;
                    border-radius: ${getRadius()};
                    font-size: 15px;
                    min-height: 45px;
                }
                .rui-snackbar > button, div, span, i {
                    margin-top: 0;
                    margin-bottom: 0;
                }
                .rui-snackbar-message-container {
                    color: ${props.dark ? '#000' : '#fff'};
                    max-width: 350px;
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,.15);
                    background-color: ${getColor()};
                    margin: 0px auto;
                    border-radius: ${getRadius()};
                    display: flex;
                    animation: SlideInOut ${props.duration}s ease-in-out;
                }
            `}</style>
        </div>
    )
}

export const snackbar = {
    remove: () => {
        unmountComponentAtNode(document.getElementById('rui-snackbar-container'))
        snackbar.currentToast = false
        if (snackbar.timeout){
            clearTimeout(snackbar.timeout)
            snackbar.timeout = null
        }
    },
    currentToast: false,
    timeout: null,
    /**
     * Snackbar options description
     * @typedef {Object} SnackbarOptions
     * @property {string} type success | error | info
     * @property {string} borderType tile | rounded
     * @property {boolean} dark
     * @property {any} controls
     * @property {number} duration
     */
    /**
     * message function description
     * @param {string} message
     * @param {SnackbarOptions | null} options
     */
    message: (message, options = null) => {
        let duration = 5
        if (options) {
            if (options.duration)
            duration = options.duration
        } 
  
        if (snackbar.currentToast) snackbar.remove()
        let trasitionPercentage = 0.3*(100/duration)

        render(<SnackbarItem 
            message={message} 
            slideIn
            borderType={options?.borderType} 
            type={options?.type}
            dark={options?.dark}
            controls={options?.controls}
            transitionPercentage={trasitionPercentage} 
            duration={duration} />, 
            document.getElementById('rui-snackbar-container'));

        snackbar.currentToast = true
        snackbar.timeout = setTimeout(snackbar.remove, duration * 1000)
    }
}