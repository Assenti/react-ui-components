import React, { useState } from 'react';
import { ButtonGroup, Card, Table, Collapse, Select, Icon, Switch } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { ButtonGroup, Select, Switch, Icon } from '@assenti/react-ui-components';
const langs = ['KZ', 'RU', 'EN'];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [outlined, setOutlined] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);

    return (
        <div>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Button size"
                color="primary"
                className="ml-10"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Button color"
                color="primary"
                className="ml-10"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={outlined}
                rightLabel="Outlined"
                className="pl-10 my-10"
                onChange={() => setOutlined(!outlined)}/>
            <Switch 
                color="primary" 
                check={icon}
                rightLabel="Icon"
                className="pl-10 my-10"
                onChange={() => setIcon(!icon)}/>
            <br/>
            <Switch 
                color="primary" 
                check={lifted}
                rightLabel="Lifted"
                className="pl-10 my-10"
                onChange={() => setLifted(!lifted)}/>
            <br/>
            <div className="pa-10">
                <ButtonGroup 
                    default={0} 
                    options={icon ? icons : langs} 
                    color={color}
                    size={size}
                    icon={icon}
                    lifted={lifted}
                    outlined={outlined}
                    className="mr-10"/>
            </div>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'options',
        description: 'Button group options', 
        default: '', 
        type: 'string[] | number[]',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Handle selection (return item and index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'default',
        description: 'Set default active item', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'size',
        description: 'Set buttons group size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'icon', 
        description: 'Set group type to icon', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set buttons color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | secondary | black'
    },
    { 
        property: 'outlined', 
        description: 'Make buttons group background transparent and outline borders', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'lifted', 
        description: 'Lift up the button group', 
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
];
const langs = ['KZ', 'RU', 'EN'];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const sizes = ['default', 'medium', 'large'];

const ButtonGroupPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [outlined, setOutlined] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);

    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="rui-page-title">ButtonGroup Component</div>
            </div>
            <Card outlined title="ButtonGroup usage">
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Button size"
                    color="primary"
                    className="ml-10"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Button color"
                    color="primary"
                    className="ml-10"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={outlined}
                    rightLabel="Outlined"
                    className="pl-10 my-10"
                    onChange={() => setOutlined(!outlined)}/>
                <Switch 
                    color="primary" 
                    check={icon}
                    rightLabel="Icon"
                    className="pl-10 my-10"
                    onChange={() => setIcon(!icon)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={lifted}
                    rightLabel="Lifted"
                    className="pl-10 my-10"
                    onChange={() => setLifted(!lifted)}/>
                <br/>
                <div className="pa-10">
                    <ButtonGroup 
                        default={0} 
                        options={icon ? icons : langs} 
                        color={color}
                        size={size}
                        icon={icon}
                        lifted={lifted}
                        outlined={outlined}
                        className="mr-10"/>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
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
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default ButtonGroupPage;