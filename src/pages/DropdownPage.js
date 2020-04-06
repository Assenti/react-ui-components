import React, { useState, createRef } from 'react';
import { Dropdown, Button, Switch, Card, Table, List, ListItem, Collapse, Header, Avatar, Icon, CopyToClipboard, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
        property: 'contentMaxHeight', 
        description: 'Set Dropdown content max height', 
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
import { Header, Dropdown, Button, List, ListItem, Icon, Avatar } from '@assenti/rui-components';
const modules = [
    { name: 'Home', icon: 'home' }, 
    { name: 'Profile', icon: 'account' }, 
    { name: 'Settings', icon: 'cog-outline' }, 
    { name: 'Exit', icon: 'exit-to-app' }
];

function Example() {
    return (
        <>
            <Header 
                smooth 
                title={
                    <div className="row align-center">
                        <Icon name="react" color="#61dafb" className="mr-5"/>Header</div>
                    } 
                rightSide={
                    <Dropdown
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
                                <List>
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
                        trigger={<Button light icon="account"/>}/>
                }/>
        </>
    )
}`

const DropdownPage = () => {
    const api = createRef();
    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Dropdown/>'} Component</div>
                        <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <br/>
                        <Header 
                            dark={theme}
                            smooth 
                            title={
                                <div className="row align-center">
                                    <Icon name="react" color="#61dafb" className="mr-5"/>Header</div>
                                } 
                            rightSide={
                                <Dropdown
                                    dark={theme}
                                    width={200}
                                    position="right"
                                    content={
                                        <div className="pa-10">
                                            <div className="text-center">
                                                <Avatar img={manImage} size={80} dark={theme}/>
                                                <div 
                                                    className="text-center fw-bold fz-9 py-10" 
                                                    style={{ color: theme ? '#fff' : '#000', 
                                                    borderBottom: '1px solid lightgray'}}>John Doe</div>
                                            </div>
                                            <List dark={theme}>
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
                                    trigger={<Button dark={theme} light={!theme} icon="account"/>}/>
                            }/>
                        <br/>
                        <Collapse 
                            icon="code" 
                            dark={theme}
                            iconSize={18}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2 ref={api}>API</h2>
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
export default DropdownPage;