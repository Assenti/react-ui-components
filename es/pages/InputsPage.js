import React, { useState } from 'react';
import { InputField, TextareaField, Uploader } from '../components/Input';
import { Icon } from '../components/Icon';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Table } from '../components/Table';

export const InputsPage = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [files, setFiles] = useState('');

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
            property: 'lifted', 
            description: 'Lift up the input field', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color', 
            description: 'Set color of input field from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error | black'
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
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

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

    const handleFileDelete = (name) => {
        setFiles(files => files.filter(item => item.name !== name))
    }

    return (
        <div className="page">
            <div className="page-title">Inputs</div>
            <h3>Input types</h3>
            <Card>
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
                            prefix={<Icon name="search"/>}
                            suffix={<Icon name="edit"/>}
                            color="info"
                            width="300px"
                            onClear={() => setFirst('')} 
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
                            value={first}
                            color="primary"
                            width="100%"
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                        <InputField
                            label="Smooth input field with suffix button"
                            placeholder="Search..." 
                            value={first}
                            color="primary"
                            width="100%"
                            smooth
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="primary" onClick={() => {}}/>}
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                        <InputField
                            label="Rounded input field with suffix button"
                            placeholder="Search..." 
                            value={first}
                            color="error"
                            width="100%"
                            rounded
                            prefix={<Icon name="search"/>}
                            suffix={<Button name="Search" color="error" onClick={() => {}}/>}
                            onClear={() => setFirst('')} 
                            onChange={e => setFirst(e.target.value)}/>
                    </div>
                </div>
            </Card>
            <h3>Input sizes</h3>
            <Card>
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
            </Card>
            <h3>Uploader</h3>
            <Card>
                <span>Rounded Uploader</span>
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
                <span>Medium size Uploader</span>
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
                <span>Disabled lifted Uploader</span>
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
            </Card>
            {/* <h3>Textareas</h3>
            <Card>
                <TextareaField
                    label="Textarea field"
                    placeholder="Textarea field" 
                    value={first}
                    width="300px"
                    onClear={() => setFirst('')} 
                    onChange={e => setFirst(e.target.value)}/>

                <TextareaField
                    rows={4}
                    color="error"
                    width="300px"
                    label="Textarea field"
                    placeholder="Textarea field" 
                    value={first}
                    onClear={() => setFirst('')} 
                    onChange={e => setFirst(e.target.value)}/>
            </Card> */}
            <h2>InputField API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
            <h2>Uploader API</h2>
            <Table
                bordered
                headers={keys}
                items={itemsUploader}
                index={true}
                itemTitles={keys}/>
            
        </div>
    )
}
