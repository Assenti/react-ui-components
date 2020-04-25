import React, { useState } from 'react';
import { TimePicker, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const rows = [
    { 
        property: 'value', 
        description: 'Time value', 
        default: '', 
        type: 'string',
        value: ''
    },
    {
        property: 'onChange',
        description: 'Invokes on time pick changes', 
        default: '', 
        type: 'function',
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
        value: 'en | ru | kz'
    },
    { 
        property: 'noSeconds', 
        description: 'Leave only hours and minutes', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'width', 
        description: 'Set width', 
        default: '', 
        type: 'string | number',
        value: ''
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
        property: 'required', 
        description: 'Set required flag', 
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
        property: 'dark', 
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
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
import { TimePicker, Select, Icon, Switch, Divider } from '@assenti/react-ui-components';
const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const locales = ['en', 'kz', 'ru'];

function Example() {
    const [time, setTime] = useState('');
    const [color, setColor] = useState('primary');
    const [size, setSize] = useState('default');
    const [noSec, setNoSec] = useState(false);
    const [locale, setLocale] = useState('en');

    return (
        <>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                dark={theme}
                label="Color"
                color="primary"
                className="my-5"
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
                items={locales}
                prefix={<Icon name="translate"/>}
                width={200}
                label="Locale"
                dark={theme}
                color="primary"
                value={locale}
                onChange={v => setLocale(v)}/>
            <br/>
            <Switch
                check={noSec}
                onChange={() => setNoSec(!noSec)}
                color="primary"
                className="my-10"
                rightLabel="No seconds"
                />
            <Divider/>
            <TimePicker
                color={color}
                size={size}
                locale={locale}
                noSeconds={noSec}
                value={time}
                clearable
                dark={theme}
                onClear={() => setTime('')}
                width={200}
                onChange={(value) => setTime(value)}
                />
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const locales = ['en', 'kz', 'ru'];

const TimePickerPage = () => {
    const [time, setTime] = useState('');
    const [color, setColor] = useState('primary');
    const [size, setSize] = useState('default');
    const [noSec, setNoSec] = useState(false);
    const [locale, setLocale] = useState('en');

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={rows}
                    componentName="<TimePicker/>">
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        className="my-5"
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
                        items={locales}
                        prefix={<Icon name="translate"/>}
                        width={200}
                        label="Locale"
                        dark={theme}
                        color="primary"
                        value={locale}
                        onChange={v => setLocale(v)}/>
                    <br/>
                    <Switch
                        check={noSec}
                        onChange={() => setNoSec(!noSec)}
                        color="primary"
                        className="my-10"
                        rightLabel="No seconds"
                        />
                    <Divider/>
                    <TimePicker
                        color={color}
                        size={size}
                        locale={locale}
                        noSeconds={noSec}
                        value={time}
                        clearable
                        dark={theme}
                        onClear={() => setTime('')}
                        width={200}
                        onChange={(value) => setTime(value)}
                        />
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TimePickerPage;