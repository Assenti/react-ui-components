import React, { useState, createRef } from 'react';
import { InputField, Icon, Card, Button, Table, Collapse, BackTopBtn, TextareaField } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const inputTypes = 
`// Usage examples
import React, { useState } from 'react';
import { InputField } from '@assenti/react-ui-components';

function Example() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');

    return (
        <div className="row wrap">
            <div className="col">
                <InputField
                    label="Standard input with clear button and hint"
                    placeholder="Input a text" 
                    value={first}
                    color="primary"
                    width="300px"
                    hint="Some hint"
                    onClear={() => setFirst('')} 
                    onChange={e => setFirst(e.target.value)}/>
                <InputField
                    label="Smooth input with prefix, clear button with lifted prop"
                    placeholder="Input a text" 
                    value={first}
                    smooth
                    lifted
                    color="primary"
                    prefix={<Icon name="search"/>}
                    width="300px"
                    onClear={() => setFirst('')} 
                    onChange={e => setFirst(e.target.value)}/>
                <InputField
                    label="Rounded input field with prefix, suffix and clear button"
                    placeholder="Defaul size input field" 
                    value={first}
                    rounded
                    clearable
                    autoFocus
                    onClear={() => setFirst('')} 
                    prefix={<Icon name="search"/>}
                    suffix={<Icon name="edit"/>}
                    color="info"
                    width="300px"
                    onChange={e => setFirst(e.target.value)}/>
                <InputField
                    label="Disabled input field"
                    placeholder="Defaul size rounded input field" 
                    value={first}
                    rounded
                    disabled
                    prefix={<Icon name="account"/>}
                    color="info"
                    width="300px"
                    onClear={() => setFirst('')} 
                    onChange={e => setFirst(e.target.value)}/>
            </div>
            <div className="col">
                <InputField
                    label="Standard input field with suffix button"
                    placeholder="Search..." 
                    value={second}
                    color="primary"
                    width="100%"
                    prefix={<Icon name="search"/>}
                    suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    label="Smooth input field with suffix button"
                    placeholder="Search..." 
                    value={second}
                    color="primary"
                    width="100%"
                    smooth
                    prefix={<Icon name="search"/>}
                    suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    label="Rounded input field with suffix button"
                    placeholder="Search..." 
                    value={second}
                    color="error"
                    width="100%"
                    rounded
                    prefix={<Icon name="search"/>}
                    suffix={<Button name="Search" color="error" onClick={() => {}}/>}
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
            </div>
        </div>
    )
}`

