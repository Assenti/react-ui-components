import React, { useState } from 'react';
import { Button, Preloader, Table, Collapse, Card } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'visible', 
        description: 'Preloader visibile state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'preloader', 
        description: 'Pass your own custom preloader element', 
        default: 'Moving ellipsis', 
        type: 'any',
        value: ''
    },
    { 
        property: 'backgroundColor', 
        description: 'Set preloader background color', 
        default: 'transparent', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set preloader default ellipsis color', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Preloader, Button } from '@assenti/rui-components';

function Example() {
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <div>
            <div className="py-10">
                <Button name="Activate" color="info" onClick={handleClick}/>
            </div>
            <Preloader visible={loading}/>
        </div>
    )
}`

export const PreloaderPage = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <div className="rui-page">
            <div className="rui-page-title">Preloader Component</div>
            <Card outlined color="primary" title="Preloader usage">
                <p>Launch full page preloader and make all actions on screen disabled</p>
                <div className="py-10">
                    <Button name="Activate" color="info" onClick={handleClick}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <Preloader visible={loading}/>
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
