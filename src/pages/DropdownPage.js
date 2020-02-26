import React, { useState, createRef } from 'react';
import { Dropdown, Button, InputField, Card, Table, Tag, Icon, List, ListItem, BackTopBtn, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const heroes = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
];

    const usage =
`// Usage examples
import React, { useState } from 'react';
import { Dropdown, Button, Tag } from '@assenti/rui-components';
const heroes = [
    { hero: 'Captain America' }, 
    { hero: 'Spider man' }, 
    { hero: 'Iron man' }, 
    { hero: 'Hulk' }
];

function Example() {
    const [item, setItem] = useState('');

    return (
        <div>
            <Dropdown
                width={250}
                content={
                    <List dense>
                        {heroes.map((item, index) => 
                            <ListItem
                                key={index}
                                hover 
                                onClick={() => setItem(item.hero)}
                                item={item}
                                itemTitle="hero"/>
                        )}
                    </List>
                }
                itemTitle="name"
                trigger={<Button
                    color="info"
                    name="Button"/>}
                    />
            <Tag value={\`Your select: \${item}\`} color={item ? 'error' : ''} className="ml-10"/>
        </div>
    )
}
`

    const usageInput =
`// Usage examples
import React, { useState } from 'react';
import { Dropdown, InputField, Icon, List, ListItem } from '@assenti/rui-components';
const heroes = [
    { hero: 'Captain America' }, 
    { hero: 'Spider man' }, 
    { hero: 'Iron man' }, 
    { hero: 'Hulk' }
];

function Example() {
    const [item, setItem] = useState('');

    return (
        <div>
            <Dropdown
                content={
                    <List dense>
                        {heroes.map((item, index) => 
                            <ListItem
                                key={index}
                                hover 
                                onClick={() => setItem(item.hero)}
                                item={item}
                                itemTitle="hero"/>
                        )}
                    </List>
                }
                trigger={<InputField
                        color="info"
                        prefix={<Icon name="shield-account"/>}
                            value={item}
                            placeholder="Choose a hero"/>}
                            />
        </div>
    )
}
`

    const usageIcon =
`// Usage examples
import React from 'react';
import { Dropdown, Button, Icon } from '@assenti/rui-components';

function Example() {
    return (
        <div className="row space-around">
            <Dropdown
                width={180}
                content={
                    <div className="row column align-center justify-center px-15 pt-15 pb-20">
                        <Icon name="account" color="gray" size={70}/>
                        <span className="text-center text-dark fz-9 py-5">John Doe</span>
                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                    </div>
                }
                trigger={<Button
                            light
                            icon="account"/>}/>
            <Dropdown
                width={180}
                position="centered"
                content={
                    <div className="row column align-center justify-center px-15 pt-15 pb-20">
                        <Icon name="account" color="gray" size={70}/>
                        <span className="text-center text-dark fz-9 py-5">John Doe</span>
                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                    </div>
                }
                trigger={<Button
                            light
                            icon="account"/>}/>
            <Dropdown
                width={180}
                position="right"
                content={
                    <div className="row column align-center justify-center px-15 pt-15 pb-20">
                        <Icon name="account" color="gray" size={70}/>
                        <span className="text-center text-dark fz-9 py-5">John Doe</span>
                        <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                    </div>
                }
                trigger={<Button
                            light
                            icon="account"/>}/>
        </div>
    )
}
`

const DropdownPage = () => {
    const [item, setItem] = useState('');
    const [item2, setItem2] = useState('');
    const parentRef = createRef();
    const api = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parentRef}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Dropdown Component</div>
                <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
            </div>
            <Card outlined color="primary" title="Dropdown on Button">
                <div className="row align-center">
                    <Dropdown
                        width={250}
                        content={
                            <List dense>
                                {heroes.map((item, index) => 
                                    <ListItem
                                        key={index}
                                        hover 
                                        onClick={() => setItem(item.hero)}
                                        item={item.hero}/>
                                )}
                            </List>
                        }
                        itemTitle="name"
                        trigger={<Button
                            color="info"
                            name="Button"/>}/>
                    <Tag value={`Your select: ${item}`} color={item ? 'error' : ''} className="ml-10"/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Dropdown on InputField">
                <div className="row mb-10">
                    <Dropdown
                        content={
                            <List dense>
                                {heroes.map((item, index) => 
                                    <ListItem
                                        key={index}
                                        hover 
                                        onClick={() => setItem2(item.hero)}
                                        item={item.hero}/>
                                )}
                            </List>
                        }
                        trigger={<InputField
                                color="info"
                                prefix={<Icon name="shield-account"/>}
                                value={item2}
                                placeholder="Choose a hero"/>}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageInput}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Dropdown on Icon button">
                <div className="row space-around">
                    <Dropdown
                        width={180}
                        content={
                            <div className="row column align-center justify-center px-15 pt-15 pb-20">
                                <Icon name="account" color="gray" size={70}/>
                                <span className="text-center text-dark fz-9 py-5">John Doe</span>
                                <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                            </div>
                        }
                        trigger={<Button
                                    light
                                    icon="account"/>}/>
                    <Dropdown
                        width={180}
                        position="centered"
                        content={
                            <div className="row column align-center justify-center px-15 pt-15 pb-20">
                                <Icon name="account" color="gray" size={70}/>
                                <span className="text-center text-dark fz-9 py-5">John Doe</span>
                                <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                            </div>
                        }
                        trigger={<Button
                                    light
                                    icon="account"/>}/>
                    <Dropdown
                        width={180}
                        position="right"
                        content={
                            <div className="row column align-center justify-center px-15 pt-15 pb-20">
                                <Icon name="account" color="gray" size={70}/>
                                <span className="text-center text-dark fz-9 py-5">John Doe</span>
                                <Button name="Sign out" color="error" icon="exit-to-app" iconLeft/>
                            </div>
                        }
                        trigger={<Button
                                    light
                                    icon="account"/>}/>
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageIcon}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn setRef={parentRef} dark/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default DropdownPage;
