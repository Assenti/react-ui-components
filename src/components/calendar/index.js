import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Select, PopOver, isTwoDatesEqual } from '../index';
import { getCurrentMonth, getMonthIndex, daysInMonth, years, monthes, getCurrentWeek, shortWeekName } from './utils';

const Calendar = (props) => {
    const getInitialMonth = () => getCurrentMonth(props.locale, new Date().getMonth());
    const [month, setMonth] = useState(getInitialMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const today = new Date().getDate();

    const componentClass = () => {
        let result = '';
        let className = {
            btn: 'rui-calendar',
            dark: props.dark ? 'dark' : '',
            size: props.size ? props.size : '',
            color: props.color && props.color !== 'default' ? props.color : 'primary',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const hasDateEvent = (chosenDate) => {
        if (props.events) {
            for (const item of props.events) {
                if (isTwoDatesEqual(item.date, chosenDate)) return item;
            }
        }
    }

    const isDateHoliday = (chosenDate) => {
        if (props.holidays) {
            for (const item of props.holidays) {
                if (isTwoDatesEqual(item.date, chosenDate)) return true;
            }
        }
    }

    const isItemToday = (item) => {
        let restoredDate = new Date(year, getMonthIndex(month, props.locale), item);
        return isTwoDatesEqual(restoredDate, new Date());
    }

    const isItemActive = (item) => {
        let restoredDate = new Date(year, getMonthIndex(month, props.locale), item);
        return isTwoDatesEqual(restoredDate, props.active)
    }

    const isItemDisabled = (item) => {
        let restoredDate = new Date(year, getMonthIndex(month, props.locale), item);
       
        if (props.maxDate || props.minDate) {
            if (restoredDate < props.maxDate) return false;
            if (restoredDate > props.maxDate) return true;
            if (restoredDate > props.minDate) return false;
            if (restoredDate < props.minDate) return true;
        }
       
        if (props.disabledDates) {
            for (const i of props.disabledDates) {
                if (isTwoDatesEqual(i, restoredDate)) return true;
            }
        }
        
        return false;
    }

    const dateClass = (item) => {
        let result = '';
        if (!item) result = 'none';
        if (isItemDisabled(item)) result += ' disabled';
        if (!props.hideWeekend && item &&
            (new Date(year, getMonthIndex(month, props.locale), item).getDay() === 6 || 
            new Date(year, getMonthIndex(month, props.locale), item).getDay() === 0)) result += ' weekend';
        if (isItemToday(item) && !props.hideCurrentDay &&
                !isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' today';
        if (isItemActive(item) && !isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active';
        else if (item === today && !props.hideCurrentDay && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active holiday';
        else if (item !== today && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' holiday';
        return result ? result.trim() : null;
    }

    const handleDateClick = (item) => {
        if (props.onDate && item && !isItemDisabled(item)) props.onDate(new Date(year, getMonthIndex(month, props.locale), item))
    }

    const prepareMonth = () => {
        let monthFirstDayInWeek = new Date(year, getMonthIndex(month, props.locale), 1).getDay();
        let date = 1;
        let rows = [];

        if (!props.weekStartsSunday) {
            monthFirstDayInWeek = monthFirstDayInWeek - 1;
            monthFirstDayInWeek = monthFirstDayInWeek === -1 ? 6 : monthFirstDayInWeek;
        }

        for (let i = 0; i < 6; i++) {
            let cells = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < monthFirstDayInWeek) {
                    cells.push('')
                } else if (date > daysInMonth(getMonthIndex(month, props.locale)+1, year)) {
                    break;
                } else {
                    cells.push(date);
                    date++;
                }
            }
            rows.push({ week: i, days: cells });
        }
        return (
            <>
                {rows.map((item, iter) => 
                    <tr key={iter}>
                        {item.days.map((item, index) => 
                            <td key={index}
                                onClick={() => handleDateClick(item)} 
                                    className={dateClass(item)}
                                    name={item}>
                                    {item}
                                    <div className="rui-calendar__events">
                                        {hasDateEvent(new Date(year, getMonthIndex(month, props.locale), item)) &&
                                            hasDateEvent(new Date(year, getMonthIndex(month, props.locale), item)).items.map((event, iter) =>
                                                <PopOver
                                                    key={iter}
                                                    trigger={props.popOverTrigger ? props.popOverTrigger : 'hover'}
                                                    dark={props.dark}
                                                    title={event.title}
                                                    content={event.event}>
                                                        <div style={{ 
                                                                backgroundColor: event.color 
                                                            }}
                                                        className="rui-calendar__event"></div>
                                                </PopOver>
                                            ) 
                                        }
                                    </div>
                            </td>)}
                    </tr>
                )}
            </>
        );
    }

    const handleNext = () => {
        if (getMonthIndex(month, props.locale) < 11) {
            setMonth(getCurrentMonth(props.locale, getMonthIndex(month, props.locale)+1))
        } else {
            setMonth(getCurrentMonth(props.locale, 0))
            setYear(year + 1)
        }
    }

    const handlePrev = () => {
        if (getMonthIndex(month, props.locale) > 0) {
            setMonth(getCurrentMonth(props.locale, getMonthIndex(month, props.locale)-1))
        } else {
            setMonth(getCurrentMonth(props.locale, 11))
            setYear(year - 1)
        }
    }

    useEffect(() => {
        setMonth(getInitialMonth())
    },[props.locale])

    return (
        <div className={componentClass()} style={{ width: props.width }}>
            <div className="rui-calendar__header">
                <Button 
                    icon="chevron-back" 
                    light={!props.dark} 
                    dark={props.dark}
                    size={props.size} 
                    onClick={handlePrev}/>
                <div className="rui-calendar__title">
                    <span>{month}</span>
                    <Select
                        items={years(props.limit ? props.limit : 15, props.onlyPast)}
                        width={80}
                        borderType={props.selectBorderType}
                        color={props.color ? props.color : 'primary'}
                        value={year}
                        maxHeight={300}
                        dark={props.dark}
                        size={props.size}
                        className="rui-year ml-10"
                        onChange={v => setYear(v)}/>
                </div>
                <Button 
                    icon="chevron-next" 
                    light={!props.dark} 
                    dark={props.dark} 
                    size={props.size} 
                    onClick={handleNext}/>
            </div>
            <table className="rui-calendar__body">
                <thead>
                    <tr>
                        {getCurrentWeek(props.locale, props.weekStartsSunday).map((item, index) =>
                            <th key={index}>{props.shortWeekName ? shortWeekName(item) : item}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {prepareMonth()}
                </tbody>
            </table>
            <div className="rui-calendar__footer"></div>
        </div>
    )
}
Calendar.propTypes = {
    locale: PropTypes.oneOf([undefined,'','en','kz','ru','fr']),
    events: PropTypes.array,
    holidays: PropTypes.array,
    disabledDates: PropTypes.array,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    selectBorderType: PropTypes.oneOf([undefined,'','default','tile','rounded','smooth']),
    onDate: PropTypes.func,
    hideWeekend: PropTypes.bool,
    hideCurrentDay: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','default','primary','info','success','error','dark']),
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    limit: PropTypes.number,
    onlyPast: PropTypes.bool,
    weekStartsSunday: PropTypes.bool,
    shortWeekName: PropTypes.bool,
    dark: PropTypes.bool,
    active: PropTypes.any,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    popOverTrigger: PropTypes.oneOf([undefined,'','hover','click']),
    className: PropTypes.string
}
export default Calendar;