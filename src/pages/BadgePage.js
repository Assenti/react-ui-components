import React, { useState } from 'react';
import { Badge, Card, Table, Icon, Collapse, Select, Switch, Avatar, CopyToClipboard, ThemeContext } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/hipster.png';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'value', 
        description: 'Set badge value', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set badge icon', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set badge color', 
        default: 'secondary', 
        type: 'string',
        value: 'primary | info | success | error | dark | secondary'
    },
    { 
        property: 'rounded', 
        description: 'Set rounded badge borders', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'parent', 
        description: 'Parent component for badge', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'visible', 
        description: 'Badge visible state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Badge, Icon, Select, Switch, Avatar } from '@assenti/rui-components';

function Example() {
    const [badge, setBadge] = useState(true);
    const [rounded, setRounded] = useState(false);
    const [color, setColor] = useState(colors[1]);

    return (
        <div className="row align-center">
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Button color"
                color="primary"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={badge}
                rightLabel="Hide"
                className="my-10"
                onChange={() => setBadge(!badge)}/>
            <Switch 
                color="primary" 
                check={rounded}
                rightLabel="Rounded"
                className="my-10"
                onChange={() => setRounded(!rounded)}/>
            <br/>
            <div className="row align-center py-10">
                <Badge 
                    color={color} 
                    value={100}
                    rounded={rounded} 
                    className="mr-20"
                    visible={badge}
                    parent={<Icon size={30} name="email" color="#ffa600"/>}/>
                <Badge 
                    color={color} 
                    icon="plus"
                    rounded={rounded} 
                    className="mr-20"
                    visible={badge}
                    parent={<Avatar img={manImage}/>}/>
            </div>
        </div>
    )
}`
const colors = ['secondary', 'primary', 'info', 'success', 'error', 'dark'];

const BadgePage = () => {
    const [badge, setBadge] = useState(false);
    const [rounded, setRounded] = useState(false);
    const [color, setColor] = useState(colors[1]);

    return (
       <ThemeContext.Consumer>
           {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Badge/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Badge color"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Switch 
                            color="primary" 
                            check={badge}
                            rightLabel="Hide"
                            className="my-10"
                            onChange={() => setBadge(!badge)}/>
                        <Switch 
                            color="primary" 
                            check={rounded}
                            rightLabel="Rounded"
                            className="my-10"
                            onChange={() => setRounded(!rounded)}/>
                        <br/>
                        <div className="row align-center py-10">
                            <Badge 
                                color={color} 
                                value={100}
                                rounded={rounded} 
                                className="mr-20"
                                visible={badge}
                                parent={<Icon size={30} name="email" color="#ffa600"/>}/>
                            <Badge 
                                color={color} 
                                icon="plus"
                                rounded={rounded} 
                                className="mr-20"
                                visible={badge}
                                parent={<Avatar img={manImage} dark={theme}/>}/>
                        </div>
                        <Collapse 
                            icon="code"
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage}
                                dark={theme}
                                className="mr-10"/>} 
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
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
export default BadgePage;