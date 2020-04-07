import React, { useState } from 'react';
import { Switch, Table, Card, Collapse, CopyToClipboard, Select, Icon, RadioGroup, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Switch, Select, Icon, RadioGroup } from '@assenti/rui-components';
const colors = ['primary', 'info', 'success', 'error'];
const types = ['icon', 'label', 'none']
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [check, setCheck] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [vertical, setVertical] = useState(false);
    const [type, setType] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Switch color"
                color="primary"
                className="my-10"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Switch size"
                color="primary"
                className="my-10"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Switch 
                check={disabled} 
                color="primary"
                rightLabel="Disabled" 
                className="my-10"
                onChange={() => setDisabled(!disabled)}/>
            <br/>
            <Switch 
                check={vertical} 
                color="primary"
                rightLabel="Vertical" 
                className="my-10"
                onChange={() => setVertical(!vertical)}/>
            <br/>
            <RadioGroup
                options={types} 
                value={type}
                name="type"
                className="my-10" 
                onChange={(value) => setType(value)}/>
            <br/>
            <div className="py-10">
                <Switch 
                    check={check} 
                    color={color}
                    size={size}
                    leftLabel={type === 'label' ? 'Left label' : ''}
                    rightLabel={type === 'label' ? 'Right label' : ''} 
                    leftIcon={type === 'icon' ? 'moon' : ''}
                    rightIcon={type === 'icon' ? 'sun' : ''} 
                    disabled={disabled}
                    vertical={vertical} 
                    onChange={() => setCheck(!check)}/>
            </div>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'check', 
        description: 'define the switch state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'handle switch change', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'disabled', 
        description: 'Make switch disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'position', 
        description: 'Change switch position', 
        default: 'horizontal', 
        type: 'string',
        value: 'vertical'
    },
    { 
        property: 'color', 
        description: 'Set color', 
        default: 'gray', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'leftLabel', 
        description: 'Set left side label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'rightLabel', 
        description: 'Set right side label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'leftIcon', 
        description: 'Set left side icon', 
        default: '', 
        type: 'string',
        value: 'moon | home | etc. (see icons list)'
    },
    { 
        property: 'rightIcon', 
        description: 'Set right side icon', 
        default: '', 
        type: 'string',
        value: 'moon | home | etc. (see icons list)'
    },
    { 
        property: 'leftIconColor', 
        description: 'Set left side icon color', 
        default: '', 
        type: 'string',
        value: 'hex | rgba | css standard preset'
    },
    { 
        property: 'rightIconColor', 
        description: 'Set right side icon color', 
        default: '', 
        type: 'string',
        value: 'hex | rgba | css standard preset'
    },
    { 
        property: 'className', 
        description: 'Set css custom class', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['primary', 'info', 'success', 'error'];
const types = ['icon', 'label', 'none']
const sizes = ['default', 'medium', 'large'];

const SwitchPage = () => {
    const [check, setCheck] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [vertical, setVertical] = useState(false);
    const [type, setType] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Switch/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Switch color"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Select
                            items={sizes}
                            dark={theme}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            label="Switch size"
                            color="primary"
                            className="my-10"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <br/>
                        <Switch 
                            check={disabled} 
                            color="primary"
                            rightLabel="Disabled" 
                            className="my-10"
                            onChange={() => setDisabled(!disabled)}/>
                        <br/>
                        <Switch 
                            check={vertical} 
                            color="primary"
                            rightLabel="Vertical" 
                            className="my-10"
                            onChange={() => setVertical(!vertical)}/>
                        <br/>
                        <RadioGroup
                            options={types} 
                            value={type}
                            name="type"
                            className="my-10" 
                            onChange={(value) => setType(value)}/>
                        <Divider/>
                        <div className="py-10">
                            <Switch 
                                check={check} 
                                color={color}
                                size={size}
                                leftLabel={type === 'label' ? 'Left label' : ''}
                                rightLabel={type === 'label' ? 'Right label' : ''} 
                                leftIcon={type === 'icon' ? 'moon' : ''}
                                rightIcon={type === 'icon' ? 'sun' : ''} 
                                disabled={disabled}
                                vertical={vertical} 
                                onChange={() => setCheck(!check)}/>
                        </div>
                        <Collapse 
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            extra={<CopyToClipboard dark={theme} defaultText="Copy code" text={usage} className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
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
export default SwitchPage;