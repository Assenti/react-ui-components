import React, { useState } from 'react';
import { Icon, TextareaField, Select, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { TextareaField } from '@assenti/react-ui-components';

function Example() {
    const [text, setText] = useState('');

    return (
        <>
            <TextareaField
                value={text}
                maxRows={20}
                color="primary"
                rows={4}
                width={300}
                onChange={e => setText(e.target.value)}/>
        </>
    )
}`

const itemsTextarea = [
    { 
        property: 'onChange', 
        description: 'Handle textarea value change', 
        default: '', 
        type: 'function',
        value: 'return an input change event object'
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
        property: 'label', 
        description: 'Set label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'hint', 
        description: 'Set hint', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'hintColor', 
        description: 'Set hint color', 
        default: '', 
        type: 'string',
        value: 'success | error'
    },
    { 
        property: 'lifted', 
        description: 'Lift up the TextareaField', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'autoFocus', 
        description: 'Set focus on component mounted', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'disabled',
        description: 'Set disabled flag', 
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
        description: 'Set width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'required',
        description: 'Set required', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'readOnly',
        description: 'Set readOnly', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'whiteBackground',
        description: 'Set background color to white', 
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
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'smooth', 'tile'];

const TextareaPage = () => {
    const [text, setText] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [border, setBorder] = useState(borders[0]);
    const [required, setRequired] = useState(false);
    const [hint, setHint] = useState(false);
    const [label, setLabel] = useState(true);
    const [white, setWhite] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [prefix, setPrefix] = useState(false);
    const [placeholder, setPlaceholder] = useState(true);
    
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiSearchable
                    componentName="<TextareaField/>"
                    apiDescItems={itemsTextarea}>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        className="ml-5"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        dark={theme}
                        label="Border type"
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
                    <Switch 
                        check={prefix} 
                        color="primary"
                        rightLabel="Prefix" 
                        className="my-10 ml-5"
                        onChange={() => setPrefix(!prefix)}/>
                    <Switch 
                        check={placeholder} 
                        color="primary"
                        rightLabel="Placeholder" 
                        className="my-10 ml-5"
                        onChange={() => setPlaceholder(!placeholder)}/>
                    <Divider/>
                    <br/>
                    <TextareaField
                        prefix={prefix ? <Icon name="edit"/> : null}
                        label={label ? 'Textarea field' : null}
                        placeholder={placeholder ? 'Textarea field' : null} 
                        hint={hint ? 'I am a hint' : null}
                        value={text}
                        dark={theme}
                        lifted={lifted}
                        whiteBackground={white}
                        required={required}
                        maxRows={20}
                        borderType={border}
                        color={color}
                        rows={4}
                        width={300}
                        onChange={e => setText(e.target.value)}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TextareaPage;