const inputSizes =
`// Usage examples
import React, { useState } from 'react';
import { InputField } from '@assenti/react-ui-components';

function Example() {
    const [second, setSecond] = useState('');

    return (
        <div className="row">
            <div className="col">
                <InputField
                    color="info"
                    placeholder="777 777 77 77" 
                    value={second} 
                    label="Default input field with label and prefix"
                    width="300px"
                    prefix={<Icon name="smartphone"/>}
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="medium"
                    color="info"
                    label="Medium input field with label and prefix"
                    prefix={<Icon name="smartphone"/>}
                    placeholder="777 777 77 77" 
                    value={second} 
                    width="300px"
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="large"
                    color="info"
                    label="Large input field with label and prefix"
                    prefix={<Icon name="smartphone"/>}
                    placeholder="777 777 77 77 " 
                    value={second} 
                    width="300px"
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
            </div>
            <div className="col">
                <InputField
                    color="info"
                    placeholder="777 777 77 77" 
                    value={second}
                    rounded 
                    label="Rounded default size input field with label and prefix"
                    width="300px"
                    prefix={<Icon name="smartphone"/>}
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="medium"
                    color="info"
                    rounded 
                    label="Rounded medium size input field with label and prefix"
                    prefix={<Icon name="smartphone"/>}
                    placeholder="777 777 77 77" 
                    value={second} 
                    width="300px"
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
                <InputField
                    size="large"
                    color="info"
                    rounded 
                    label="Rounded large size input field with label and prefix"
                    prefix={<Icon name="smartphone"/>}
                    placeholder="777 777 77 77 " 
                    value={second} 
                    width="300px"
                    onClear={() => setSecond('')} 
                    onChange={e => setSecond(e.target.value)}/>
            </div>
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
            onClear={() => setText('')} 
            onChange={e => setText(e.target.value)}/>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
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
        value: 'true | false'},
    { 
        property: 'rounded', 
        description: 'Make border radius rounded',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'smooth',
        description: 'Set input field borders more smooth', 
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
        value: 'true | false'},
    { 
        property: 'rounded', 
        description: 'Make border radius rounded',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'smooth',
        description: 'Set input field borders more smooth', 
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
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
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
            <Card outlined color="primary" title="Input types">
                <div className="row wrap">
                    <div className="col">
                        <InputField
                            label="Standard input with clear button and hint"
                            placeholder="Input a text" 
                            value={first}
                            color="primary"
                            width="300px"
                            hint="Some hint"
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                        <InputField
                            label="Smooth input with prefix, clear button with lifted prop"
                            placeholder="Input a text" 
                            value={first}
                            smooth
                            lifted
                            color="primary"
                            prefix={<Icon name="search"/>}
                            width="300px"
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                        <InputField
                            label="Rounded input field with prefix, suffix and clear button"
                            placeholder="Defaul size input field" 
                            value={first}
                            rounded
                            clearable
                            autoFocus
                            onClear={() => setFirst('')} 
                            prefix={<Icon name="search"/>}
                            suffix={<Icon name="edit"/>}
                            color="info"
                            width="300px"
                            onChange={e => setFirst(e.target.value)}/>
                        <InputField
                            label="Disabled input field"
                            placeholder="Defaul size rounded input field" 
                            value={first}
                            rounded
                            disabled
                            prefix={<Icon name="account"/>}
                            color="info"
                            width="300px"
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                    </div>
                    <div className="col">
                        <InputField
                            label="Standard input field with suffix button"
                            placeholder="Search..." 
                            value={third}
                            color="primary"
                            width="100%"
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                            onClear={() => setThird('')} 
                            onChange={e => setThird(e.target.value)}/>
                        <InputField
                            label="Smooth input field with suffix button"
                            placeholder="Search..." 
                            value={third}
                            color="primary"
                            width="100%"
                            smooth
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                            onClear={() => setThird('')} 
                            onChange={e => setThird(e.target.value)}/>
                        <InputField
                            label="Rounded input field with suffix button"
                            placeholder="Search..." 
                            value={third}
                            color="error"
                            width="100%"
                            rounded
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="error" onClick={() => {}}/>}
                            onClear={() => setThird('')} 
                            onChange={e => setThird(e.target.value)}/>
                    </div>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {inputTypes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Input sizes">
                <div className="row">
                    <div className="col">
                        <InputField
                            color="info"
                            placeholder="777 777 77 77" 
                            value={second} 
                            label="Default input field with label and prefix"
                            width="300px"
                            prefix={<Icon name="smartphone"/>}
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                        <InputField
                            size="medium"
                            color="info"
                            label="Medium input field with label and prefix"
                            prefix={<Icon name="smartphone"/>}
                            placeholder="777 777 77 77" 
                            value={second} 
                            width="300px"
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                        <InputField
                            size="large"
                            color="info"
                            label="Large input field with label and prefix"
                            prefix={<Icon name="smartphone"/>}
                            placeholder="777 777 77 77 " 
                            value={second} 
                            width="300px"
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                    </div>
                    <div className="col">
                        <InputField
                            color="info"
                            placeholder="777 777 77 77" 
                            value={second}
                            rounded 
                            label="Rounded default size input field with label and prefix"
                            width="300px"
                            prefix={<Icon name="smartphone"/>}
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                        <InputField
                            size="medium"
                            color="info"
                            rounded 
                            label="Rounded medium size input field with label and prefix"
                            prefix={<Icon name="smartphone"/>}
                            placeholder="777 777 77 77" 
                            value={second} 
                            width="300px"
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                        <InputField
                            size="large"
                            color="info"
                            rounded 
                            label="Rounded large size input field with label and prefix"
                            prefix={<Icon name="smartphone"/>}
                            placeholder="777 777 77 77 " 
                            value={second} 
                            width="300px"
                            onClear={() => setSecond('')} 
                            onChange={e => setSecond(e.target.value)}/>
                    </div>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {inputSizes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <Card outlined color="primary" title="TextareaField Usage">
                <TextareaField
                    prefix={<Icon name="edit" />}
                    label="Textarea field"
                    placeholder="Textarea field" 
                    value={text}
                    maxRows={20}
                    color="primary"
                    width={300}
                    clearable
                    onClear={() => setText('')} 
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