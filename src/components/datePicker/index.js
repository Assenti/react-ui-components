import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from '../index';
import InputField from '../input';
import Calendar from '../calendar';
import Button from '../button';
import Modal from '../modal';

const DatePicker = (props) => {
    const container = useRef();
    const [visible, setVisible] = useState(false);

    const handleClear = () => {
        if (props.onClear) {
            props.onClear()
        }
    }

    const handleClick = (e) => {
        if (container.current.contains(e.target)) return;
        setVisible(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);

        return () => {
            document.removeEventListener("mousedown", handleClick, true);
        }
    },[])

    return (
        <div className={(`rui-date-picker ${props.className}`).trim()} 
            ref={container}>
            {!props.inModal ? 
            <Dropdown
                closeManaged
                dark={props.dark}
                visible={visible}
                trigger={
                    <InputField
                        readOnly
                        size={props.size}
                        style={{ width: props.width ? props.width : '' }}
                        label={props.label}
                        hint={props.hint}
                        dark={props.dark}
                        hintColor={props.hintColor}
                        clearable={props.clearable}
                        onFocus={() => setVisible(true)}
                        onClear={handleClear}
                        required={props.required}
                        placeholder={props.placeholder}
                        prefix={<Icon name="calendar-month"/>} 
                        value={props.value}/>
                }
                content={
                    <div className="rui-date-picker__content">
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
                            selectBorderType={props.selectBorderType}
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
                    </div>}
                /> : 
            <>
                <InputField
                    readOnly
                    size={props.size}
                    style={{ width: props.width ? props.width : '' }}
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
                <Modal
                    width={300}
                    centered
                    closable
                    header={props.modalTitle}
                    visible={visible}
                    onClose={() => setVisible(false)}>
                    <div style={{ height: 240 }}>
                        <Calendar
                            width={300}
                            shortWeekName
                            active={props.active}
                            hideWeekend={props.hideWeekend}
                            hideCurrentDay={props.hideCurrentDay}
                            onDate={(date) => {
                                props.onDate(date)
                                setVisible(false)
                            }}
                            events={props.events}
                            selectBorderType={props.selectBorderType}
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
                    </div>
                </Modal>
            </>
            }
        </div>
    )
}
DatePicker.propTypes = {
    locale: PropTypes.oneOf(['en','ru','kz','fr']),
    modalTitle: PropTypes.node,
    inModal: PropTypes.bool,
    clearable: PropTypes.bool,
    onClear: PropTypes.func,
    value: PropTypes.string.isRequired,
    disabledDates: PropTypes.array,
    minDate: PropTypes.any,
    maxDate: PropTypes.any, 
    selectBorderType: PropTypes.oneOf([undefined,'','default','tile','rounded','smooth']),
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