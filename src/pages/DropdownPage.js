import React, { useState, createRef } from 'react';
import { Dropdown, Button, Switch, Card, Table, List, ListItem, Collapse, Header, Avatar, Icon, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man_.png';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'content', 
        description: 'Dropdown content', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'trigger', 
        description: 'Trigger element (Button, InputField & etc.)',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'width', 
        description: 'Set Dropdown content width',
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'minWidth', 
        description: 'Set Dropdown content minWidth',
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set Dropdown content position',
        default: 'left', 
        type: 'string',
        value: 'centered | right'
    },
    { 
        property: 'leftOffset', 
        description: 'Set Dropdown content offset from left side',
        default: '0', 
        type: 'number',
        value: ''
    },
    { 
        property: 'rightOffset', 
        description: 'Set Dropdown content offset from right side',
        default: '0', 
        type: 'number',
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
        property: 'closeManaged', 
        description: 'Enable custom dropdown state control',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible', 
        description: 'Pass state visible value',
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

const modules = [
    { name: 'Home', icon: 'home' }, 
    { name: 'Profile', icon: 'account' }, 
    { name: 'Settings', icon: 'cog-outline' }, 
    { name: 'Exit', icon: 'exit-to-app' }
];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Header, Dropdown, Button, List, ListItem, Icon, Switch, Avatar } from '@assenti/rui-components';
const modules = [
    { name: 'Home', icon: 'home' }, 
    { name: 'Profile', icon: 'account' }, 
    { name: 'Settings', icon: 'cog-outline' }, 
    { name: 'Exit', icon: 'exit-to-app' }
];

function Example() {
    const [dark, setDark] = useState(false);

    return (
        <div>
            <Switch 
                color="primary" 
                check={dark}
                rightLabel="Dark"
                className="my-10"
                onChange={() => setDark(!dark)}/>
            <br/>
            <Header 
                dark={dark}
                smooth 
                title={
                    <div className="row align-center">
                        <Icon name="react" color="#61dafb" className="mr-5"/>Header</div>
                    } 
                rightSide={
                    <Dropdown
                        dark={dark}
                        width={200}
                        position="right"
                        content={
                            <div className="pa-10">
                                <div className="text-center">
                                    <Avatar img={manImage} size={80}/>
                                    <div 
                                        className="text-center fw-bold fz-9 py-10" 
                                        style={{ color: dark ? '#fff' : '#000', 
                                        borderBottom: '1px solid lightgray'}}>John Doe</div>
                                </div>
                                <List dark={dark}>
                                    {modules.map((item, index) =>
                                        <ListItem 
                                            keys={index}
                                            hover
                                            noDivider 
                                            item={item.name} 
                                            icon={item.icon}/>
                                    )}
                                </List>
                            </div>
                        }
                        trigger={<Button dark={dark} light={!dark} icon="account"/>}/>
                }/>
        </div>
    )
}`

const DropdownPage = () => {
    const api = createRef();
    const [dark, setDark] = useState(false);

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="rui-page-title">Dropdown Component</div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <Card outlined title="Dropdown usage">
                <Switch 
                    color="primary" 
                    check={dark}
                    rightLabel="Dark"
                    className="my-10"
                    onChange={() => setDark(!dark)}/>
                <br/>
                <Header 
                    dark={dark}
                    smooth 
                    title={
                        <div className="row align-center">
                            <Icon name="react" color="#61dafb" className="mr-5"/>Header</div>
                        } 
                    rightSide={
                        <Dropdown
                            dark={dark}
                            width={200}
                            position="right"
                            content={
                                <div className="pa-10">
                                    <div className="text-center">
                                        <Avatar img={manImage} size={80}/>
                                        <div 
                                            className="text-center fw-bold fz-9 py-10" 
                                            style={{ color: dark ? '#fff' : '#000', 
                                            borderBottom: '1px solid lightgray'}}>John Doe</div>
                                    </div>
                                    <List dark={dark}>
                                        {modules.map((item, index) =>
                                            <ListItem 
                                                keys={index}
                                                hover
                                                noDivider 
                                                item={item.name} 
                                                icon={item.icon}/>
                                        )}
                                    </List>
                                </div>
                            }
                            trigger={<Button dark={dark} light={!dark} icon="account"/>}/>
                    }/>
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
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default DropdownPage;