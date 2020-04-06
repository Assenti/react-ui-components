import React, { useState } from 'react';
import { Breadcrumbs, Card, Select, Icon, Switch, Table, Collapse, CopyToClipboard, ThemeContext, themes, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'crumbs', 
        description: 'Pass items', 
        default: '', 
        type: 'array',
        value: 'return a button click event object'
    },
    { 
        property: 'itemKey', 
        description: 'Set item key if you pass array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'urlKey', 
        description: 'Set url key if you pass array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set icon key if you pass array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'isActive', 
        description: 'Set active crumb (return item and index)', 
        default: '', 
        type: 'function',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'Invokes on crumb click (return item and index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set color', 
        default: 'info', 
        type: 'string',
        value: 'primary | info | success | error | dark | secondary'
    },
    { 
        property: 'size', 
        description: 'Set breadcrumbs size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'position', 
        description: 'Set breadcrumbs position',
        default: 'left', 
        type: 'string',
        value: 'center | right'
    },
    { 
        property: 'delimiter', 
        description: 'Set your custom delimiter',
        default: '/', 
        type: 'any',
        value: ''
    },
    { 
        property: 'dark', 
        description: 'Set dark mode',
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

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Breadcrumbs } from '@assenti/react-ui-components';
const crumbs = [
    { item: 'Home', url: '#', icon: 'home' },
    { item: 'Section', url: '#', icon: 'credit-card' },
    { item: 'Module', url: '#', icon: 'help-circle-outline'}
]

function Example() {
    const [active, setActive] = useState(0);

    return (
        <>
            <Breadcrumbs
                itemKey="item"
                urlKey="url"
                icon="icon"
                onChange={(item, index) => setActive(index)}
                isActive={(item, index) => index === active} 
                crumbs={crumbs}/>
        </>
    )
}`

const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error', 'dark', 'secondary'];
const positions = ['default', 'center', 'right'];
const crumbs = [
    { item: 'Home', url: '#', icon: 'home' },
    { item: 'Section', url: '#', icon: 'credit-card' },
    { item: 'Module', url: '#', icon: 'help-circle-outline'}
]

const BreadcrumbsPage = () => {
    const [size, setSize] = useState(sizes[0]);
    const [color, setColor] = useState(colors[0]);
    const [active, setActive] = useState(0);
    const [position, setPosition] = useState(positions[0]);
    const [icon, setIcon] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Breadcrumbs/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={sizes}
                            dark={theme}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            label="Breadcrumbs size"
                            color="primary"
                            className="my-5"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <br/>
                        <Select
                            items={colors}
                            dark={theme}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            label="Breadcrumbs color"
                            color="primary"
                            className="my-5"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Select
                            items={positions}
                            prefix={<Icon name="chart-ppf"/>}
                            width={200}
                            dark={theme}
                            label="Breadcrumbs position"
                            color="primary"
                            className="my-5"
                            value={position}
                            onChange={v => setPosition(v)}/>
                        <br/>
                        <Switch 
                            check={icon} 
                            color="primary"
                            rightLabel="Icon" 
                            className="my-10"
                            onChange={() => setIcon(!icon)}/>
                        <Divider className="my-20"/>
                        <div style={{ minHeight: 300 }}>
                            <div className="pa-10">
                                <Breadcrumbs
                                    size={size}
                                    dark={theme}
                                    color={color}
                                    position={position}
                                    itemKey="item"
                                    urlKey="url"
                                    icon={icon ? 'icon' : null}
                                    onChange={(item, index) => setActive(index)}
                                    isActive={(item, index) => index === active} 
                                    crumbs={crumbs}/>
                            </div>
                            <h1 className="pa-10">{crumbs[active].item}</h1>
                        </div>
                        <Collapse 
                            icon="code"
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            iconSize={18} 
                            dark={theme}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" 
                            style={theme ? tomorrow : coy}>
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
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default BreadcrumbsPage;