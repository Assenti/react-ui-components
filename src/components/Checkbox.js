import React from 'react'

export const Checkbox = (props) => {
    return (
        <label className="checkbox">
            <input type="checkbox"
                checked={props.isChecked ? props.isChecked : false}
                disabled={props.isDisabled ? props.isDisabled : false}
                onChange={() => props.handleCheck()}/>
            <span></span>
        </label>
    )
}
