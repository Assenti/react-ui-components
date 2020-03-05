import React, { useState } from 'react';
import { FloatingBtn, Card, Table, Collapse, Dialog, Select, Icon, Switch } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man.png';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'icon', 
        description: 'Set floating button icon',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set floating button color',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Invokes on button click (return click event object)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set floating button position',
        default: 'bottom-right', 
        type: 'string',
        value: 'top-left | top-right | bottom-left | bottom-right'
    },
    { 
        property: 'size', 
        description: 'Set button size',
        default: 'medium', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'color', 
        description: 'Set button color',
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'tooltip', 
        description: 'Set button tooltip',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tooltipPosition', 
        description: 'Set tooltip position',
        default: 'top', 
        type: 'string',
        value: 'top | bottom | right | left'
    },
    { 
        property: 'offsetX', 
        description: 'Set offset from right',
        default: '5px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'offsetY', 
        description: 'Set offset from bottom',
        default: '5px', 
        type: 'number | string',
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
        property: 'light',
        description: 'Set light mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage example
import React, { useState } from 'react';
import { FloatingBtn, Card, Dialog, Select, Icon, Switch } from '../components';
const colors = ['primary', 'info', 'success', 'error', 'black', 'secondary'];
const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

function Example() {
    const [dialog, setDialog] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [position, setPosition] = useState(positions[3]);

    return (
        <div>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Color theme"
                color="primary"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Select
                items={positions}
                prefix={<Icon name="book-open"/>}
                width={200}
                label="Position"
                color="primary"
                value={position}
                onChange={v => setPosition(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={tooltip}
                rightLabel="Tooltip"
                className="my-10"
                onChange={() => setTooltip(!tooltip)}/>
            <br/>
            <Card 
                className="relative"
                width={200} 
                img={manImage}
                footer={<h4 className="text-center">John Doe</h4>}>
                <FloatingBtn 
                    icon="plus"
                    size="large"
                    tooltip={tooltip ? 'Add Friend' : null}
                    color={color}
                    position={position} 
                    onClick={() => setDialog(true)}/>
            </Card>
            <Dialog 
                visible={dialog}
                icon="account-plus"
                iconColor="#1678c2"
                titleColor="#1678c2" 
                onCancel={() => setDialog(false)}
                cancelText="Nope"
                onConfirm={() => setDialog(false)}
                confirmText="Yeap"
                title="New friend"
                description="Add John to your friends list?"/>
        </div>
    )
}`
const colors = ['primary', 'info', 'success', 'error', 'black', 'secondary'];
const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const FloatingBtnPage = () => {
    const [dialog, setDialog] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [position, setPosition] = useState(positions[3]);

    return (
        <div className="rui-page">
            <div className="rui-page-title">FloatingBtn Component</div>
            <Card outlined title="Usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Color theme"
                    color="primary"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={positions}
                    prefix={<Icon name="book-open"/>}
                    width={200}
                    label="Position"
                    color="primary"
                    value={position}
                    onChange={v => setPosition(v)}/>
                 <br/>
                 <Switch 
                    color="primary" 
                    check={tooltip}
                    rightLabel="Tooltip"
                    className="my-10"
                    onChange={() => setTooltip(!tooltip)}/>
                <br/>
                <Card 
                    className="relative"
                    width={200} 
                    img={manImage}
                    footer={<h4 className="text-center">John Doe</h4>}>
                    <FloatingBtn 
                        icon="plus"
                        size="large"
                        tooltip={tooltip ? 'Add Friend' : null}
                        color={color}
                        position={position} 
                        onClick={() => setDialog(true)}/>
                </Card>
                <Dialog 
                    visible={dialog}
                    icon="account-plus"
                    iconColor="#1678c2"
                    titleColor="#1678c2" 
                    onCancel={() => setDialog(false)}
                    cancelText="Nope"
                    onConfirm={() => setDialog(false)}
                    confirmText="Yeap"
                    title="New friend"
                    description="Add John to your friends list?"/>
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
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index
                itemTitles={keys}/>
        </div>
    )
}

export default FloatingBtnPage;
