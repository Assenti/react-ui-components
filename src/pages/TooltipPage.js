import React from 'react';
import { Tooltip, Button, Card, Table, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

    const usage = 
`// Usage examples
import React from 'react';
import { Tooltip, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <div className="row align-center">
            <Tooltip tooltip="Search" className="mr-10">
                <Button icon="search" color="info"/>
            </Tooltip>
            <Tooltip tooltip="Button">
                <Button color="info" name="Button" onAction={() =>{}}/>
            </Tooltip>
        </div>
    )
}
`
const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'tooltip',
        description: 'Set tooltip text', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set tooltip position', 
        default: 'top', 
        type: 'string',
        value: 'top | bottom | right | left'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

export const TooltipPage = () => {
    return (
        <div className="page">
            <div className="row align-center space-between">
                <div className="page-title">Tooltip Component</div>
            </div>
            <Card outlined color="primary" title="Tooltips">
                <div className="row align-center py-20">
                    <Tooltip tooltip="Top position" className="mr-20">
                        <Button icon="search" color="info"/>
                    </Tooltip>
                    <Tooltip tooltip="Bottom position" position="bottom" className="mr-20">
                        <Button color="info" name="Button" onAction={() =>{}}/>
                    </Tooltip>
                    <Tooltip tooltip="Left position" position="left" className="mr-20">
                        <Button icon="menu" light/>
                    </Tooltip>
                    <Tooltip tooltip="Right position" position="right">
                        <Button icon="rocket" color="error"/>
                    </Tooltip>
                </div>
                <br/>
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
            <h2 id="tooltip-api">API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
