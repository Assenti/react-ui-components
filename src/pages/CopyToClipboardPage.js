import React, { useState } from 'react';
import { Card, Collapse, InputField, Table } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from '../components/copyToClipboard';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'text', 
        description: 'Set text that should be copied', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set custom icon from icons list', 
        default: 'content-copy', 
        type: 'string',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set icon size', 
        default: '16px', 
        type: 'number',
        value: ''
    }, 
    { 
        property: 'color', 
        description: 'Set icon color', 
        default: 'gray', 
        type: 'string',
        value: ''
    },
    { 
        property: 'defaultText', 
        description: 'Set tooltip default text', 
        default: 'Copy', 
        type: 'string',
        value: ''
    },
    { 
        property: 'copiedText', 
        description: 'Set tooltip copied text', 
        default: 'Copied to clipboard', 
        type: 'string',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    }
]

const usage = 
`// Usage examples
import React from 'react';
import { CopyToClipboard, InputField } from '@assenti/react-ui-components';
const text = 'Some text';

function Example() {
    return (
        <div className="row align-center">
            <InputField color="info" readOnly value={text} width={200}/>
            <CopyToClipboard text={text} className="ml-10"/>
        </div>
    )
}`


const CopyToClipboardPage = () => {
    const [text, setText] = useState('Some text');

    return (
        <div className="rui-page">
            <div className="rui-page-title">CopyToClipboard Component</div>
            <Card outlined title="Collapse Component usage">
                <div className="row align-center">
                    <InputField 
                        color="info" 
                        onChange={e => setText(e.target.value)} 
                        value={text} 
                        width={200}/>
                    <CopyToClipboard text={text} className="ml-10"/>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Descriprion', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default CopyToClipboardPage;
