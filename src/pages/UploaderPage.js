import React, { useState } from 'react';
import { Uploader, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Uploader } from '@assenti/react-ui-components';

function Example() {
    const [files, setFiles] = useState('');

    return (
        <>
            <Uploader
                placeholder="File upload"
                value={files}
                title="Сhoose a file(-s) please"
                color="primary"
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
        </>
    )
}`

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
        property: 'heigth',
        description: 'Set Uploader hrigth', 
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
        property: 'dropBox',
        description: 'Set drag and drop area view', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: '', 
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

const UploaderPage = () => {
    const [files, setFiles] = useState('');
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

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Uploader/>"
                    apiSearchable
                    apiDescItems={rows}
                    backTopBtn>
                    <Select
                        items={sizes}
                        dark={theme}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Size"
                        color="primary"
                        className="ml-5"
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
                        className="ml-5"
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
                        className="ml-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
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
                    <Divider/>
                    <br/>
                    <Uploader
                        placeholder="File upload"
                        label={label ? 'Upload your file(-s)' : null}
                        value={files}
                        dark={theme}
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
                    <br/>
                    <Uploader
                        placeholder="Drag & Drop file(-s)"
                        value={files}
                        dark={theme}
                        title="Сhoose a file(-s) please"
                        color={color}
                        disabled={disabled}
                        borderType={border}
                        multiple={multiple}
                        lifted={lifted}
                        onDelete={handleFileDelete}
                        dropBox
                        height={200}
                        width={300}
                        onChange={files => setFiles(files)}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default UploaderPage;