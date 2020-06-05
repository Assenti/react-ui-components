import React from 'react';
import { Dropdown, Button, List, Header, Avatar, Icon, ThemeContext, Divider } from '../components';
import manImage from '../img/man_.png';
import Page from '../layouts/Page';
import { modules } from '../data/modules';

const items = [
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
        type: 'string',
        value: ''
    },
    { 
        property: 'rightOffset', 
        description: 'Set Dropdown content offset from right side',
        default: '0', 
        type: 'string',
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

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Dropdown, Button, List, Icon, Avatar, Divider } from '@assenti/rui-components';
const modules = [
    { name: 'Home', icon: 'home' }, 
    { name: 'Profile', icon: 'account' }, 
    { name: 'Settings', icon: 'cog-outline' }, 
    { name: 'Exit', icon: 'exit-to-app' }
];

function Example() {
    return (
        <>
            <Dropdown
                width={200}
                position="right"
                trigger={<Button color="primary" icon="account"/>}>
                <div className="pa-10">
                    <div className="text-center">
                        <Avatar img={manImage} borderType="rounded" height={100}/>
                        <h4>John Doe</h4>
                    </div>
                    <Divider/>
                    <List>
                        {modules.map((item, index) =>
                            <List.Item 
                                keys={index}
                                hover
                                noDivider 
                                item={item.name} 
                                icon={item.icon}/>
                        )}
                    </List>
                </div>
            </Dropdown>
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
                        smooth>
                        <div className="row align-center">
                            <Icon name="react" color="#61dafb" className="mr-5"/>Header</div>
                        <Dropdown
                            dark={theme}
                            width={200}
                            position="right"
                            trigger={<Button dark={theme} light={!theme} icon={<Icon name="account"/>}/>}>
                            <div className="pa-10">
                                <div className="text-center">
                                    <Avatar img={manImage} borderType="rounded" height={100} dark={theme}/>
                                    <h4>John Doe</h4>
                                </div>
                                <Divider/>
                                <List dark={theme}>
                                    {modules.map((item, index) =>
                                        <List.Item 
                                            key={index}
                                            hover
                                            noDivider 
                                            item={item.name} 
                                            icon={item.icon}/>
                                    )}
                                </List>
                            </div>
                        </Dropdown>
                    </Header>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default DropdownPage;