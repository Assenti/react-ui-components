import React, { useState } from 'react';
import { Card, Collapse, Table, CopyToClipboard, Dock, Button, Select, Icon, Switch, ThemeContext } from '../components';
import manImage from '../img/man.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const dockItems = [
    { title: 'WhatsApp', icon: 'whatsapp', iconColor: '#25D366' },
    { title: 'Account', icon: '', iconColor: '', img: manImage },
    { title: 'Facebook', icon: 'facebook', iconColor: '#3b5998' },
    { title: 'LinkedIn', icon: 'linkedin', iconColor: '#007bb6' },
    { title: 'Instagram', icon: 'instagram', iconColor: '#8134AF' },
    { divider: true },
    { title: 'Github', icon: 'github', iconColor: '#4d4d4d' },
    { title: 'Gitlab', icon: 'gitlab', iconColor: '#fc6d26' },
    { divider: true },
    { title: 'Trash', icon: 'delete', iconColor: '#4d4d4d' }
]

const positions = ['top','bottom','left','right'];
const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'onItemClick', 
        description: 'Handle item click in Dock (return item)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'items', 
        description: 'Dock content items', 
        default: '', 
        type: '[{ title?: string, icon?: string, iconColor?: string, img?: string, divider?: boolean }]',
        value: ''
    },
    { 
        property: 'itemSize', 
        description: 'Set Dock items size', 
        default: '60px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'iconSize', 
        description: 'Set Dock items icon size', 
        default: '40px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'visible', 
        description: 'Visible state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'position', 
        description: 'Set Dock position', 
        default: 'bottom', 
        type: 'string',
        value: 'top | bottom | left | right'
    },
    { 
        property: 'length',
        description: 'Set Dock length (Horizontal: width; Vertical: Height)', 
        default: '', 
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
        property: 'tile',
        description: 'Set tile borders type', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Dock, Select, Switch, Button, Icon } from '@assenti/react-ui-components';
const positions = ['top','bottom','left','right'];
const dockItems = [
    { title: 'WhatsApp', icon: 'whatsapp', iconColor: '#25D366' },
    { title: 'Account', icon: '', iconColor: '', img: manImage },
    { title: 'Facebook', icon: 'facebook', iconColor: '#3b5998' },
    { title: 'LinkedIn', icon: 'linkedin', iconColor: '#007bb6' },
    { title: 'Instagram', icon: 'instagram', iconColor: '#8134AF' },
    { divider: true },
    { title: 'Github', icon: 'github', iconColor: '#4d4d4d' },
    { title: 'Gitlab', icon: 'gitlab', iconColor: '#fc6d26' },
    { divider: true },
    { title: 'Trash', icon: 'delete', iconColor: '#4d4d4d' }
]

function Example() {
    const [dock, setDock] = useState(false);
    const [dark, setDark] = useState(false);
    const [tile, setTile] = useState(false);
    const [position, setPosition] = useState('top');

    return (
        <>
            <Select
                items={positions}
                prefix={<Icon name="chart-ppf"/>}
                width={200}
                label="Position"
                color="primary"
                className="my-10"
                value={position}
                onChange={v => setPosition(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={tile}
                rightLabel="Tile borders type"
                className="my-10"
                onChange={() => setTile(!tile)}/>
            <br/>
            <Switch 
                color="primary" 
                check={dark}
                rightLabel="Dark"
                className="my-10"
                onChange={() => setDark(!dark)}/>
            <br/>
            <Button 
                name="Switch Dock" 
                color="primary"
                onClick={() => setDock(!dock)}/>
            <Dock 
                items={dockItems}
                length={500}
                tile={tile}
                onItemClick={item => {
                    console.log(item)
                    setDock(false)
                }}
                dark={dark}
                visible={dock} 
                position={position}/>
        </>
    )
}`

const DockPage = () => {
    const [dock, setDock] = useState(false);
    const [tile, setTile] = useState(false);
    const [position, setPosition] = useState('top');

    return (
        <div className="rui-page">
            <div className="rui-page-title">{'<Dock/>'} Component</div>
            <p>Inspired by macOS Dock toolbar</p>
            <br/>
            <ThemeContext.Consumer>
                {theme => (
                    <>
                        <Card title="Usage" outlined dark={theme}>
                            <Select
                                items={positions}
                                prefix={<Icon name="chart-ppf"/>}
                                width={200}
                                dark={theme}
                                label="Position"
                                color="primary"
                                className="my-10"
                                value={position}
                                onChange={v => setPosition(v)}/>
                            <br/>
                            <Switch 
                                color="primary" 
                                check={tile}
                                rightLabel="Tile borders type"
                                className="my-10"
                                onChange={() => setTile(!tile)}/>
                            <br/>
                            <Button 
                                name="Switch Dock" 
                                color="primary"
                                onClick={() => setDock(!dock)}/>
                            <Dock 
                                items={dockItems}
                                length={500}
                                tile={tile}
                                dark={theme}
                                onItemClick={item => {
                                    console.log(item)
                                    setDock(false)
                                }}
                                visible={dock} 
                                position={position}/>
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
                            <SyntaxHighlighter language="jsx" style={prism}>
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
                </>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default DockPage;