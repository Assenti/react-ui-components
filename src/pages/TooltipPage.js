import React, { useState } from 'react';
import { Tooltip, Button, Card, Table, Collapse, CopyToClipboard, Select, Icon, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage = 
`// Usage examples
import React from 'react';
import { Tooltip } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Tooltip 
                tooltip="Tooltip"
                color="primary">
                <Button icon="search" color="info"/>
            </Tooltip>
        </>
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
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Tooltip/>'} Component</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Tooltip color"
                            color="primary"
                            className="my-10"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Divider/>
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
                                <Button icon="menu" dark={theme} light={!theme}/>
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
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage}
                                dark={theme} 
                                className="mr-10"/>} 
                            contentStyles={{ padding: 0 }}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter> 
                        </Collapse>
                    </Card>
                    <h2 id="tooltip-api">API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={keys}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default TooltipPage;