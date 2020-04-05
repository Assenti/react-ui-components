import React, { useState } from 'react';
import { Card, Collapse, Table, CopyToClipboard, Select, Icon, Avatar, Divider } from '../components';
import manImage from '../img/man.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'color', 
        description: 'Set divider color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | secondary'
    },
    { 
        property: 'dark', 
        description: 'Set dark theme', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'vertical', 
        description: 'Set vertical divider', 
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
const colors = ['primary', 'info', 'success', 'error', 'secondary'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Divider, Select, Icon } from '@assenti/react-ui-components';
const colors = ['primary', 'info', 'success', 'error', 'secondary'];

function Example() {
    const [color, setColor] = useState(colors[0]);

    return (
        <>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Color"
                color="primary"
                value={color}
                className="mb-20"
                onChange={v => setColor(v)}/>
            <br/>
            <div className="row align-center">
                <Avatar img={manImage}/>
                <Divider vertical />
                <strong className="text-primary">John Doe</strong>
            </div>
            <Divider color={color}/>
            <p>Age: 33</p>
            <p>Birth date: 1987/1/1</p>
            <p>Address: 13, Friday str., NYC</p>
        </>
    )
}`

const DividerPage = () => {
    const [color, setColor] = useState(colors[4]);

    return (
        <div className="rui-page">
            <div className="rui-page-title">{'<Divider/>'} Component</div>
            <Card title="Usage" outlined>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Color"
                    color="primary"
                    value={color}
                    className="mb-20"
                    onChange={v => setColor(v)}/>
                <br/>
                <div className="row align-center">
                    <Avatar img={manImage}/>
                    <Divider vertical />
                    <strong className="text-primary">John Doe</strong>
                </div>
                <Divider color={color}/>
                <p>Age: 33</p>
                <p>Birth date: 1987/1/1</p>
                <p>Address: 13, Friday str., NYC</p>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default DividerPage;