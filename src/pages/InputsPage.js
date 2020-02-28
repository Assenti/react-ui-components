import React, { useState, createRef } from 'react';
import { InputField, Icon, Card, Button, Table, Collapse, BackTopBtn, TextareaField } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const inputTypes = 
`// Usage examples
import React, { useState } from 'react';
import { InputField, Icon } from '@assenti/react-ui-components';

function Example() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');
    const [second, setSecond] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <InputField
                label="Login"
                placeholder="Input your login" 
                value={login}
                autoComplete
                hint="InputField with tile borderType"
                borderType="tile"
                name="login"
                color="primary"
                width={300}
                required
                onChange={e => setLogin(e.target.value)}/>
            <InputField
                label="Password"
                placeholder="Input your password" 
                value={password}
                type="password"
                hint="InputField with default borderType"
                color="info"
                width={300}
                onChange={e => setPassword(e.target.value)}/>
            <InputField
                label="Amount"
                placeholder="Input amount" 
                value={amount}
                type="number"
                min={0}
                borderType="smooth"
                hint="InputField with smooth borderType"
                color="primary"
                prefix={<Icon name="tenge"/>}
                width={300}
                onChange={e => setAmount(e.target.value)}/>
            <InputField
                label="Login"
                placeholder="Input your login" 
                value={first}
                borderType="rounded"
                hint="InputField with rounded borderType"
                clearable
                autoFocus
                onClear={() => setFirst('')} 
                prefix={<Icon name="account"/>}
                color="info"
                width={300}
                onChange={e => setFirst(e.target.value)}/>
            <InputField
                placeholder="Search..." 
                value={search}
                hint="Let's find something interesting..."
                color="primary"
                width={300}
                prefix={<Icon name="search"/>}
                suffix={<Button name="Search" color="primary" onClick={() => console.log(search)}/>}
                onEnter={() => console.log(search)}
                onChange={e => setSearch(e.target.value)}/>
        </div>
    )
}`

const inputSizes =
`// Usage examples
import React, { useState } from 'react';
import { InputField, Icon } from '@assenti/react-ui-components';

function Example() {
    const [second, setSecond] = useState('');

    return (
        <div className="row">
            <InputField
                color="info"
                placeholder="John Doe" 
                value={second} 
                width={300}
                prefix={<Icon name="account"/>}
                onChange={e => setSecond(e.target.value)}/>
            <InputField
                size="medium"
                color="info"
                prefix={<Icon name="account"/>}
                placeholder="John Doe" 
                value={second} 
                width={300}
                onChange={e => setSecond(e.target.value)}/>
            <InputField
                size="large"
                color="info"
                prefix={<Icon name="account"/>}
                placeholder="John Doe " 
                value={second} 
                width={300}
                onChange={e => setSecond(e.target.value)}/>
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
        type: 'string',
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
        property: 'type',
        description: 'Set input type', 
        default: 'text', 
        type: 'string',
        value: ''
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

const InputsPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [second, setSecond] = useState('');
    const [search, setSearch] = useState('');
    const [amount, setAmount] = useState(0);
    const [text, setText] = useState('');
    const api = createRef();
    const parent = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">InputField, TextareaField Components</div>
                <div onClick={() => goToApi()} className="rui-link fz-13 fw-bold mr-10">API</div>
            </div>
            <Card outlined color="gray" title="Input types">
                <InputField
                    label="Login"
                    placeholder="Input your login" 
                    value={login}
                    autoComplete
                    hint="InputField with tile borderType"
                    borderType="tile"
                    name="login"
                    color="primary"
                    width={300}
                    required
                    onChange={e => setLogin(e.target.value)}/>
                <InputField
                    label="Password"
                    placeholder="Input your password" 
                    value={password}
                    type="password"
                    hint="InputField with default borderType"
                    color="info"
                    width={300}
                    onChange={e => setPassword(e.target.value)}/>
                <InputField
                    label="Amount"
                    placeholder="Input amount" 
                    value={amount}
                    type="number"
                    min={0}
                    borderType="smooth"
                    hint="InputField with smooth borderType"
                    color="primary"
                    prefix={<Icon name="tenge"/>}
                    width={300}
                    onChange={e => setAmount(e.target.value)}/>
                <InputField
                    label="Login"
                    placeholder="Input your login" 
                    value={second}
                    borderType="rounded"
                    hint="InputField with rounded borderType"
                    clearable
                    autoFocus
                    onClear={() => setSecond('')} 
                    prefix={<Icon name="account"/>}
                    color="info"
                    width={300}
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    placeholder="Search..." 
                    value={search}
                    hint="Let's find something interesting..."
                    color="primary"
                    width={300}
                    prefix={<Icon name="search"/>}
                    suffix={<Button name="Search" color="primary" onClick={() => console.log(search)}/>}
                    onEnter={() => console.log(search)}
                    onChange={e => setSearch(e.target.value)}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {inputTypes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="gray" title="Input sizes">
                <InputField
                    color="info"
                    placeholder="John Doe" 
                    value={second} 
                    width={300}
                    prefix={<Icon name="account"/>}
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="medium"
                    color="info"
                    prefix={<Icon name="account"/>}
                    placeholder="John Doe" 
                    value={second} 
                    width={300}
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="large"
                    color="info"
                    prefix={<Icon name="account"/>}
                    placeholder="John Doe " 
                    value={second} 
                    width={300}
                    onChange={e => setSecond(e.target.value)}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {inputSizes}
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
                <Collapse icon="code" iconSize={18} tooltip="Code">
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
            <h2>TextareaField API</h2>
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