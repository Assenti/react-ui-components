import React, { useState } from 'react';
import { Checkbox, Table, Collapse, Card, Select, Icon, Switch, CopyToClipboard, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        property: 'fill', 
        description: 'Fill checkbox background', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
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
import { Checkbox } from '@assenti/rui-components';

function Example() {
    const [check, setCheck] = useState(true);

    return (
        <>
            <Checkbox
                checked={check}
                label="Checkbox" 
                onChange={() => setCheck(!check)}/>
        </>
    )
}`

const colors = ['secondary', 'primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

const CheckboxPage = () => {
    const [check, setCheck] = useState(true);
    const [label, setLabel] = useState(false);
    const [fill, setFill] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [color, setColor] = useState(colors[1]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Checkbox/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            dark={theme}
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
                            dark={theme}
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
                        <Switch 
                            color="primary" 
                            check={fill}
                            rightLabel="Fill"
                            className="my-10"
                            onChange={() => setFill(!fill)}/>
                        <Switch 
                            color="primary" 
                            check={disabled}
                            rightLabel="Disabled"
                            className="my-10"
                            onChange={() => setDisabled(!disabled)}/>
                        <br/>
                        <div className="py-10">
                            <Checkbox
                                checked={check}
                                color={color}
                                size={size}
                                fill={fill}
                                disabled={disabled}
                                label={label ? 'Checkbox' : null} 
                                onChange={() => setCheck(!check)}/>
                        </div>
                        <Collapse 
                            icon="code" 
                            iconSize={18}
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
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
                        index
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default CheckboxPage;