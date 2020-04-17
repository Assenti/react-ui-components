import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from '../index';
import InputField from '../input';
import Calendar from '../calendar';
import Button from '../button';

const DatePicker = (props) => {
    const [visible, setVisible] = useState(false);

    const handleClear = () => {
        if (props.onClear) {
            props.onClear()
        }
    }

    return (
        <div className={(`rui-date-picker ${props.className}`).trim()}>
            <Dropdown
                closeManaged
                dark={props.dark}
                visible={visible}
                trigger={
                    <InputField
                        readOnly
                        size={props.size}
                        width={props.width}
                        label={props.label}
                        hint={props.hint}
                        dark={props.dark}
                        hintColor={props.hintColor}
                        clearable={props.clearable}
                        onClear={handleClear}
                        required={props.required}
                        placeholder={props.placeholder}
                        onFocus={() => setVisible(true)}
                        prefix={<Icon name="calendar-month"/>} 
                        value={props.value}/>
                }
                content={
                    <div 
                        tabIndex={-1} 
                        className="rui-date-picker__content">
                        <Calendar
                            shortWeekName
                            active={props.active}
                            hideWeekend={props.hideWeekend}
                            hideCurrentDay={props.hideCurrentDay}
                            onDate={(date) => {
                                props.onDate(date)
                                setVisible(false)
                            }}
                            events={props.events}
                            maxDate={props.maxDate}
                            minDate={props.minDate}
                            disabledDates={props.disabledDates}
                            holidays={props.holidays}
                            weekStartsSunday={props.weekStartsSunday}
                            dark={props.dark}
                            limit={props.limit} 
                            onlyPast={props.onlyPast}
                            locale={props.locale}
                            color={props.color}/>
                        <Button 
                            color={props.color && !props.btnColor ? props.color : props.btnColor}
                            onClick={() => setVisible(false)}
                            block name={props.cancelBtnName ? props.cancelBtnName : 'Cancel'}/>
                    </div>}
                />
        </div>
    )
}
DatePicker.propTypes = {
    locale: PropTypes.oneOf(['en','ru','kz','fr']),
    clearable: PropTypes.bool,
    onClear: PropTypes.func,
    value: PropTypes.string.isRequired,
    disabledDates: PropTypes.array,
    minDate: PropTypes.any,
    maxDate: PropTypes.any, 
    placeholder: PropTypes.string,
    hideWeekend: PropTypes.bool,
    hideCurrentDay: PropTypes.bool,
    label: PropTypes.string,
    onDate: PropTypes.func.isRequired,
    active: PropTypes.any,
    dark: PropTypes.bool,
    btnColor: PropTypes.oneOf([undefined,'','default','primary','info','success','error','black','secondary']),
    cancelBtnName: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hint: PropTypes.string,
    hintColor: PropTypes.oneOf(['success','error']),
    color: PropTypes.oneOf([undefined, 'primary','info','success','error']),
    size: PropTypes.oneOf([undefined,'default','medium','large']),
    className: PropTypes.string
}
export default DatePicker;