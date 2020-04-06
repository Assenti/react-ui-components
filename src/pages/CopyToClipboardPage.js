import React, { useState } from 'react';
import { Card, Collapse, InputField, Table, CopyToClipboard, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<CopyToClipboard/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <div className="row align-center">
                            <InputField
                                dark={theme} 
                                color="info" 
                                onChange={e => setText(e.target.value)} 
                                value={text} 
                                width={200}/>
                            <CopyToClipboard 
                                text={text}
                                dark={theme} 
                                className="ml-10"/>
                        </div>
                        <Collapse
                            dark={theme} 
                            icon="code" 
                            iconSize={18}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            contentStyles={{ padding: 0 }}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter> 
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Descriprion', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default CopyToClipboardPage;