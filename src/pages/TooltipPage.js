import React, { useState } from 'react';
import { Tooltip, Button, Card, Table, Collapse, CopyToClipboard, Select, Icon } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Tooltip, Button, Select, Icon } from '@assenti/react-ui-components';
const colors = ['default', 'primary', 'info', 'success', 'error'];

function Example() {
    const [color, setColor] = useState(colors[0]);

    return (
        <div>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Tooltip color"
                color="primary"
                className="my-10"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <div className="row align-center py-20">
                <Tooltip 
                    tooltip="Top position"
                    color={color} 
                    className="mr-20">
                    <Button icon="search" color="info"/>
                </Tooltip>
                <Tooltip 
                    tooltip="Bottom position" 
                    position="bottom"
                    color={color}  
                    className="mr-20">
                    <Button color="info" name="Button" onAction={() =>{}}/>
                </Tooltip>
                <Tooltip 
                    tooltip="Left position"
                    color={color}  
                    position="left" 
                    className="mr-20">
                    <Button icon="menu" light/>
                </Tooltip>
                <Tooltip 
                    tooltip="Right position"
                    color={color}  
                    position="right">
                    <Button icon="rocket" color="error"/>
                </Tooltip>
            </div>
            <br/>
        </div>
    )
}`
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
        value: 'bottom | right | left'
    },
    { 
        property: 'color', 
        description: 'Set tooltip color', 
        default: 'transparent black', 
        type: 'string',
        value: 'primary | info | error | success'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['default', 'primary', 'info', 'success', 'error'];

const TooltipPage = () => {
    const [color, setColor] = useState(colors[0]);

    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="rui-page-title">{'<Tooltip/>'} Component</div>
            </div>
            <Card outlined title="Usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Tooltip color"
                    color="primary"
                    className="my-10"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <div className="row align-center py-20">
                    <Tooltip 
                        tooltip="Top position"
                        color={color} 
                        className="mr-20">
                        <Button icon="search" color="info"/>
                    </Tooltip>
                    <Tooltip 
                        tooltip="Bottom position" 
                        position="bottom"
                        color={color}  
                        className="mr-20">
                        <Button color="info" name="Button" onAction={() =>{}}/>
                    </Tooltip>
                    <Tooltip 
                        tooltip="Left position"
                        color={color}  
                        position="left" 
                        className="mr-20">
                        <Button icon="menu" light/>
                    </Tooltip>
                    <Tooltip 
                        tooltip="Right position"
                        color={color}  
                        position="right">
                        <Button icon="rocket" color="error"/>
                    </Tooltip>
                </div>
                <br/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
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
export default TooltipPage;