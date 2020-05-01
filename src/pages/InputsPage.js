import React, { useState } from 'react';
import { InputField, Icon, Button, Select, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { InputField, Icon } from '@assenti/react-ui-components';

function Example() {
    const [login, setLogin] = useState('');

    return (
        <>
            <InputField
                label="Login"
                placeholder="Input your login" 
                value={login}
                autoComplete
                name="login"
                color="primary"
                width={300}
                onChange={e => setLogin(e.target.value)}/>
        </>
    )
}`

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
        property: 'onFocus', 
        description: 'Invokes on focus (return key change event object)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onBlur', 
        description: 'Invokes on blur (return key change event object)', 
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
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'object',
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
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'smooth', 'tile'];

const InputsPage = () => {
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
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<InputField/>"
                    apiDescItems={items}
                    apiSearchable
                    backTopBtn>
                    <Select
                        items={sizes}
                        dark={theme}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Size"
                        color="primary"
                        className="mb-5"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Color"
                        color="primary"
                        className="mb-5"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        className="mb-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={required}
                        rightLabel="Required"
                        className="ml-5"
                        onChange={() => setRequired(!required)}/>
                    <Switch 
                        color="primary" 
                        check={label}
                        rightLabel="Label"
                        className="ml-5"
                        onChange={() => setLabel(!label)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={hint}
                        rightLabel="Hint"
                        className="ml-5"
                        onChange={() => setHint(!hint)}/>
                    <Switch 
                        color="primary" 
                        check={white}
                        rightLabel="White background"
                        className="ml-5"
                        onChange={() => setWhite(!white)}/>
                    <br/>
                    <br/>
                    <Switch 
                        check={uppercase} 
                        color="primary"
                        rightLabel="Uppercase" 
                        className="ml-5"
                        onChange={() => setUppercase(!uppercase)}/>
                    <Switch 
                        check={lifted} 
                        color="primary"
                        rightLabel="Lifted" 
                        className="ml-5"
                        onChange={() => setLifted(!lifted)}/>
                    <Divider/>
                    <br/>
                    <InputField
                        label={label ? 'Login' : ''}
                        dark={theme}
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
                        style={{ width: 300 }}
                        required={required}
                        size={size}
                        onChange={e => setLogin(e.target.value)}/>
                    <br/>
                    <br/>
                    <InputField
                        label={label ? 'Password' : ''}
                        placeholder="Input your password" 
                        value={password}
                        dark={theme}
                        borderType={border}
                        type="password"
                        hint={hint ? 'I am a hint' : null}
                        color={color}
                        required={required}
                        style={{ width: 300 }}
                        lifted={lifted}
                        uppercase={uppercase}
                        size={size}
                        whiteBackground={white}
                        onChange={e => setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <InputField
                        label={label ? 'Amount' : ''}
                        placeholder="Input amount" 
                        value={amount}
                        type="number"
                        dark={theme}
                        min={0}
                        required={required}
                        lifted={lifted}
                        uppercase={uppercase}
                        borderType={border}
                        hint={hint ? 'I am a hint' : null}
                        color={color}
                        prefix={<Icon name="tenge"/>}
                        style={{ width: 300 }}
                        whiteBackground={white}
                        size={size}
                        onChange={e => setAmount(e.target.value)}/>
                    <br/>
                    <br/>
                    <InputField
                        label={label ? 'Login' : ''}
                        placeholder="Input your login" 
                        value={second}
                        required={required}
                        borderType={border}
                        lifted={lifted}
                        dark={theme}
                        uppercase={uppercase}
                        hint={hint ? 'I am a hint' : null}
                        clearable
                        whiteBackground={white}
                        autoFocus
                        onClear={() => setSecond('')} 
                        prefix={<Icon name="account"/>}
                        color={color}
                        style={{ width: 300 }}
                        size={size}
                        onChange={e => setSecond(e.target.value)}/>
                    <br/>
                    <br/>
                    <InputField
                        placeholder="Search..." 
                        value={search}
                        hint={hint ? 'I am a hint' : null}
                        color={color}
                        style={{ minWidth: 300 }}
                        label={label ? 'Search' : ''}
                        size={size}
                        lifted={lifted}
                        uppercase={uppercase}
                        dark={theme}
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
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default InputsPage;