import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Select, PopOver, isTwoDatesEqual } from '../index';

const monthesKz = ['Каңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым','Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'];
const monthesRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const monthesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthesFr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const weekKz = ['Дүйсенбі','Сейсенбі','Сәрсенбі','Бейсенбі','Жұма','Сенбі','Жексенбі'];
const weekRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const weekEn = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const weekFr = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
const shortWeekName = (name) => name.slice(0,3);

const getCurrentMonth = (lang, monthIndex) => {
    switch (lang) {
        case 'ru':
            return monthesRu[monthIndex];
        case 'kz':
            return monthesKz[monthIndex];
        case 'fr':
            return monthesFr[monthIndex];
        default:
            return monthesEn[monthIndex];
    }
}

const getMonthIndex = (month, lang) => {
    let index = 0;
    switch (lang) {
        case 'ru':
            for (const item of monthesRu) {
                if (item === month) return index;
                index++; 
            }
            break;
        case 'kz':
            for (const item of monthesKz) {
                if (item === month) return index;
                index++; 
            }
            break;
        case 'fr':
            for (const item of monthesFr) {
                if (item === month) return index;
                index++; 
            }
            break;
        default:
            for (const item of monthesEn) {
                if (item === month) return index;
                index++; 
            }
            break;
    }
}

const getCurrentWeek = (lang, fromSunday) => {
    if (fromSunday) {
        switch (lang) {
            case 'ru':
                let weekRuFromSunday = weekRu.map(item => item);
                weekRuFromSunday.pop();
                weekRuFromSunday.unshift('Воскресенье');
                return weekRuFromSunday;
            case 'kz':
                let weekKzFromSunday = weekKz.map(item => item);
                weekKzFromSunday.pop();
                weekKzFromSunday.unshift('Жексенбі');
                return weekKzFromSunday;
            case 'fr':
                let weekFrFromSunday = weekKz.map(item => item);
                weekFrFromSunday.pop();
                weekFrFromSunday.unshift('Dimanche');
                return weekFrFromSunday;
            default:
                let weekEnFromSunday = weekEn.map(item => item);
                weekEnFromSunday.pop();
                weekEnFromSunday.unshift('Sunday')
                return weekEnFromSunday;
        }
    } else {
        switch (lang) {
            case 'ru':
                return weekRu;
            case 'kz':
                return weekKz;
            case 'fr':
                return weekFr;
            default:
                return weekEn;
        }
    }
}

const years = (limit, onlyPast) => {
    let current = new Date().getFullYear();
    let years = [];
    
    if (!onlyPast) {
        for (let i = current + limit; i > current; i--) {
            years.push(i);
        }
        for (let i = 0; i <= limit; i++) {
            years.push(current - i)
        }
    } else {
        for (let i = 0; i <= limit; i++) {
            years.push(current - i)
        }
    }
    return years;
}

const monthes = (lang) => {
    switch (lang) {
        case 'ru':
            return monthesRu;
        case 'kz':
            return monthesKz;
        case 'fr':
            return monthesFr;
        default:
            return monthesEn;
    }
}

const Calendar = (props) => {
    const getInitialMonth = () => getCurrentMonth(props.locale, new Date().getMonth());
    const [month, setMonth] = useState(getInitialMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const today = new Date().getDate();

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

    const dateClass = (item) => {
        let result = '';
        if (!item) result = 'none';
        if (!props.hideWeekend && item &&
            (new Date(year, getMonthIndex(month, props.locale), item).getDay() === 6 || 
            new Date(year, getMonthIndex(month, props.locale), item).getDay() === 0)) result += ' weekend';
        if (item === today && !props.hideCurrentDay &&
                !isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active';
        else if (item === today && !props.hideCurrentDay && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active holiday';
        else if (item !== today && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' holiday';
        return result ? result.trim() : null;
    }

    const prepareMonth = () => {
        let monthFirstDayInWeek = new Date(year, getMonthIndex(month, props.locale), 1).getDay();

        if (!props.weekStartsSunday) {
            monthFirstDayInWeek = monthFirstDayInWeek - 1;
            monthFirstDayInWeek = monthFirstDayInWeek === -1 ? 6 : monthFirstDayInWeek;
        }
        
        let date = 1;
        let rows = [];

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
                                onClick={() => props.onDate && item ? 
                                    props.onDate(new Date(year, getMonthIndex(month, props.locale), item)) : {}} 
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
                    <Select
                        items={years(props.limit ? props.limit : 15, props.onlyPast)}
                        width={110}
                        color={props.color ? props.color : 'primary'}
                        value={year}
                        dark={props.dark}
                        size={props.size}
                        className="mr-5"
                        onChange={v => setYear(v)}/>
                    <Select
                        items={monthes(props.locale)}
                        width={110}
                        size={props.size}
                        dark={props.dark}
                        color={props.color ? props.color : 'primary'}
                        value={month}
                        onChange={v => setMonth(v)}/>
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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    popOverTrigger: PropTypes.oneOf([undefined,'','hover','click']),
    className: PropTypes.string
}
export default Calendar;