import React, { useState, useRef } from 'react';
import { InputField, Icon, Card, Button, Table, Collapse, BackTopBtn, TextareaField, Select, Switch, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { InputField, Icon, Select, Switch, Button } from '@assenti/react-ui-components';
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'smooth', 'tile'];

function Example() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [second, setSecond] = useState('');
    const [search, setSearch] = useState('');
    const [amount, setAmount] = useState(0);
    const [size, setSize] = useState(sizes[0]);
    const [color, setColor] = useState(colors[0]);
    const [border, setBorder] = useState(borders[0]);
    const [required, setRequired] = useState(false);
    const [hint, setHint] = useState(false);
    const [label, setLabel] = useState(false);
    const [white, setWhite] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [uppercase, setUppercase] = useState(false);

    return (
        <div>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="InputField size"
                color="primary"
                className="ml-5"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="InputField color"
                color="primary"
                className="ml-5"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Select
                items={borders}
                prefix={<Icon name="shape"/>}
                width={200}
                label="InputField border type"
                color="primary"
                className="ml-5"
                value={border}
                onChange={v => setBorder(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={required}
                rightLabel="Required"
                className="my-10 ml-5"
                onChange={() => setRequired(!required)}/>
            <Switch 
                color="primary" 
                check={label}
                rightLabel="Label"
                className="my-10 ml-5"
                onChange={() => setLabel(!label)}/>
            <br/>
            <Switch 
                color="primary" 
                check={hint}
                rightLabel="Hint"
                className="my-10 ml-5"
                onChange={() => setHint(!hint)}/>
            <Switch 
                color="primary" 
                check={white}
                rightLabel="White background"
                className="my-10 ml-5"
                onChange={() => setWhite(!white)}/>
            <br/>
            <Switch 
                check={uppercase} 
                color="primary"
                rightLabel="Uppercase" 
                className="my-10 ml-5"
                onChange={() => setUppercase(!uppercase)}/>
            <Switch 
                check={lifted} 
                color="primary"
                rightLabel="Lifted" 
                className="my-10 ml-5"
                onChange={() => setLifted(!lifted)}/>
            <br/>
            <InputField
                label={label ? 'Login' : ''}
                placeholder="Input your login" 
                value={login}
                autoComplete
                hint={hint ? 'I am a hint' : null}
                borderType={border}
                name="login"
                color={color}
                lifted={lifted}
                uppercase={uppercase}
                whiteBackground={white}
                width={300}
                required={required}
                size={size}
                onChange={e => setLogin(e.target.value)}/>
            <InputField
                label={label ? 'Password' : ''}
                placeholder="Input your password" 
                value={password}
                borderType={border}
                type="password"
                hint={hint ? 'I am a hint' : null}
                color={color}
                required={required}
                width={300}
                lifted={lifted}
                uppercase={uppercase}
                size={size}
                whiteBackground={white}
                onChange={e => setPassword(e.target.value)}/>
            <InputField
                label={label ? 'Amount' : ''}
                placeholder="Input amount" 
                value={amount}
                type="number"
                min={0}
                required={required}
                lifted={lifted}
                uppercase={uppercase}
                borderType={border}
                hint={hint ? 'I am a hint' : null}
                color={color}
                prefix={<Icon name="tenge"/>}
                width={300}
                whiteBackground={white}
                size={size}
                onChange={e => setAmount(e.target.value)}/>
            <InputField
                label={label ? 'Login' : ''}
                placeholder="Input your login" 
                value={second}
                required={required}
                borderType={border}
                lifted={lifted}
                uppercase={uppercase}
                hint={hint ? 'I am a hint' : null}
                clearable
                whiteBackground={white}
                autoFocus
                onClear={() => setSecond('')} 
                prefix={<Icon name="account"/>}
                color={color}
                width={300}
                size={size}
                onChange={e => setSecond(e.target.value)}/>
            <InputField
                placeholder="Search..." 
                value={search}
                hint={hint ? 'I am a hint' : null}
                color={color}
                width={300}
                label={label ? 'Search' : ''}
                size={size}
                lifted={lifted}
                uppercase={uppercase}
                whiteBackground={white}
                required={required}
                borderType={border}
                prefix={<Icon name="search"/>}
                suffix={
                    <Button 
                        name="Search" 
                        color="primary"
                        size={size} 
                        onClick={() => console.log(search)}/>}
                onEnter={() => console.log(search)}
                onChange={e => setSearch(e.target.value)}/>
        </div>
    )
}`

const textareaUsage =
`// Usage examples
import React, { useState } from 'react';
import { TextareaField, Icon } from '@assenti/react-ui-components';

function Example() {
    const [text, setText] = useState('');

    return (
        <div>
            <TextareaField
                prefix={<Icon name="edit" />}
                label="Textarea field"
                placeholder="Textarea field" 
                value={text}
                maxRows={20}
                color="primary"
                width={300}
                onChange={e => setText(e.target.value)}/>
            <TextareaField
                label="Textarea field"
                placeholder="Textarea field" 
                value={text}
                maxRows={20}
                color="info"
                borderType="tile"
                rows={4}
                width={300}
                onChange={e => setText(e.target.value)}/>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'onChange', 
        description: 'Handle input value change (return input change event object)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onKeyUp', 
        description: 'Invokes on InputField any key pressed (return key change event object)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onEnter', 
        description: 'Invokes on InputField "Enter" key pressed', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'value', 
        description: 'Input value', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'autoComplete', 
        description: 'Enable input autocomplete', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'name', 
        description: 'Set name prop for get all inputted values for autocomplete', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'clearable', 
        description: 'Allow clear icon on value inputted', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClear', 
        description: 'Invokes on clear icon click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Lift up the input field', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'autoFocus', 
        description: 'Set input focus on component mounted', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of input field from list', 
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'disabled',
        description: 'Make input field disabled', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'borderType', 
        description: 'Set borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set input field size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'prefix',
        description: 'Set prefix', 
        default: '', 
        type: 'string | number | React.Node',
        value: ''
    },
    { 
        property: 'suffix',
        description: 'Set suffix', 
        default: '', 
        type: 'string | number | React.Node',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set InputField width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'type',
        description: 'Set input type', 
        default: 'text', 
        type: 'string',
        value: 'text | password | number | email'
    },
    { 
        property: 'min',
        description: 'Set min number (has effect with type="number")', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'max',
        description: 'Set max number (has effect with type="number")', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'minLength',
        description: 'Set min length for text (has effect with type="text")', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'maxLength',
        description: 'Set max length for text (has effect with type="text")', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'required',
        description: 'Set input required', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'readOnly',
        description: 'Set input readOnly', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'whiteBackground',
        description: 'Set input background color to white', 
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
const itemsTextarea = [
    { 
        property: 'onChange', 
        description: 'Handle input value change', 
        default: '', 
        type: 'function',
        value: 'return a input change event object'
    },
    { 
        property: 'value', 
        description: 'Input value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'rows',
        description: 'Set textarea rows count', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: 'maxRows',
        description: 'Set maximum textarea rows', 
        default: '10', 
        type: 'number',
        value: ''
    },
    { 
        property: 'clearable', 
        description: 'Allow clear icon on value inputted', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClear', 
        description: 'Invokes on clear icon click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Lift up the input field', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'autoFocus', 
        description: 'Set input focus on component mounted', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of input field from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'disabled',
        description: 'Make input field disabled', 
        default: 'false',
        type: 'boolean', 
        value: 'true | false'
    },
    { 
        property: 'borderType', 
        description: 'Set borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'prefix',
        description: 'Set prefix', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'suffix',
        description: 'Set suffix', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set InputField width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'required',
        description: 'Set input required', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'readOnly',
        description: 'Set input readOnly', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'whiteBackground',
        description: 'Set input background color to white', 
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
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'smooth', 'tile'];

const InputsPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [second, setSecond] = useState('');
    const [search, setSearch] = useState('');
    const [amount, setAmount] = useState(0);
    const [text, setText] = useState('');
    const [size, setSize] = useState(sizes[0]);
    const [color, setColor] = useState(colors[0]);
    const [border, setBorder] = useState(borders[0]);
    const [required, setRequired] = useState(false);
    const [hint, setHint] = useState(false);
    const [label, setLabel] = useState(false);
    const [white, setWhite] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const api = useRef();
    const api2 = useRef();
    const parent = useRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const goToApi2 = () => {
        if (api2.current) api2.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">InputField, TextareaField Components</div>
                <div className="row align-center">
                    <div onClick={() => goToApi()} className="rui-link fz-13 fw-bold mr-10">InputField API</div>
                    <div onClick={() => goToApi2()} className="rui-link fz-13 fw-bold mr-10">TextareaField API</div>
                </div>
            </div>
            <Card outlined color="gray" title="Input types">
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="InputField size"
                    color="primary"
                    className="ml-5"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="InputField color"
                    color="primary"
                    className="ml-5"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={borders}
                    prefix={<Icon name="shape"/>}
                    width={200}
                    label="InputField border type"
                    color="primary"
                    className="ml-5"
                    value={border}
                    onChange={v => setBorder(v)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={required}
                    rightLabel="Required"
                    className="my-10 ml-5"
                    onChange={() => setRequired(!required)}/>
                <Switch 
                    color="primary" 
                    check={label}
                    rightLabel="Label"
                    className="my-10 ml-5"
                    onChange={() => setLabel(!label)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={hint}
                    rightLabel="Hint"
                    className="my-10 ml-5"
                    onChange={() => setHint(!hint)}/>
                <Switch 
                    color="primary" 
                    check={white}
                    rightLabel="White background"
                    className="my-10 ml-5"
                    onChange={() => setWhite(!white)}/>
                <br/>
                <Switch 
                    check={uppercase} 
                    color="primary"
                    rightLabel="Uppercase" 
                    className="my-10 ml-5"
                    onChange={() => setUppercase(!uppercase)}/>
                <Switch 
                    check={lifted} 
                    color="primary"
                    rightLabel="Lifted" 
                    className="my-10 ml-5"
                    onChange={() => setLifted(!lifted)}/>
                <br/>
                <InputField
                    label={label ? 'Login' : ''}
                    placeholder="Input your login" 
                    value={login}
                    autoComplete
                    hint={hint ? 'I am a hint' : null}
                    borderType={border}
                    name="login"
                    color={color}
                    lifted={lifted}
                    uppercase={uppercase}
                    whiteBackground={white}
                    width={300}
                    required={required}
                    size={size}
                    onChange={e => setLogin(e.target.value)}/>
                <InputField
                    label={label ? 'Password' : ''}
                    placeholder="Input your password" 
                    value={password}
                    borderType={border}
                    type="password"
                    hint={hint ? 'I am a hint' : null}
                    color={color}
                    required={required}
                    width={300}
                    lifted={lifted}
                    uppercase={uppercase}
                    size={size}
                    whiteBackground={white}
                    onChange={e => setPassword(e.target.value)}/>
                <InputField
                    label={label ? 'Amount' : ''}
                    placeholder="Input amount" 
                    value={amount}
                    type="number"
                    min={0}
                    required={required}
                    lifted={lifted}
                    uppercase={uppercase}
                    borderType={border}
                    hint={hint ? 'I am a hint' : null}
                    color={color}
                    prefix={<Icon name="tenge"/>}
                    width={300}
                    whiteBackground={white}
                    size={size}
                    onChange={e => setAmount(e.target.value)}/>
                <InputField
                    label={label ? 'Login' : ''}
                    placeholder="Input your login" 
                    value={second}
                    required={required}
                    borderType={border}
                    lifted={lifted}
                    uppercase={uppercase}
                    hint={hint ? 'I am a hint' : null}
                    clearable
                    whiteBackground={white}
                    autoFocus
                    onClear={() => setSecond('')} 
                    prefix={<Icon name="account"/>}
                    color={color}
                    width={300}
                    size={size}
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    placeholder="Search..." 
                    value={search}
                    hint={hint ? 'I am a hint' : null}
                    color={color}
                    width={300}
                    label={label ? 'Search' : ''}
                    size={size}
                    lifted={lifted}
                    uppercase={uppercase}
                    whiteBackground={white}
                    required={required}
                    borderType={border}
                    prefix={<Icon name="search"/>}
                    suffix={
                        <Button 
                            name="Search" 
                            color="primary"
                            size={size} 
                            onClick={() => console.log(search)}/>}
                    onEnter={() => console.log(search)}
                    onChange={e => setSearch(e.target.value)}/>
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
            <br/>
            <Card outlined color="gray" title="TextareaField Usage">
                <TextareaField
                    prefix={<Icon name="edit" />}
                    label="Textarea field"
                    placeholder="Textarea field" 
                    value={text}
                    maxRows={20}
                    color="primary"
                    width={300}
                    onChange={e => setText(e.target.value)}/>
                <TextareaField
                    label="Textarea field"
                    placeholder="Textarea field" 
                    value={text}
                    maxRows={20}
                    color="info"
                    borderType="tile"
                    rows={4}
                    width={300}
                    onChange={e => setText(e.target.value)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={textareaUsage} className="mr-10"/>} 
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {textareaUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <h2 ref={api}>InputField API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
            <h2 ref={api2}>TextareaField API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={itemsTextarea}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default InputsPage;