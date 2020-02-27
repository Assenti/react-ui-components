import React, { useState, createRef } from 'react';
import { Uploader, Card, Table, Collapse, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const uploaderUsage =
`// Usage examples
import React, { useState } from 'react';
import { InputField } from '@assenti/react-ui-components';

function Example() {
    const [files, setFiles] = useState('');

    return (
        <div>
            <span className="fz-8 text-dark">Rounded Uploader</span>
            <Uploader
                label="File upload"
                value={files}
                rounded
                title="Сhoose a file please"
                color="info"
                multiple
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
            <br/>
            <Uploader
                label="File upload"
                value={files}
                rounded
                title="Сhoose a file please"
                color="success"
                multiple
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
            <br/>
            <span className="fz-8 text-dark">Medium size Uploader</span>
            <Uploader
                label="File upload"
                value={files}
                title="Сhoose a file please"
                size="medium"
                color="info"
                multiple
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
            <br/>
            <span className="fz-8 text-dark">Disabled lifted Uploader</span>
            <Uploader
                label="File upload"
                value={files}
                title="Сhoose a file please"
                color="info"
                disabled
                lifted
                onDelete={handleFileDelete}
                width={300}
                onChange={files => setFiles(files)}/>
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const itemsUploader = [
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
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const UploaderPage = () => {
    const [files, setFiles] = useState('');
    const api = createRef();
    const parent = createRef();
    
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
            <Card outlined color="primary" title="Uploader">
                <span className="fz-8 text-dark">Rounded Uploader</span>
                <Uploader
                    label="File upload"
                    value={files}
                    rounded
                    title="Сhoose a file please"
                    color="info"
                    multiple
                    onDelete={handleFileDelete}
                    width={300}
                    onChange={files => setFiles(files)}/>
                <br/>
                <Uploader
                    label="File upload"
                    value={files}
                    rounded
                    title="Сhoose a file please"
                    color="success"
                    multiple
                    onDelete={handleFileDelete}
                    width={300}
                    onChange={files => setFiles(files)}/>
                <br/>
                <span className="fz-8 text-dark">Medium size Uploader</span>
                <Uploader
                    label="File upload"
                    value={files}
                    title="Сhoose a file please"
                    size="medium"
                    color="info"
                    multiple
                    onDelete={handleFileDelete}
                    width={300}
                    onChange={files => setFiles(files)}/>
                <br/>
                <span className="fz-8 text-dark">Disabled lifted Uploader</span>
                <Uploader
                    label="File upload"
                    value={files}
                    title="Сhoose a file please"
                    color="info"
                    disabled
                    lifted
                    onDelete={handleFileDelete}
                    width={300}
                    onChange={files => setFiles(files)}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {uploaderUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={itemsUploader}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default UploaderPage;
