import React, { useState } from 'react';
import { TimePicker, Card, Select, Icon, Switch, Table, Collapse, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
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
import { TimePicker, Switch, Select, Icon } from '@assenti/react-ui-components';
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
            <TimePicker
                color={color}
                size={size}
                locale={locale}
                noSeconds={noSec}
                value={time}
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
        <div className="rui-page">
            <div className="rui-page-title">{'<TimePicker/>'} Component</div>
            <Card outlined title="Usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
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
                <TimePicker
                    color={color}
                    size={size}
                    locale={locale}
                    noSeconds={noSec}
                    value={time}
                    clearable
                    onClear={() => setTime('')}
                    width={200}
                    onChange={(value) => setTime(value)}
                    />
                <Collapse 
                    icon="code" 
                    iconSize={18} 
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>                    
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default TimePickerPage;