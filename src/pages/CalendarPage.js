import React, { useState } from 'react';
import { Calendar, Select, Icon, Switch, InputField, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'locale', 
        description: 'Set locale (English, Kazakh, Russian, French. i18n in process)', 
        default: 'en', 
        type: 'string',
        value: 'en | kz | ru | fr'
    },
    { 
        property: 'events', 
        description: 'Set events', 
        default: '', 
        type: 'array[{ date, items: [{title?, event, color?}] }]',
        value: ''
    },
    { 
        property: 'holidays', 
        description: 'Set holidays', 
        default: '', 
        type: 'array[{ date }]',
        value: ''
    },
    { 
        property: 'onDate', 
        description: 'Invokes on date click (return Date object)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'active', 
        description: 'Chosen date value (original Date value)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'hideWeekend',
        description: 'If flag is set, weekend highlighting disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'hideCurrentDay',
        description: 'If flag is set, today highlighting disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'disabledDates',
        description: 'Pass array of dates that not available for pick', 
        default: '', 
        type: 'Date[]',
        value: ''
    },
    { 
        property: 'minDate',
        description: 'Set minimum endable date for pick', 
        default: '', 
        type: 'Date',
        value: ''
    },
    { 
        property: 'maxDate',
        description: 'Set maximum endable date for pick', 
        default: '', 
        type: 'Date',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set Calendar color theme', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | dark'
    },
    { 
        property: 'size', 
        description: 'Set Calendar size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'limit',
        description: 'Set years limit that should be enabled', 
        default: '15', 
        type: 'number',
        value: ''
    },
    { 
        property: 'onlyPast',
        description: 'If flag is set, only past years enabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'weekStartsSunday',
        description: 'If flag is set, week starts from Sunday', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'shortWeekName',
        description: 'Set short week name', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'width',
        description: 'Set width', 
        default: '100%', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'popOverTrigger',
        description: 'Set event popover invoking mode', 
        default: 'hover', 
        type: 'string',
        value: 'hover | click'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const colors = ['primary', 'info', 'success', 'error', 'black'];
const sizes = ['default', 'medium', 'large'];
const locales = ['en', 'kz', 'ru', 'fr'];

const events = [
    { 
        date: new Date(2020,2,8), 
        items: [
            { title: 'Event', event: 'International Women Day', color: '#9C27B0' },
            { title: 'Event', event: 'Congratulate my women', color: '#9C27B0' }

        ]
    },
    { 
        date: new Date(2020,2,22), 
        items: [
            { title: 'Event', event: 'Nauryz Meiramy Holiday', color: '#9C27B0' }
        ]
    },
]

const holidays = [
    { date: new Date(2020,2,8) },
    { date: new Date(2020,2,9) },
    { date: new Date(2020,2,22) },
    { date: new Date(2020,2,23) }
]

const usage =
`// Usage example
import React, { useState } from 'react';
import { Calendar } from '@assenti/rui-components';

const events = [
    { 
        date: new Date(2020,2,8), 
        items: [
            { title: 'Event', event: 'International Women Day', color: '#9C27B0' },
            { title: 'Event', event: 'Congratulate my women', color: '#9C27B0' }

        ]
    },
    { 
        date: new Date(2020,2,22), 
        items: [
            { title: 'Event', event: 'Nauryz Meiramy Holiday', color: '#9C27B0' }
        ]
    }
]

const holidays = [
    { date: new Date(2020,2,8) },
    { date: new Date(2020,2,9) },
    { date: new Date(2020,2,22) },
    { date: new Date(2020,2,23) }
]

function Example() {
    const [date, setDate] = useState('');

    return (
        <>
            <Calendar
                width={400}
                shortWeekName
                active={date}
                disabledDates={[new Date(2020,3,19), new Date(2020,3,20)]}
                maxDate={new Date()}
                onDate={(date) => {
                    console.log(date)
                    setDate(date)
                }}
                events={events}
                holidays={holidays}
                weekStartsSunday={weekStartsSunday}
                onlyPast
                color="primary"/>
        </>
    )
}`

const CalendarPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [locale, setLocale] = useState(locales[0]);
    const [limit, setLimit] = useState(15);
    const [onlyPast, setOnlyPast] = useState(true);
    const [weekStartsSunday, setWeekStartsSunday] = useState(false);
    const [full, setFull] = useState(false);
    const [hideWeekend, setHideWeekend] = useState(false);
    const [hideCurrentDay, setHideCurrentDay] = useState(false);
    const [date, setDate] = useState('');

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Calendar/>"
                    apiSearchable
                    apiDescItems={items}>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Calendar color"
                        color="primary"
                        className="mr-10"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <Select
                        items={sizes}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        dark={theme}
                        label="Calendar size"
                        color="primary"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={locales}
                        prefix={<Icon name="translate"/>}
                        width={200}
                        dark={theme}
                        label="Locale"
                        color="primary"
                        className="mr-10"
                        value={locale}
                        onChange={v => setLocale(v)}/>
                    <InputField
                        style={{ width: 200 }}
                        value={limit}
                        dark={theme}
                        label="Years limit"
                        onChange={e => setLimit(e.target.value)}
                        prefix={<Icon name="calendar-month"/>}
                        />
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={onlyPast}
                        rightLabel="Show only past years"
                        onChange={() => setOnlyPast(!onlyPast)}/>
                    <Switch 
                        color="primary" 
                        check={weekStartsSunday}
                        rightLabel="Week starts from Sunday"
                        onChange={() => setWeekStartsSunday(!weekStartsSunday)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={full}
                        rightLabel="Full width"
                        onChange={() => setFull(!full)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={hideCurrentDay}
                        rightLabel="Hide current day highlight"
                        onChange={() => setHideCurrentDay(!hideCurrentDay)}/>
                    <Switch 
                        color="primary" 
                        check={hideWeekend}
                        rightLabel="Hide weekend highlight"
                        onChange={() => setHideWeekend(!hideWeekend)}/>
                    <Divider/>
                    <br/>
                    <Calendar
                        width={full ? null : 400}
                        shortWeekName
                        active={date}
                        disabledDates={[new Date(2020,3,19), new Date(2020,3,20)]}
                        maxDate={new Date()}
                        hideWeekend={hideWeekend}
                        hideCurrentDay={hideCurrentDay}
                        onDate={(date) => {
                            console.log(date)
                            setDate(date)
                        }}
                        events={events}
                        holidays={holidays}
                        weekStartsSunday={weekStartsSunday}
                        size={size}
                        dark={theme}
                        limit={limit} 
                        onlyPast={onlyPast}
                        locale={locale}
                        color={color}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default CalendarPage;