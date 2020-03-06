import React, { useState, createRef } from 'react';
import { Uploader, Card, Table, Collapse, BackTopBtn, CopyToClipboard, Select, Icon, Switch } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Uploader, Select, Icon, Switch } from '@assenti/react-ui-components';
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'smooth', 'tile'];

function Example() {
    const [files, setFiles] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [border, setBorder] = useState(borders[0]);
    const [size, setSize] = useState(sizes[0]);
    const [disabled, setDisabled] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [label, setLabel] = useState(false);

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
                check={disabled}
                rightLabel="Disabled"
                className="my-10 ml-5"
                onChange={() => setDisabled(!disabled)}/>
            <Switch 
                color="primary" 
                check={lifted}
                rightLabel="Lifted"
                className="my-10 ml-5"
                onChange={() => setLifted(!lifted)}/>
            <br/>
            <Switch 
                color="primary" 
                check={multiple}
                rightLabel="Multiple"
                className="my-10 ml-5"
                onChange={() => setMultiple(!multiple)}/>
            <Switch 
                color="primary" 
                check={label}
                rightLabel="Label"
                className="my-10 ml-5"
                onChange={() => setLabel(!label)}/>
            <br/>
            <Uploader
                placeholder="File upload"
                label={label ? 'Upload your file(-s)' : null}
                value={files}
                title="Сhoose a file(-s) please"
                color={color}
                disabled={disabled}
                borderType={border}
                multiple={multiple}
                lifted={lifted}
                size={size}
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'onChange', 
        description: 'Handle files values', 
        default: '', 
        type: 'function',
        value: 'Return array of files'
    },
    { 
        property: 'value', 
        description: 'State value that holds uploaded file(-s)', 
        default: '', 
        type: 'File[]',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Lift up the uploader', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'disabled',
        description: 'Make uploader disabled', 
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
        property: 'size', 
        description: 'Set input field size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'multiple', 
        description: 'Allow choosing multiple files',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'accept', 
        description: 'Set accepted MIME types for files',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set Uploader width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'required',
        description: 'Set Uploader required', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'title',
        description: 'Set Uploader title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'label',
        description: 'Set Uploader label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholder',
        description: 'Set Uploader placeholder', 
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
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'smooth', 'tile'];

const UploaderPage = () => {
    const [files, setFiles] = useState('');
    const api = createRef();
    const parent = createRef();
    const [color, setColor] = useState(colors[0]);
    const [border, setBorder] = useState(borders[0]);
    const [size, setSize] = useState(sizes[0]);
    const [disabled, setDisabled] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [label, setLabel] = useState(false);

    const handleFileDelete = (name) => {
        setFiles(files => files.filter(item => item.name !== name))
    }

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Uploader Components</div>
                <div onClick={() => goToApi()} className="rui-link fz-13 fw-bold mr-10">API</div>
            </div>
            <Card outlined title="Uploader">
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
                    check={disabled}
                    rightLabel="Disabled"
                    className="my-10 ml-5"
                    onChange={() => setDisabled(!disabled)}/>
                <Switch 
                    color="primary" 
                    check={lifted}
                    rightLabel="Lifted"
                    className="my-10 ml-5"
                    onChange={() => setLifted(!lifted)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={multiple}
                    rightLabel="Multiple"
                    className="my-10 ml-5"
                    onChange={() => setMultiple(!multiple)}/>
                <Switch 
                    color="primary" 
                    check={label}
                    rightLabel="Label"
                    className="my-10 ml-5"
                    onChange={() => setLabel(!label)}/>
                <br/>
                <Uploader
                    placeholder="File upload"
                    label={label ? 'Upload your file(-s)' : null}
                    value={files}
                    title="Сhoose a file(-s) please"
                    color={color}
                    disabled={disabled}
                    borderType={border}
                    multiple={multiple}
                    lifted={lifted}
                    size={size}
                    onDelete={handleFileDelete}
                    width={300}
                    onChange={files => setFiles(files)}/>
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
            <BackTopBtn setRef={parent} dark size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default UploaderPage;