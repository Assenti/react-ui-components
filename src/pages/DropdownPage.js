import React from 'react';
import { Dropdown, Button, List, ListItem, Header, Avatar, Icon, ThemeContext } from '../components';
import manImage from '../img/man_.png';
import Page from '../layouts/Page';

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
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Dropdown/>"
                    apiDescItems={items}>
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
                                                    key={index}
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
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default DropdownPage;