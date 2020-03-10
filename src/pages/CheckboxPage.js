import React, { useState } from 'react';
import { Checkbox, Table, Collapse, Card, Select, Icon, Switch, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'checked', 
        description: 'define the checkbox state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'handle checkbox change', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'disabled', 
        description: 'Make checkbox disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of checkbox from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'size', 
        description: 'Set checkbox size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'label', 
        description: 'Set checkbox label', 
        default: '', 
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
import { Checkbox, Select, Icon, Switch } from '@assenti/rui-components';
const colors = ['secondary', 'primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [check, setCheck] = useState(true);
    const [label, setLabel] = useState(false);
    const [color, setColor] = useState(colors[1]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Checkbox color"
                color="primary"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Checkbox size"
                color="primary"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={label}
                rightLabel="Label"
                className="my-10"
                onChange={() => setLabel(!label)}/>
            <br/>
            <div className="pa-10">
                <Checkbox
                    checked={check}
                    color={color}
                    size={size}
                    label={label ? 'Checkbox' : null} 
                    onChange={() => setCheck(!check)}/>
            </div>
        </div>
    )
}`

const colors = ['secondary', 'primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

const CheckboxPage = () => {
    const [check, setCheck] = useState(true);
    const [label, setLabel] = useState(false);
    const [color, setColor] = useState(colors[1]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Checkbox Component</div>
            <Card outlined title="Checkbox usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Checkbox color"
                    color="primary"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Checkbox size"
                    color="primary"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={label}
                    rightLabel="Label"
                    className="my-10"
                    onChange={() => setLabel(!label)}/>
                <br/>
                <div className="pa-10">
                    <Checkbox
                        checked={check}
                        color={color}
                        size={size}
                        label={label ? 'Checkbox' : null} 
                        onChange={() => setCheck(!check)}/>
                </div>
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
                items={items}
                index
                itemTitles={keys}/>
        </div>
    )
}
export default CheckboxPage;