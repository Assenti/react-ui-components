import React, { useState } from 'react';
import { Checkbox, Table, Collapse, Card } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'checked', 
        description: 'define the checkbox state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'handle checkbox change', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'disable', 
        description: 'Make checkbox disabled', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of checkbox from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'label', 
        description: 'Set checkbox label', 
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

    const usage =
`// Usage examples
import React, { useState } from 'react';
import { Checkbox } from '@assenti/rui-components';

function Example() {
    const [check, setCheck] = useState(true);

    return (
        <div className="row">
            <Checkbox
                className="mr-20" 
                checked={check} 
                onChange={() => setCheck(!check)}/>
            <Checkbox
                className="mr-20" 
                checked={check} 
                color="primary" 
                onChange={() => setCheck(!check)}/>
            <Checkbox 
                className="mr-20"
                checked={check} 
                color="info" 
                onChange={() => setCheck(!check)}/>
            <Checkbox 
                className="mr-20"
                checked={check} 
                color="error" 
                onChange={() => setCheck(!check)}/>
            <Checkbox 
                className="mr-20"
                checked={check} 
                disabled
                onChange={() => setCheck(!check)}/>
        </div>
    )
}
`

    const usageLabel =
`// Usage examples
import React, { useState } from 'react';
import { Checkbox } from '@assenti/rui-components';

function Example() {
    const [checkLabel, setCheckLabel] = useState(true);

    return (
        <div className="row">
            <Checkbox
                className="mr-20"
                label="Checkbox"
                color="primary" 
                checked={checkLabel} 
                onChange={() => setCheckLabel(!checkLabel)}/>
            <Checkbox
                label="Checkbox"
                color="info" 
                checked={checkLabel} 
                onChang e={() => setCheckLabel(!checkLabel)}/>
        </div>
    )
}
`

export const CheckboxPage = () => {
    const [check, setCheck] = useState(true);
    const [checkLabel, setCheckLabel] = useState(true);

    return (
        <div className="page">
            <div className="page-title">Checkbox Component</div>
            <Card outlined color="primary" title="Simple checkboxes">
                <div className="row">
                    <Checkbox
                        className="mr-20" 
                        checked={check} 
                        onChange={() => setCheck(!check)}/>
                    <Checkbox
                        className="mr-20" 
                        checked={check} 
                        color="primary" 
                        onChange={() => setCheck(!check)}/>
                    <Checkbox 
                        className="mr-20"
                        checked={check} 
                        color="info" 
                        onChange={() => setCheck(!check)}/>
                    <Checkbox 
                        className="mr-20"
                        checked={check} 
                        color="error" 
                        onChange={() => setCheck(!check)}/>
                    <Checkbox 
                        className="mr-20"
                        checked={check} 
                        disabled
                        onChange={() => setCheck(!check)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Checkboxes with label">
                <div className="row">
                    <Checkbox
                        className="mr-20"
                        label="Checkbox"
                        color="primary" 
                        checked={checkLabel} 
                        onChange={() => setCheckLabel(!checkLabel)}/>
                    <Checkbox
                        label="Checkbox"
                        color="info" 
                        checked={checkLabel} 
                        onChange={() => setCheckLabel(!checkLabel)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageLabel}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
