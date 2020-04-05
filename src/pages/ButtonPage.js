import React, { useState, useRef } from 'react';
import { Button, Table, Card, Switch, BackTopBtn, Collapse, RadioGroup, Select, Icon, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'onClick', 
        description: 'Handle button click', 
        default: '', 
        type: 'function',
        value: 'return a button click event object'
    },
    { 
        property: 'name', 
        description: 'Set button name (can be set with icon)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'type', 
        description: 'Set button type', 
        default: 'button', 
        type: 'string',
        value: 'button | submit | reset'
    },
    { 
        property: 'lifted', 
        description: 'Lift up the button', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set background and border color of button from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | black | secondary'
    },
    { 
        property: 'disabled',
        description: 'Make Button disabled', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'loading',
        description: 'Activate loading and make Button disabled', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'borderType', 
        description: 'Set Button border type',
        default: 'false', 
        type: 'boolean',
        value: 'smooth | rounded | tile'
    },
    { 
        property: 'outlined', 
        description: 'Make button background transparent and outline borders', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'block', 
        description: 'Fills the parent component width',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set button size',
        default: '', 
        type: 'string',
        value: 'medium | large'},
    { 
        property: 'icon',
        description: 'Set icon in a button and give circle shape to it (can be set with name)', 
        default: '', 
        type: 'string',
        value: 'home | search | etc.'
    },
    { 
        property: 'iconSize',
        description: 'Set icon size', 
        default: '24px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'iconLeft',
        description: 'Change icon position to the left from name', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'iconAllotted',
        description: 'Allot an icon (has effect with outlined prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode (can not be used with light prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'light',
        description: 'Set light mode (can not be used with dark prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'setRef', 
        description: 'Set ref', 
        default: '', 
        type: 'React.RefObject',
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
import { Button, Switch, Select, Icon, RadioGroup } from '@assenti/react-ui-components';
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const borders = ['default', 'rounded', 'smooth', 'tile'];
const types = ['dark', 'light', 'none'];

function Example() {
    const [loading, setLoading] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [block, setBlock] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [icon, setIcon] = useState(false);
    const [iconLeft, setIconLeft] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [iconAllotted, setIconAllotted] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[0]);
    const [color, setColor] = useState(colors[0]);
    const [type, setType] = useState('');

    return (
        <>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Button size"
                color="primary"
                className="pl-10"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Select
                items={borders}
                prefix={<Icon name="shape"/>}
                width={200}
                label="Button border type"
                color="primary"
                className="pl-10"
                value={border}
                onChange={v => setBorder(v)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Button color"
                color="primary"
                className="pl-10"
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
                check={uppercase} 
                color="primary"
                rightLabel="Uppercase" 
                className="pl-10 my-10"
                onChange={() => setUppercase(!uppercase)}/>
            <br/>
            <Switch 
                check={loading} 
                color="primary"
                rightLabel="Loading" 
                className="pl-10 my-10"
                onChange={() => setLoading(!loading)}/>
            <Switch 
                check={disabled} 
                color="primary"
                rightLabel="Disabled" 
                className="pl-10 my-10"
                onChange={() => setDisabled(!disabled)}/>
            <br/>
            <Switch 
                check={block} 
                color="primary"
                rightLabel="Block" 
                className="pl-10 my-10"
                onChange={() => setBlock(!block)}/>
            <Switch 
                check={lifted} 
                color="primary"
                rightLabel="Lifted" 
                className="pl-10 my-10"
                onChange={() => setLifted(!lifted)}/>
            <br/>
            <Switch 
                check={icon} 
                color="primary"
                rightLabel="With icon" 
                className="pl-10 my-10"
                onChange={() => setIcon(!icon)}/>
            <Switch 
                check={iconLeft} 
                color="primary"
                rightLabel="Left icon" 
                className="pl-10 my-10"
                onChange={() => setIconLeft(!iconLeft)}/>
            <Switch 
                check={iconAllotted} 
                color="primary"
                rightLabel="Allotted icon" 
                className="pl-10 my-10"
                onChange={() => setIconAllotted(!iconAllotted)}/>
            <br/>
            <Switch 
                check={iconOnly} 
                color="primary"
                rightLabel="Icon button" 
                className="pl-10 my-10"
                onChange={() => setIconOnly(!iconOnly)}/>
            <br/>
            <RadioGroup
                options={types} 
                value={type}
                name="type"
                className="pl-10 mt-10" 
                onChange={(value) => setType(value)}/>
            <br/>
            <div className="pa-10">
                <Button
                    color={color}
                    size={size}
                    icon={icon || iconOnly ? 'search' : ''}
                    iconAllotted={iconAllotted}
                    iconLeft={iconLeft}
                    outlined={outlined}
                    borderType={border}
                    loading={loading}
                    disabled={disabled}
                    block={block}
                    lifted={lifted}
                    dark={type === 'dark' ? true : false}
                    light={type === 'light' ? true : false}
                    uppercase={uppercase}
                    name={iconOnly ? null : 'Button'}
                    />
            </div>
        </>
    )
}`

const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const borders = ['default', 'rounded', 'smooth', 'tile'];
const types = ['dark', 'light', 'none'];

const ButtonPage = () => {
    const parentRef = useRef();
    const api = useRef();
    const [loading, setLoading] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [block, setBlock] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [icon, setIcon] = useState(false);
    const [iconLeft, setIconLeft] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [iconAllotted, setIconAllotted] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[0]);
    const [color, setColor] = useState(colors[0]);
    const [type, setType] = useState('');

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="rui-page" ref={parentRef}>
            <div className="row align-center space-between">
                <div className="rui-page-title">{'<Button/>'} Component</div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <Card outlined title="Usage">
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Button size"
                    color="primary"
                    className="pl-10"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Select
                    items={borders}
                    prefix={<Icon name="shape"/>}
                    width={200}
                    label="Button border type"
                    color="primary"
                    className="pl-10"
                    value={border}
                    onChange={v => setBorder(v)}/>
                <br/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Button color"
                    color="primary"
                    className="pl-10"
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
                    check={uppercase} 
                    color="primary"
                    rightLabel="Uppercase" 
                    className="pl-10 my-10"
                    onChange={() => setUppercase(!uppercase)}/>
                <br/>
                <Switch 
                    check={loading} 
                    color="primary"
                    rightLabel="Loading" 
                    className="pl-10 my-10"
                    onChange={() => setLoading(!loading)}/>
                <Switch 
                    check={disabled} 
                    color="primary"
                    rightLabel="Disabled" 
                    className="pl-10 my-10"
                    onChange={() => setDisabled(!disabled)}/>
                <br/>
                <Switch 
                    check={block} 
                    color="primary"
                    rightLabel="Block" 
                    className="pl-10 my-10"
                    onChange={() => setBlock(!block)}/>
                <Switch 
                    check={lifted} 
                    color="primary"
                    rightLabel="Lifted" 
                    className="pl-10 my-10"
                    onChange={() => setLifted(!lifted)}/>
                <br/>
                <Switch 
                    check={icon} 
                    color="primary"
                    rightLabel="With icon" 
                    className="pl-10 my-10"
                    onChange={() => setIcon(!icon)}/>
                <Switch 
                    check={iconLeft} 
                    color="primary"
                    rightLabel="Left icon" 
                    className="pl-10 my-10"
                    onChange={() => setIconLeft(!iconLeft)}/>
                <Switch 
                    check={iconAllotted} 
                    color="primary"
                    rightLabel="Allotted icon" 
                    className="pl-10 my-10"
                    onChange={() => setIconAllotted(!iconAllotted)}/>
                <br/>
                <Switch 
                    check={iconOnly} 
                    color="primary"
                    rightLabel="Icon button" 
                    className="pl-10 my-10"
                    onChange={() => setIconOnly(!iconOnly)}/>
                <br/>
                <RadioGroup
                    options={types} 
                    value={type}
                    name="type"
                    className="pl-10 mt-10" 
                    onChange={(value) => setType(value)}/>
                <br/>
                <div className="pa-10">
                    <Button
                        color={color}
                        size={size}
                        icon={icon || iconOnly ? 'search' : ''}
                        iconAllotted={iconAllotted}
                        iconLeft={iconLeft}
                        outlined={outlined}
                        borderType={border}
                        loading={loading}
                        disabled={disabled}
                        block={block}
                        lifted={lifted}
                        dark={type === 'dark' ? true : false}
                        light={type === 'light' ? true : false}
                        uppercase={uppercase}
                        name={iconOnly ? null : 'Button'}
                        />
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
            <BackTopBtn tooltip="Up" setRef={parentRef} dark size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default ButtonPage;