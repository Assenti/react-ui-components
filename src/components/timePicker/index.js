import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, List, InputField, Modal } from '../index';

const hours = () => {
    let hours = [];
    for (let i = 0; i < 24; i++) {
        if (i.toString().length < 2) {
            hours.push(`0${i}`)
        } else {
            hours.push(i.toString())
        }
    }
    return hours;
}

const minutes = () => {
    let minutes = [];
    for (let i = 0; i < 60; i++) {
        if (i.toString().length < 2) {
            minutes.push(`0${i}`)
        } else {
            minutes.push(i.toString())
        }
    }
    return minutes;
}

const headers = (locale) => {
    switch (locale) {
        case 'kz':
            return ['Сағ','Мин','Сек'];
        case 'ru':
            return ['Час','Мин','Сек'];
        default:
            return ['HH','MM','SS'];
    }
}

const TimePicker = (props) => {
    const [visible, setVisible] = useState(false);
    const [hh, setHH] = useState('00');
    const [mm, setMM] = useState('00');
    const [ss, setSS] = useState('00');

    const placeholder = () => {
        if (props.noSeconds) {
            return props.placeholder ? props.placeholder : '00:00';
        } else {
            return props.placeholder ? props.placeholder : '00:00:00';
        }
    }

    const handleClick = (value, type) => {
        if (props.noSeconds) {
            if (type === 'hh') {
                setHH(value)
                props.onChange(`${value}:${mm}`)
            } else if (type === 'mm') {
                setMM(value)
                props.onChange(`${hh}:${value}`)
            }
        } else {
            if (type === 'hh') {
                setHH(value)
                props.onChange(`${value}:${mm}:${ss}`)
            } else if (type === 'mm') {
                setMM(value)
                props.onChange(`${hh}:${value}:${ss}`)
            } else if (type === 'ss') {
                setSS(value)
                props.onChange(`${hh}:${mm}:${value}`)
            }
        }
    }

    const handleClear = () => {
        if (props.onClear) {
            props.onClear()
            setHH('00');
            setMM('00');
            setSS('00');
        }
    }

    return (
        <div className={`rui-timepicker ${props.className}`}>
            {!props.inModal ?
            <Dropdown
                closeManaged
                dark={props.dark}
                visible={visible}
                trigger={
                    <InputField
                        readOnly
                        size={props.size}
                        style={{ width: props.width }}
                        label={props.label}
                        hint={props.hint}
                        dark={props.dark}
                        hintColor={props.hintColor}
                        clearable={props.clearable}
                        onClear={handleClear}
                        required={props.required}
                        placeholder={placeholder()}
                        onFocus={() => setVisible(true)}
                        onBlur={() => setVisible(false)}
                        prefix={<Icon name="clock-outline"/>} 
                        value={props.value}/>
                }>
                <div className="rui-timepicker__content">
                    <List className="col" header={headers(props.locale)[0]}>
                        {hours().map((item, index) => 
                            <List.Item 
                                hover
                                isActiveItem={item === hh}
                                onClick={() => handleClick(item, 'hh')}
                                key={index}
                                item={item}/>
                        )}
                    </List>
                    <List className="col" header={headers(props.locale)[1]}>
                        {minutes().map((item, index) => 
                            <List.Item 
                                hover
                                isActiveItem={item === mm}
                                onClick={() => handleClick(item, 'mm')}
                                key={index}
                                item={item}/>
                        )}
                    </List>
                    {!props.noSeconds && 
                    <List className="col" header={headers(props.locale)[2]}>
                        {minutes().map((item, index) => 
                            <List.Item 
                                hover
                                isActiveItem={item === ss}
                                onClick={() => handleClick(item, 'ss')}
                                key={index}
                                item={item}/>
                        )}
                    </List>}
                </div>
            </Dropdown> : 
            <>
                <InputField
                    readOnly
                    size={props.size}
                    style={{ width: props.width }}
                    label={props.label}
                    hint={props.hint}
                    dark={props.dark}
                    hintColor={props.hintColor}
                    clearable={props.clearable}
                    onClear={handleClear}
                    required={props.required}
                    placeholder={placeholder()}
                    onFocus={() => setVisible(true)}
                    prefix={<Icon name="clock-outline"/>} 
                    value={props.value}/>
                    <Modal
                        width={300}
                        centered
                        closable
                        header={props.modalTitle}
                        visible={visible}
                        onClose={() => setVisible(false)}>
                        <div style={{ height: 240 }}>
                        <div className="rui-timepicker__content">
                            <List className="col" header={headers(props.locale)[0]}>
                                {hours().map((item, index) => 
                                    <List.Item 
                                        hover
                                        isActiveItem={item === hh}
                                        onClick={() => handleClick(item, 'hh')}
                                        key={index}
                                        item={item}/>
                                )}
                            </List>
                            <List className="col" header={headers(props.locale)[1]}>
                                {minutes().map((item, index) => 
                                    <List.Item 
                                        hover
                                        isActiveItem={item === mm}
                                        onClick={() => handleClick(item, 'mm')}
                                        key={index}
                                        item={item}/>
                                )}
                            </List>
                            {!props.noSeconds && 
                                <List className="col" header={headers(props.locale)[2]}>
                                    {minutes().map((item, index) => 
                                        <List.Item 
                                            hover
                                            isActiveItem={item === ss}
                                            onClick={() => handleClick(item, 'ss')}
                                            key={index}
                                            item={item}/>
                                    )}
                                </List>}
                            </div>
                        </div>
                    </Modal>
            </>}
        </div>
    )
}
TimePicker.propTypes = {
    locale: PropTypes.oneOf(['en','ru','kz']),
    clearable: PropTypes.bool,
    onClear: PropTypes.func,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    dark: PropTypes.bool,
    inModal: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hint: PropTypes.string,
    hintColor: PropTypes.oneOf(['success','error']),
    color: PropTypes.oneOf(['primary','info','success','error']),
    size: PropTypes.oneOf(['default','medium','large']),
    className: PropTypes.string
}
export default TimePicker;