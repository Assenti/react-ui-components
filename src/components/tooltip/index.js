import React, { useState } from 'react';

export const Tooltip = (props) => {
    // const [show, setShow] = useState(false);

    function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
    }
      
    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    const tooltipClass = () => {
        let result = '';
        let className = {
            name: 'tooltip',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }
   
    return (
        <div className={tooltipClass()}>
            <span className="tooltip__text">{props.tooltip}</span>
            {props.children}
        </div>
    )
}
