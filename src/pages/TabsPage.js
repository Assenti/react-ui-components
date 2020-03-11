import React, { useState } from 'react';
import { Tabs, Card, Switch, Select, Icon, Table, Collapse, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'tabs', 
        description: 'Tabs items', 
        default: '', 
        type: 'string[] | object[]',
        value: ''
    },
    {
        property: 'defaultTab',
        description: 'Set default active Tabs item (starts from 0)', 
        default: '0', 
        type: 'number',
        value: ''
    },
    { 
        property: 'tabTitleKey', 
        description: 'Set if Tabs items passed as array of object', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tabIconKey', 
        description: 'Set Tab item icon', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tabItems', 
        description: 'Tabs content items', 
        default: '', 
        type: 'any[]',
        value: ''
    },
    { 
        property: 'centered', 
        description: 'Set Tabs items position centered', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'activeHighlightFill', 
        description: 'Fill background active tab item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'position', 
        description: 'Set Tabs items position', 
        default: '', 
        type: 'string',
        value: 'left | bottom | right'
    },
    { 
        property: 'color', 
        description: 'Set Tabs items color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | dark'
    },
    { 
        property: 'size', 
        description: 'Set Tabs items size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'contentPadding', 
        description: 'Set Tabs content padding', 
        default: '15px', 
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
const colors = ['primary', 'info', 'success', 'error', 'dark'];
const sizes = ['default', 'medium', 'large'];
const positions = ['default', 'left', 'bottom', 'right'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Tabs, Switch, Select, Icon } from '@assenti/react-ui-components';
const colors = ['primary', 'info', 'success', 'error', 'dark'];
const sizes = ['default', 'medium', 'large'];
const positions = ['default', 'left', 'bottom', 'right'];

function Example() {
    const [position, setPosition] = useState(positions[0]);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [icon, setIcon] = useState(false);
    const [fill, setFill] = useState(false);
    const [centered, setCentered] = useState(false);
    const [stretch, setStretch] = useState(false);

    const TabItemOne = () => {
        return <div>Tab Content 1</div>
    }

    const TabItemTwo = () => {
        return <div>Tab Content 2</div>
    }

    const TabItemThree = () => {
        return <div>Tab Content 3</div>
    }

    return (
        <div>
            <div className="row column">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Tabs color"
                    color="primary"
                    className="my-5"
                    value={color}
                    onChange={v => setColor(v)}/>
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Tabs size"
                    color="primary"
                    className="my-5"
                    value={size}
                    onChange={v => setSize(v)}/>
                <Select
                    items={positions}
                    prefix={<Icon name="book-open"/>}
                    width={200}
                    label="Tabs position"
                    color="primary"
                    className="my-5"
                    value={position}
                    onChange={v => setPosition(v)}/>
            </div>
            <div className="row column">
                <Switch 
                    color="primary" 
                    check={icon}
                    rightLabel="Icon"
                    className="my-5" 
                    onChange={() => setIcon(!icon)}/>
                <Switch 
                    color="primary" 
                    check={fill}
                    rightLabel="Active highlight fill"
                    className="my-5" 
                    onChange={() => setFill(!fill)}/>
                <Switch 
                    color="primary" 
                    check={centered}
                    className="my-5" 
                    rightLabel="Tabs items centered"
                    onChange={() => setCentered(!centered)}/>
                <Switch 
                    color="primary" 
                    check={stretch}
                    rightLabel="Stretch Tabs items"
                    className="my-5" 
                    onChange={() => setStretch(!stretch)}/>
            </div>
            <br/>
            <Tabs 
                defaultTab={1}
                position={position}
                color={color}
                size={size}
                centered={centered}
                stretch={stretch}
                tabs={[
                    { name: 'Home', icon: 'home' }, 
                    { name: 'Account', icon: 'account' }, 
                    { name: 'Settings', icon: 'cog-outline' }
                ]}
                tabTitleKey="name"
                tabIconKey={icon ? 'icon' : ''}
                activeHighlightFill={fill}
                onChange={(activeKey) => console.log('activeKey: ' + activeKey)} 
                tabItems={[TabItemOne, TabItemTwo, TabItemThree]}/>
        </div>
    )
}`

const TabsPage = () => {
    const [position, setPosition] = useState(positions[0]);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [icon, setIcon] = useState(false);
    const [fill, setFill] = useState(false);
    const [centered, setCentered] = useState(false);
    const [stretch, setStretch] = useState(false);

    const TabItemOne = () => {
        return <div>Home Tab Content</div>
    }

    const TabItemTwo = () => {
        return <div>Account Tab Content</div>
    }

    const TabItemThree = () => {
        return <div>Settings Tab Content</div>
    }

    return (
        <div className="rui-page">
            <div className="row align-center">
                <div className="rui-page-title">{'<Tabs/>'} Component</div>
            </div>
            <Card outlined title="Usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Tabs color"
                    color="primary"
                    className="my-5"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Tabs size"
                    color="primary"
                    className="my-5"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Select
                    items={positions}
                    prefix={<Icon name="book-open"/>}
                    width={200}
                    label="Tabs position"
                    color="primary"
                    className="my-5"
                    value={position}
                    onChange={v => setPosition(v)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={icon}
                    rightLabel="Icon"
                    className="my-10" 
                    onChange={() => setIcon(!icon)}/>
                <Switch 
                    color="primary" 
                    check={fill}
                    rightLabel="Active highlight fill"
                    className="my-10" 
                    onChange={() => setFill(!fill)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={centered}
                    className="my-10" 
                    rightLabel="Tabs items centered"
                    onChange={() => setCentered(!centered)}/>
                <Switch 
                    color="primary" 
                    check={stretch}
                    rightLabel="Stretch Tabs items"
                    className="my-10" 
                    onChange={() => setStretch(!stretch)}/>
                <br/>
                <Tabs 
                    defaultTab={0}
                    position={position}
                    color={color}
                    size={size}
                    centered={centered}
                    stretch={stretch}
                    tabs={[
                        { name: 'Home', icon: 'home' }, 
                        { name: 'Account', icon: 'account' }, 
                        { name: 'Settings', icon: 'cog-outline' }
                    ]}
                    tabTitleKey="name"
                    tabIconKey={icon ? 'icon' : ''}
                    activeHighlightFill={fill}
                    onChange={(activeKey) => console.log('activeKey: ' + activeKey)} 
                    tabItems={[TabItemOne, TabItemTwo, TabItemThree]}/>
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
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default TabsPage;
