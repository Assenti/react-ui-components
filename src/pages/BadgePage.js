import React, { useState } from 'react';
import { Badge, Card, Table, Icon, Button, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'value', 
        description: 'Set badge value', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set badge color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'rounded', 
        description: 'Set rounded badge borders', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'parent', 
        description: 'Parent component for badge', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'visible', 
        description: 'Badge visible state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage examples
import React from 'react';
import { Badge, Button } from '@assenti/rui-components';

function Example() {
    const [badge, setBadge] = useState(true);

    return (
        <div className="row align-center">
            <Badge 
                color="info" 
                value={100} 
                className="mr-20"
                parent={<Icon size={24} name="account"/>}/>
            <Badge 
                color="error" 
                value={10} 
                rounded
                className="mr-20"
                parent={<Icon size={24} name="smartphone"/>}/>
            <Badge 
                color="error" 
                value={10} 
                rounded
                visible={badge}
                className="mr-20"
                parent={<Icon size={24} name="smartphone"/>}/>
            <Button name="Toggle badge" color="info" onClick={() => setBadge(!badge)}/>
        </div>
    )
}`

const BadgePage = () => {
    const [badge, setBadge] = useState(true);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Badge Component</div>
            <Card>
                <div className="row align-center">
                    <Badge 
                        color="info" 
                        value={100} 
                        className="mr-20"
                        parent={<Icon size={24} name="account"/>}/>
                    <Badge 
                        color="error" 
                        value={10} 
                        rounded
                        className="mr-20"
                        parent={<Icon size={24} name="smartphone"/>}/>
                    <Badge 
                        color="error" 
                        value={10} 
                        rounded
                        visible={badge}
                        className="mr-20"
                        parent={<Icon size={24} name="smartphone"/>}/>
                    <Button name="Toggle badge" color="info" onClick={() => setBadge(!badge)}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
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

export default BadgePage;
