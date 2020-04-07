import React, { useState } from 'react';
import { Card, Avatar, Table, Collapse, Select, Icon, RadioGroup, CopyToClipboard, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man.png';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'size', 
        description: 'Set avatar size',
        default: '40px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set avatar color',
        default: 'secondary', 
        type: 'string',
        value: 'secondary | primary | info | success | error'
    },
    { 
        property: 'borderType', 
        description: 'Set avatar border type',
        default: '', 
        type: 'string',
        value: 'rounded | tile'
    },
    { 
        property: 'img', 
        description: 'Set avatar image',
        default: '', 
        type: 'base64 | string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set avatar icon',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'dark', 
        description: 'Set avatar dark mode',
        default: '', 
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
const borders = ['default', 'rounded', 'tile'];
const types = ['image', 'icon'];
const colors = ['secondary', 'primary', 'info', 'success', 'error'];
const usage =
`// Usage example
import React from 'react';
import { Avatar } from '../components';
import manImage from '/path/to/man.png';

function Example() {
    return (
        <>
            <Avatar
                size={60}
                borderType="rounded" 
                img={manImage}/>
        </>
    )
}`

const AvatarPage = () => {
    const [type, setType] = useState(types[0]);
    const [border, setBorder] = useState(borders[1]);
    const [color, setColor] = useState(colors[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{`<Avatar/>`} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            dark={theme}
                            items={borders}
                            prefix={<Icon name="shape"/>}
                            width={200}
                            label="Avatar border type"
                            color="primary"
                            className="pl-10"
                            value={border}
                            onChange={v => setBorder(v)}/>
                        <br/>
                        <Select
                            items={colors}
                            dark={theme}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            label="Avatar color"
                            color="primary"
                            className="pl-10"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <RadioGroup
                            options={types} 
                            value={type}
                            name="type"
                            className="pl-10 mt-10" 
                            onChange={(value) => setType(value)}/>
                        <Divider/>
                        <div className="pa-10">
                            <Avatar
                                color={color}
                                size={60}
                                dark={theme}
                                borderType={border} 
                                img={type === 'image' ? manImage : null}
                                icon={type === 'icon' ? 'account' : null}/>
                        </div>
                        <Collapse
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>}  
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default AvatarPage;