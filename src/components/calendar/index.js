import React, { useState } from 'react';
import { Button, Select } from '../index';

const monthesKz = ['Каңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым','Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'];
const monthesRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const monthesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const weekKz = ['Дүйсенбі','Сейсенбі','Сәрсенбі','Бейсенбі','Жұма','Сенбі','Жексенбі'];
const weekRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const weekEn = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}

const shortWeekName = (name) => {
    return name.slice(0,3);
}

const getCurrentMonth = (lang) => {
    switch (lang) {
        case 'ru':
            return monthesRu[new Date().getMonth()];
        case 'kz':
            return monthesKz[new Date().getMonth()];
        default:
            return monthesEn[new Date().getMonth()];
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
        default:
            for (const item of monthesEn) {
                if (item === month) return index;
                index++; 
            }
            break;
    }
}

const getCurrentWeekDay = (lang) => {
    switch (lang) {
        case 'ru':
            return weekRu(new Date().getDay());
        case 'kz':
            return weekKz(new Date().getDay());
        default:
            return weekEn(new Date().getDay());
    }
}

const years = () => {
    let current = new Date().getFullYear();
    let years = [];
    for (let i = 0; i < 25; i++) {
        years.push(current - i)
    }
    return years;
}

const monthes = (lang) => {
    switch (lang) {
        case 'ru':
            return monthesRu;
        case 'kz':
            return monthesKz;
        default:
            return monthesEn;
    }
}

const Calendar = (props) => {
    const [month, setMonth] = useState(getCurrentMonth(props.locale));
    const [year, setYear] = useState(new Date().getFullYear());

    const currentDay = () => new Date().getDate();

    const prepareWeekHeaders = () => {
        switch (props.locale) {
            case 'ru':
                return weekRu;
            case 'kz':
                return weekKz;
            default:
                return weekEn;
        }
    }

    const prepareMonth = () => {
        let lang = props.locale ? props.locale : 'en';
        let monthFirstDayInWeek = new Date(year, getMonthIndex(month), 1).getDay() + 1;
        let days = [];
        let weekOne = [];
        let weekTwo = [];
        let weekThree = [];
        let weekFour = [];
        let weekFive = [];
        let weekSix = [];

        for (let i = 0; i < daysInMonth(getMonthIndex(month)+1, year); i++) {
            if (i < 7) weekOne.push(i+1);
            else if (i >= 7 && i < 14) weekTwo.push(i+1);
            else if (i >= 14 && i < 21) weekThree.push(i+1);
            else if (i >= 21 && i < 28) weekFour.push(i+1);
            else if (i >= 28 && i < 31) weekFive.push(i+1);
        }

        return (
            <React.Fragment>
                <tr>
                    {weekOne.map((item, index) => 
                        <td key={index} className={item === currentDay() ? 'active' : ''}>{item}</td>)}
                </tr>
                <tr>
                    {weekTwo.map((item, index) => 
                        <td key={index} className={item === currentDay() ? 'active' : ''}>{item}</td>)}
                </tr>
                <tr>
                    {weekThree.map((item, index) => 
                        <td key={index} className={item === currentDay() ? 'active' : ''}>{item}</td>)}
                </tr>
                <tr>
                    {weekFour.map((item, index) => 
                        <td key={index} className={item === currentDay() ? 'active' : ''}>{item}</td>)}
                </tr>
                <tr>
                    {weekFive.map((item, index) => 
                        <td key={index} className={item === currentDay() ? 'active' : ''}>{item}</td>)}
                </tr>
            </React.Fragment>
        )
    }

    const componentClass = () => {
        let result = '';
        let className = {
            btn: 'rui-calendar',
            color: props.color && props.color !== 'default' ? props.color : 'primary',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={componentClass()}>
            <div className="rui-calendar__header">
                <Button icon="chevron-back" light/>
                <div className="rui-calendar__title">
                    <Select
                        items={years()}
                        width={100}
                        color={props.color ? props.color : 'primary'}
                        value={year}
                        className="mr-5"
                        onChange={v => setYear(v)}/>
                    <Select
                        items={monthes()}
                        width={100}
                        color={props.color ? props.color : 'primary'}
                        value={month}
                        onChange={v => setMonth(v)}/>
                </div>
                <Button icon="chevron-next" light/>
            </div>
            <table className="rui-calendar__body">
                <thead>
                    <tr>
                        {prepareWeekHeaders().map((item, index) =>
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
export default Calendar;