import React, { useState } from 'react';
import { DatePicker, Select, Icon, ThemeContext, Divider, Switch } from '../components';
import { dateMask } from '../components/utils';
import Page from '../layouts/Page';

const rows = [
    { 
        property: 'value', 
        description: 'Date value (handled by your logic)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'active', 
        description: 'Date value (original Date value)', 
        default: '', 
        type: 'string',
        value: ''
    },
    {
        property: 'onDate',
        description: 'Invokes on date pick', 
        default: '', 
        type: 'function',
        value: ''
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
        description: 'Set Tabs items color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'selectBorderType', 
        description: 'Set years select borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'size', 
        description: 'Set Tabs items size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'locale', 
        description: 'Set locale', 
        default: 'en', 
        type: 'string',
        value: 'en | kz | ru | fr'
    },
    { 
        property: 'label', 
        description: 'Set label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'hint', 
        description: 'Set hint', 
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
        property: 'clearable', 
        description: 'Enable clear button', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClear', 
        description: 'Invokes on clear button click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'required', 
        description: 'Set required flag', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'inModal', 
        description: 'Open date picker module in modal', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'modalTitle', 
        description: 'Set modal title (has effect with inModal prop)', 
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'cancelBtnName', 
        description: 'Set cancel button name', 
        default: 'Cancel', 
        type: 'string',
        value: ''
    },
    { 
        property: 'btnColor', 
        description: 'Set cancel button color', 
        default: 'DatePicker color', 
        type: 'string',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage =
`// Usage examples
import React, { useState } from 'react';
import { DatePicker } from '@assenti/react-ui-components';

function Example() {
    const [date, setDate] = useState('');
    const [dateOriginal, setDateOriginal] = useState('');

    return (
        <>
            <DatePicker
                color="primary"
                placeholder="DD.MM.YYYY"
                value={date}
                clearable
                dark={theme}
                maxDate={new Date()}
                onDate={(date) => {
                    setDate(dateMask(date))
                    setDateOriginal(date)
                }}
                active={dateOriginal}
                onClear={() => setDate('')}
                width={250}
                onChange={(value) => setDate(value)}/>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const locales = ['en', 'kz', 'ru'];
const borders = ['default', 'tile', 'rounded', 'smooth'];

const DatePickerPage = () => {
    const [date, setDate] = useState('');
    const [dateOriginal, setDateOriginal] = useState('');
    const [color, setColor] = useState('primary');
    const [size, setSize] = useState('default');
    const [locale, setLocale] = useState('en');
    const [modal, setModal] = useState(false);
    const [border, setBorder] = useState(borders[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={rows}
                    componentName="<DatePicker/>"
                    apiSearchable>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={sizes}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Size"
                        dark={theme}
                        color="primary"
                        className="my-5"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Select border type"
                        color="primary"
                        className="my-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Select
                        items={locales}
                        prefix={<Icon name="translate"/>}
                        width={200}
                        label="Locale"
                        dark={theme}
                        color="primary"
                        value={locale}
                        onChange={v => setLocale(v)}/>
                    <br/>
                    <br/>
                    <Switch
                        check={modal}
                        onChange={() => setModal(!modal)}
                        rightLabel="In modal"
                        color="primary"/>
                    <Divider/>
                    <DatePicker
                        color={color}
                        size={size}
                        inModal={modal}
                        locale={locale}
                        placeholder="DD.MM.YYYY"
                        value={date}
                        clearable
                        selectBorderType={border}
                        hideWeekend
                        dark={theme}
                        maxDate={new Date()}
                        onDate={(date) => {
                            console.log(date)
                            setDate(dateMask(date))
                            setDateOriginal(date)
                        }}
                        active={dateOriginal}
                        onClear={() => setDate('')}
                        width={250}
                        onChange={(value) => setDate(value)}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default DatePickerPage;