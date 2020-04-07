import React, { useState } from 'react';
import { RadioGroup, Table, Card, Collapse, Switch, Select, Icon, CopyToClipboard, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const citiesUS = ['Washington, D.C.', 'New York City', 'Chicago', 'Boston', 'San Francisco', 'Los Angeles'];
const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'onChange', 
        description: 'Handle radio change', 
        default: '', 
        type: 'function',
        value: 'return a radio value'
    },
    { 
        property: 'name', 
        description: 'Set radio group name', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'value', 
        description: 'Chosen value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set radio button color', 
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'size', 
        description: 'Set radio button size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'disabled',
        description: 'Make radio group disabled', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'vertical',
        description: 'Make position vertical', 
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
import { RadioGroup, Switch, Select, Icon } from '@assenti/rui-components';
const citiesUS = ['Washington, D.C.', 'New York City', 'Chicago', 'Boston', 'San Francisco', 'Los Angeles'];
const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [cityUS, setCityUS] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [vertical, setVertical] = useState(true);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Radio button color"
                color="primary"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Radio button size"
                color="primary"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Switch
                check={vertical}
                rightLabel="Vertical"
                color="primary"
                className="my-10"
                onChange={() => setVertical(!vertical)}/>
            <br/>
            <Switch
                check={isDisabled}
                rightLabel="Disabled"
                color="primary"
                className="my-10"
                onChange={() => setIsDisabled(!isDisabled)}/>
            <br/>
            <RadioGroup 
                value={cityUS} 
                vertical={vertical}
                name="city"
                size={size}
                color={color}
                disabled={isDisabled}
                onChange={(value) => setCityUS(value)}
                options={citiesUS}/>
        </div>
    )
}`

const RadioPage = () => {
    const [cityUS, setCityUS] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [vertical, setVertical] = useState(true);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<RadioGroup/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Radio button color"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Select
                            items={sizes}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            dark={theme}
                            label="Radio button size"
                            color="primary"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <br/>
                        <Switch
                            check={vertical}
                            rightLabel="Vertical"
                            color="primary"
                            className="my-10"
                            onChange={() => setVertical(!vertical)}/>
                        <br/>
                        <Switch
                            check={isDisabled}
                            rightLabel="Disabled"
                            color="primary"
                            className="my-10"
                            onChange={() => setIsDisabled(!isDisabled)}/>
                        <br/>
                        <Divider/>
                        <RadioGroup 
                            value={cityUS} 
                            vertical={vertical}
                            name="city"
                            size={size}
                            color={color}
                            disabled={isDisabled}
                            onChange={(value) => setCityUS(value)}
                            options={citiesUS}/>
                        <Collapse 
                            icon="code" 
                            iconSize={18} 
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                dark={theme}
                                text={usage} 
                                className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default RadioPage;